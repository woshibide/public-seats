// interactive 3d image cloud with selective bloom using ECS
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { FilmPass } from 'three/addons/postprocessing/FilmPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { HalftonePass } from 'three/addons/postprocessing/HalftonePass.js';
import Stats from 'three/addons/libs/stats.module.js';


// global config object for feature toggles
const config = {
  enableCore: true,
  enablePostprocessing: false,
  enableHalftone: true,
  enableFilm: true,
  enableColor: true,
  enableGeometry: true,
  enableAnimation: true,
  enableInteraction: true,
  enableImageLoading: true
};

// bloom layer constant
const BLOOM_SCENE = 1;
const bloomLayer = new THREE.Layers();
bloomLayer.set(BLOOM_SCENE);

// ECS Implementation
class ECS {
  constructor() {
    this.entities = new Set();
    this.components = new Map();
    this.systems = [];
    this.nextEntityId = 0;
  }

  createEntity() {
    const id = this.nextEntityId++;
    this.entities.add(id);
    return id;
  }

  destroyEntity(entity) {
    this.entities.delete(entity);
    for (const componentMap of this.components.values()) {
      componentMap.delete(entity);
    }
  }

  addComponent(entity, componentType, data) {
    if (!this.components.has(componentType)) {
      this.components.set(componentType, new Map());
    }
    this.components.get(componentType).set(entity, data);
  }

  getComponent(entity, componentType) {
    return this.components.get(componentType)?.get(entity);
  }

  hasComponent(entity, componentType) {
    return this.components.get(componentType)?.has(entity) || false;
  }

  removeComponent(entity, componentType) {
    this.components.get(componentType)?.delete(entity);
  }

  addSystem(system) {
    this.systems.push(system);
  }

  update(deltaTime) {
    for (const system of this.systems) {
      system.update(this, deltaTime);
    }
  }

  query(...componentTypes) {
    const result = [];
    for (const entity of this.entities) {
      if (componentTypes.every(type => this.hasComponent(entity, type))) {
        result.push(entity);
      }
    }
    return result;
  }
}

// Component types
const POSITION = Symbol('position');
const COLOR = Symbol('color');
const MESH = Symbol('mesh');
const BLOOM_ENABLED = Symbol('bloomEnabled');

// Systems
class CoreSystem {
  constructor(coreInit) {
    this.coreInit = coreInit;
  }

  update(ecs, dt) {
    this.coreInit.updateStats();
  }
}

class AnimationSystem {
  update(ecs, dt) {
    if (!window.animateRotation || !pointCloudGroup) return;
    pointCloudGroup.rotation.y += window.rotationSpeed * window.rotationDirection;
    pointCloudGroup.rotation.x += window.verticalRotation;
  }
}

class RenderSystem {
  update(ecs, dt) {
    postProcessor.render();
  }
}

class InteractionSystem {
  constructor() {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.enabled = false;
  }

  enable() {
    this.enabled = true;
    window.addEventListener('pointerdown', this.onPointerDown.bind(this));
  }

  disable() {
    this.enabled = false;
    window.removeEventListener('pointerdown', this.onPointerDown.bind(this));
  }

  onPointerDown(event) {
    if (!this.enabled) return;
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, camera);
    const intersects = this.raycaster.intersectObjects(pointMeshes, false);
    if (intersects.length > 0) {
      const object = intersects[0].object;
      object.layers.toggle(BLOOM_SCENE);
      render();
    }
  }

  update(ecs, dt) {
    // Interaction is event-driven, no per-frame update needed
  }
}

// core initialization class
class CoreInit {
  constructor() {
    this.enabled = false;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.stats = null;
  }

  enable() {
    if (!config.enableCore) return;
    this.enabled = true;
    this.initStats();
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initControls();
    this.initEventListeners();
  }

  disable() {
    this.enabled = false;
    // cleanup if needed
  }

  initStats() {
    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
    this.camera.position.z = 800;
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas"), antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.toneMapping = THREE.ReinhardToneMapping;
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.minDistance = 100;
    this.controls.maxDistance = 2000;
    this.controls.enablePan = true;
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
  }

  initEventListeners() {
    window.addEventListener('resize', () => this.onWindowResize());
  }

  onWindowResize() {
    if (!this.enabled) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  updateStats() {
    if (this.stats) this.stats.update();
  }
}

// create core initialization instance
const coreInit = new CoreInit();

// postprocessing pipeline class
class PostProcessor {
  constructor() {
    this.bloomEnabled = false;
    this.halftoneEnabled = false;
    this.filmEnabled = false;
    this.colorEnabled = false;
    this.bloomComposer = null;
    this.finalComposer = null;
    this.halftonePass = null;
    this.filmPass = null;
    this.colorPass = null;
    this.renderScene = null;
    this.mixPass = null;
    this.outputPass = null;
    this.halftoneParams = {
      shape: 1, // round dots
      radius: 4,
      rotateR: Math.PI / 12,
      rotateB: Math.PI / 12 * 2,
      rotateG: Math.PI / 12 * 3,
      scatter: 0,
      blending: 1,
      blendingMode: 1,
      greyscale: false,
      disable: false
    };
    this.filmParams = {
      noiseIntensity: 0.5,
      scanlinesIntensity: 0.05,
      scanlinesCount: 4096,
      grayscale: false
    };
    this.colorParams = {
      color: { r: 136, g: 204, b: 255 } // 0x88CCFF in rgb (0-255)
    };
    this.colorShader = {
      uniforms: {
        tDiffuse: { value: null },
        color: { value: new THREE.Color(0x88CCFF) },
      },
      vertexShader: `
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
      }`
      ,
      fragmentShader: `
      varying vec2 vUv;
      uniform sampler2D tDiffuse;
      uniform vec3 color;

      void main() {
        vec4 previousPassColor = texture2D(tDiffuse, vUv);
        gl_FragColor = vec4(
          previousPassColor.rgb * color,
          previousPassColor.a);
      }`
      ,
    };
  }

  enableBloom() {
    if (!config.enablePostprocessing) return;
    this.bloomEnabled = true;
    this.setupPostprocessing();
  }

  disableBloom() {
    this.bloomEnabled = false;
    this.setupPostprocessing();
  }

  enableHalftone() {
    if (!config.enableHalftone) return;
    this.halftoneEnabled = true;
    this.setupPostprocessing();
  }

  disableHalftone() {
    this.halftoneEnabled = false;
    this.setupPostprocessing();
  }

  enableFilm() {
    if (!config.enableFilm) return;
    this.filmEnabled = true;
    this.setupPostprocessing();
  }

  disableFilm() {
    this.filmEnabled = false;
    this.setupPostprocessing();
  }

  enableColor() {
    if (!config.enableColor) return;
    this.colorEnabled = true;
    this.setupPostprocessing();
  }

  disableColor() {
    this.colorEnabled = false;
    this.setupPostprocessing();
  }

  setupPostprocessing() {
    // cleanup old composers
    if (this.bloomComposer) {
      this.bloomComposer.dispose();
      this.bloomComposer = null;
    }
    if (this.finalComposer) {
      this.finalComposer.dispose();
      this.finalComposer = null;
    }

    this.renderScene = new RenderPass(scene, camera);
    this.outputPass = new OutputPass();

    // setup bloom composer if bloom is enabled
    if (this.bloomEnabled) {
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), bloomParams.strength, bloomParams.radius, bloomParams.threshold);
      bloomPass.threshold = bloomParams.threshold;
      bloomPass.strength = bloomParams.strength;
      bloomPass.radius = bloomParams.radius;

      this.bloomComposer = new EffectComposer(renderer);
      this.bloomComposer.renderToScreen = false;
      this.bloomComposer.addPass(this.renderScene);
      this.bloomComposer.addPass(bloomPass);

      this.mixPass = new ShaderPass(
        new THREE.ShaderMaterial({
          uniforms: {
            baseTexture: { value: null },
            bloomTexture: { value: this.bloomComposer.renderTarget2.texture }
          },
          vertexShader: document.getElementById('vertexshader').textContent,
          fragmentShader: document.getElementById('fragmentshader').textContent,
          defines: {}
        }), "baseTexture"
      );
      this.mixPass.needsSwap = true;
    }

    // setup halftone pass if halftone is enabled
    if (this.halftoneEnabled) {
      this.halftonePass = new HalftonePass(window.innerWidth, window.innerHeight, this.halftoneParams);
    } else {
      this.halftonePass = null;
    }

    // setup film pass if film is enabled
    if (this.filmEnabled) {
      this.filmPass = new FilmPass(this.filmParams.noiseIntensity, this.filmParams.scanlinesIntensity, this.filmParams.scanlinesCount, this.filmParams.grayscale);
      if (this.filmPass && this.filmPass.uniforms) {
        if (! ('nIntensity' in this.filmPass.uniforms)) {
          this.filmPass.uniforms.nIntensity = { value: this.filmParams.noiseIntensity };
        }
        if (! ('sIntensity' in this.filmPass.uniforms)) {
          this.filmPass.uniforms.sIntensity = { value: this.filmParams.scanlinesIntensity };
        }
        if (! ('sCount' in this.filmPass.uniforms)) {
          this.filmPass.uniforms.sCount = { value: this.filmParams.scanlinesCount };
        }
        if (! ('grayscale' in this.filmPass.uniforms)) {
          this.filmPass.uniforms.grayscale = { value: this.filmParams.grayscale ? 1 : 0 };
        }
      }
    } else {
      this.filmPass = null;
    }

    // setup color pass if color is enabled
    if (this.colorEnabled) {
      this.colorPass = new ShaderPass(this.colorShader);
    } else {
      this.colorPass = null;
    }

    // setup final composer with appropriate passes
    this.finalComposer = new EffectComposer(renderer);
    this.finalComposer.addPass(this.renderScene);
    
    if (this.colorEnabled && this.colorPass) {
      this.finalComposer.addPass(this.colorPass);
    }
    
    if (this.bloomEnabled && this.mixPass) {
      this.finalComposer.addPass(this.mixPass);
    }
    
    if (this.halftoneEnabled && this.halftonePass) {
      this.finalComposer.addPass(this.halftonePass);
    }
    
    if (this.filmEnabled && this.filmPass) {
      this.finalComposer.addPass(this.filmPass);
    }
    
    this.finalComposer.addPass(this.outputPass);
  }

  onWindowResize() {
    if (this.bloomComposer) this.bloomComposer.setSize(window.innerWidth, window.innerHeight);
    if (this.finalComposer) this.finalComposer.setSize(window.innerWidth, window.innerHeight);
    if (this.halftonePass) this.halftonePass.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    if (!this.bloomEnabled && !this.halftoneEnabled && !this.filmEnabled && !this.colorEnabled) {
      renderer.render(scene, camera);
      return;
    }
    
    if (this.bloomEnabled) {
      scene.traverse(darkenNonBloomed);
      this.bloomComposer.render();
      scene.traverse(restoreMaterial);
    }
    
    this.finalComposer.render();
  }
}

// create postprocessor instance
const postProcessor = new PostProcessor();
let scene, camera, renderer, controls;
let bloomComposer, finalComposer;
let pointMeshes = [];
let pointCloudGroup;
let halftonePass;

// material storage for bloom rendering
const darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' });
const materials = {};

// global image data for dynamic rebuilding
let globalImgData = null;
let globalW = 0;
let globalH = 0;

// image parameters
window.depthMultiplier = 100;
window.pointSize = 2.2;
window.dropoffBlack = 0;
window.dropoffWhite = 0;
window.resolution = 1;
window.objectScale = 2;

// animation parameters
window.animateRotation = true;
window.rotationSpeed = 0.005;
window.rotationDirection = 1;
window.verticalRotation = 0.001;

// bloom parameters
const bloomParams = {
  threshold: 0,
  strength: 1.5,
  radius: 0.5,
  exposure: 1.2
};

function loadFromSession() {
  const bp = sessionStorage.getItem('bloomParams');
  if (bp) Object.assign(bloomParams, JSON.parse(bp));

  const hp = sessionStorage.getItem('halftoneParams');
  if (hp) Object.assign(postProcessor.halftoneParams, JSON.parse(hp));

  const fp = sessionStorage.getItem('filmParams');
  if (fp) Object.assign(postProcessor.filmParams, JSON.parse(fp));

  const cp = sessionStorage.getItem('colorParams');
  if (cp) {
    const parsed = JSON.parse(cp);
    postProcessor.colorParams.color.r = parsed.color.r;
    postProcessor.colorParams.color.g = parsed.color.g;
    postProcessor.colorParams.color.b = parsed.color.b;
  }

  const ip = sessionStorage.getItem('imageParams');
  if (ip) {
    const parsed = JSON.parse(ip);
    window.depthMultiplier = parsed.depthMultiplier;
    window.pointSize = parsed.pointSize;
    window.dropoffBlack = parsed.dropoffBlack;
    window.dropoffWhite = parsed.dropoffWhite;
    window.resolution = parsed.resolution;
    window.objectScale = parsed.objectScale;
  }

  const ap = sessionStorage.getItem('animationParams');
  if (ap) {
    const parsed = JSON.parse(ap);
    window.animateRotation = parsed.animateRotation;
    window.rotationSpeed = parsed.rotationSpeed;
    window.rotationDirection = parsed.rotationDirection;
    window.verticalRotation = parsed.verticalRotation;
  }

  const conf = sessionStorage.getItem('config');
  if (conf) Object.assign(config, JSON.parse(conf));

  // Apply loaded values to the postprocessor
  if (postProcessor.bloomComposer && postProcessor.bloomComposer.passes[1]) {
    postProcessor.bloomComposer.passes[1].threshold = bloomParams.threshold;
    postProcessor.bloomComposer.passes[1].strength = bloomParams.strength;
    postProcessor.bloomComposer.passes[1].radius = bloomParams.radius;
  }

  if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
    postProcessor.halftonePass.uniforms.shape.value = postProcessor.halftoneParams.shape;
    postProcessor.halftonePass.uniforms.radius.value = postProcessor.halftoneParams.radius;
    postProcessor.halftonePass.uniforms.rotateR.value = postProcessor.halftoneParams.rotateR;
    postProcessor.halftonePass.uniforms.rotateG.value = postProcessor.halftoneParams.rotateG;
    postProcessor.halftonePass.uniforms.rotateB.value = postProcessor.halftoneParams.rotateB;
    postProcessor.halftonePass.uniforms.scatter.value = postProcessor.halftoneParams.scatter;
    postProcessor.halftonePass.uniforms.blending.value = postProcessor.halftoneParams.blending;
    postProcessor.halftonePass.uniforms.blendingMode.value = postProcessor.halftoneParams.blendingMode;
    postProcessor.halftonePass.uniforms.greyscale.value = postProcessor.halftoneParams.greyscale;
  }

  if (postProcessor.filmPass && postProcessor.filmPass.uniforms) {
    if (postProcessor.filmPass.uniforms.nIntensity) postProcessor.filmPass.uniforms.nIntensity.value = postProcessor.filmParams.noiseIntensity;
    if (postProcessor.filmPass.uniforms.sIntensity) postProcessor.filmPass.uniforms.sIntensity.value = postProcessor.filmParams.scanlinesIntensity;
    if (postProcessor.filmPass.uniforms.sCount) postProcessor.filmPass.uniforms.sCount.value = postProcessor.filmParams.scanlinesCount;
    if (postProcessor.filmPass.uniforms.grayscale) postProcessor.filmPass.uniforms.grayscale.value = postProcessor.filmParams.grayscale ? 1 : 0;
  }

  if (postProcessor.colorPass && postProcessor.colorPass.uniforms) {
    postProcessor.colorPass.uniforms.color.value.r = postProcessor.colorParams.color.r / 255;
    postProcessor.colorPass.uniforms.color.value.g = postProcessor.colorParams.color.g / 255;
    postProcessor.colorPass.uniforms.color.value.b = postProcessor.colorParams.color.b / 255;
  }
}

loadFromSession();

// ECS instance
const ecs = new ECS();

// Systems instances
const coreSystem = new CoreSystem(coreInit);
const animationSystem = new AnimationSystem();
const renderSystem = new RenderSystem();
const interactionSystem = new InteractionSystem();

function init() {
  // enable core initialization
  coreInit.enable();
  
  // set references to core components
  scene = coreInit.scene;
  camera = coreInit.camera;
  renderer = coreInit.renderer;
  renderer.toneMappingExposure = Math.pow(bloomParams.exposure, 4.0);
  controls = coreInit.controls;

  // add controls change listener
  controls.addEventListener('change', render);

  // group for all point meshes
  pointCloudGroup = new THREE.Group();
  scene.add(pointCloudGroup);

  // window resize (additional handling for composers)
  window.addEventListener('resize', onWindowResize);

  // enable postprocessing
  if (config.enablePostprocessing) postProcessor.enableBloom();
  if (config.enableHalftone) postProcessor.enableHalftone();
  if (config.enableFilm) postProcessor.enableFilm();
  if (config.enableColor) postProcessor.enableColor();

  // Add systems to ECS
  ecs.addSystem(coreSystem);
  ecs.addSystem(animationSystem);
  ecs.addSystem(renderSystem);
  ecs.addSystem(interactionSystem);

  // Enable interaction if config allows
  if (config.enableInteraction) {
    interactionSystem.enable();
  }
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  postProcessor.onWindowResize();
  render();
}

function loadImageCloud(src) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = src || "IMG_5243.jpg";

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const scale = 0.1;
    const w = (canvas.width = Math.floor(img.width * scale));
    const h = (canvas.height = Math.floor(img.height * scale));
    ctx.drawImage(img, 0, 0, w, h);
    const imgData = ctx.getImageData(0, 0, w, h).data;

    // Store global data for dynamic rebuilding
    globalImgData = imgData;
    globalW = w;
    globalH = h;

    rebuildGeometry();
    camera.position.z = Math.max(w, h) * 5;
  };
}

function rebuildGeometry() {
  if (!globalImgData) return;

  // Dispose existing meshes and destroy entities
  for (const entity of [...ecs.entities]) {
    const mesh = ecs.getComponent(entity, MESH);
    if (mesh) {
      mesh.geometry.dispose();
      mesh.material.dispose();
      pointCloudGroup.remove(mesh);
      ecs.removeComponent(entity, MESH);
    }
    ecs.destroyEntity(entity);
  }
  pointMeshes = [];

  // Recreate entities based on current parameters
  for (let y = 0; y < globalH; y += window.resolution) {
    for (let x = 0; x < globalW; x += window.resolution) {
      const i = (y * globalW + x) * 4;
      const r = globalImgData[i] / 255;
      const g = globalImgData[i + 1] / 255;
      const b = globalImgData[i + 2] / 255;
      const brightness = (r + g + b) / 3;
      if (brightness <= window.dropoffBlack || brightness >= 1 - window.dropoffWhite) continue;

      const entity = ecs.createEntity();
      ecs.addComponent(entity, POSITION, {
        x: x - globalW/2,
        y: globalH/2 - y,
        z: brightness - 0.5
      });
      ecs.addComponent(entity, COLOR, { r, g, b });
      if (Math.random() < 0.1) {
        ecs.addComponent(entity, BLOOM_ENABLED, true);
      }
    }
  }

  const geometry = new THREE.SphereGeometry(window.pointSize * 0.5, 8, 8);

  for (const entity of ecs.entities) {
    const pos = ecs.getComponent(entity, POSITION);
    const col = ecs.getComponent(entity, COLOR);
    if (!pos || !col) continue;

    const material = new THREE.MeshBasicMaterial({ 
      color: new THREE.Color(col.r, col.g, col.b) 
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(pos.x * window.objectScale, pos.y * window.objectScale, pos.z * window.depthMultiplier);

    if (ecs.hasComponent(entity, BLOOM_ENABLED)) {
      mesh.layers.enable(BLOOM_SCENE);
    }

    pointCloudGroup.add(mesh);
    ecs.addComponent(entity, MESH, mesh);
    pointMeshes.push(mesh);
  }
  render();
}

function render() {
  postProcessor.render();
}

function darkenNonBloomed(obj) {
  if (obj.isMesh && bloomLayer.test(obj.layers) === false) {
    materials[obj.uuid] = obj.material;
    obj.material = darkMaterial;
  }
}

function restoreMaterial(obj) {
  if (materials[obj.uuid]) {
    obj.material = materials[obj.uuid];
    delete materials[obj.uuid];
  }
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  ecs.update(0); // dt not used yet
}

init();
loadImageCloud();

// export { config, postProcessor, bloomParams, renderer, depthMultiplier, pointSize, dropoffBlack, dropoffWhite, resolution, objectScale, animateRotation, rotationSpeed, rotationDirection, verticalRotation, rebuildGeometry, render, loadImageCloud, interactionSystem, coreInit };

animate();

export { config, bloomParams, postProcessor, render, rebuildGeometry, interactionSystem, coreInit, renderer, loadImageCloud };

