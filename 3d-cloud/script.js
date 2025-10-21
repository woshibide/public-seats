// interactive 3d image cloud with selective bloom using ECS
import * as THREE from "three";
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { HalftonePass } from 'three/addons/postprocessing/HalftonePass.js';
import Stats from 'three/addons/libs/stats.module.js';

// global config object for feature toggles
const config = {
  enableCore: true,
  enablePostprocessing: false,
  enableHalftone: true,
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
    if (!animateRotation || !pointCloudGroup) return;
    pointCloudGroup.rotation.y += rotationSpeed * rotationDirection;
    pointCloudGroup.rotation.x += verticalRotation;
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
    this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas"), antialias: true });
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
    this.bloomComposer = null;
    this.finalComposer = null;
    this.halftonePass = null;
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

    // setup final composer with appropriate passes
    this.finalComposer = new EffectComposer(renderer);
    this.finalComposer.addPass(this.renderScene);
    
    if (this.bloomEnabled && this.mixPass) {
      this.finalComposer.addPass(this.mixPass);
    }
    
    if (this.halftoneEnabled && this.halftonePass) {
      this.finalComposer.addPass(this.halftonePass);
    }
    
    this.finalComposer.addPass(this.outputPass);
  }

  onWindowResize() {
    if (this.bloomComposer) this.bloomComposer.setSize(window.innerWidth, window.innerHeight);
    if (this.finalComposer) this.finalComposer.setSize(window.innerWidth, window.innerHeight);
    if (this.halftonePass) this.halftonePass.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    if (!this.bloomEnabled && !this.halftoneEnabled) {
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

// image parameters
let depthMultiplier = 100;
let pointSize = 2.2;
let dropoffBlack = 0;
let dropoffWhite = 0;
let resolution = 1;
let objectScale = 2;

// animation parameters
let animateRotation = true;
let rotationSpeed = 0.005;
let rotationDirection = 1;
let verticalRotation = 0.001;

// bloom parameters
const bloomParams = {
  threshold: 0,
  strength: 1.5,
  radius: 0.5,
  exposure: 1.2
};

// ECS instance
const ecs = new ECS();

// gui instance
let gui;

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
  controls = coreInit.controls;

  // add controls change listener
  controls.addEventListener('change', render);

  // group for all point meshes
  pointCloudGroup = new THREE.Group();
  scene.add(pointCloudGroup);

  // window resize (additional handling for composers)
  window.addEventListener('resize', onWindowResize);

  // image upload handler
  const imageUpload = document.getElementById('imageUpload');
  imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        loadImageCloud(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  // enable postprocessing
  if (config.enablePostprocessing) postProcessor.enableBloom();
  if (config.enableHalftone) postProcessor.enableHalftone();

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

    // Clear existing entities
    for (const entity of [...ecs.entities]) {
      const mesh = ecs.getComponent(entity, MESH);
      if (mesh) {
        mesh.geometry.dispose();
        mesh.material.dispose();
        pointCloudGroup.remove(mesh);
      }
      ecs.destroyEntity(entity);
    }
    pointMeshes = [];

    for (let y = 0; y < h; y += resolution) {
      for (let x = 0; x < w; x += resolution) {
        const i = (y * w + x) * 4;
        const r = imgData[i] / 255;
        const g = imgData[i + 1] / 255;
        const b = imgData[i + 2] / 255;
        const brightness = (r + g + b) / 3;
        if (brightness <= dropoffBlack || brightness >= 1 - dropoffWhite) continue;

        const entity = ecs.createEntity();
        ecs.addComponent(entity, POSITION, {
          x: (x - w/2) * objectScale,
          y: (h/2 - y) * objectScale,
          z: (brightness - 0.5) * depthMultiplier
        });
        ecs.addComponent(entity, COLOR, { r, g, b });
        if (Math.random() < 0.1) {
          ecs.addComponent(entity, BLOOM_ENABLED, true);
        }
      }
    }
    rebuildGeometry();
    camera.position.z = Math.max(w, h) * 5;
  };
}

function rebuildGeometry() {
  // Dispose existing meshes
  for (const entity of ecs.entities) {
    const mesh = ecs.getComponent(entity, MESH);
    if (mesh) {
      mesh.geometry.dispose();
      mesh.material.dispose();
      pointCloudGroup.remove(mesh);
      ecs.removeComponent(entity, MESH);
    }
  }
  pointMeshes = [];

  const geometry = new THREE.SphereGeometry(pointSize * 0.5, 8, 8);

  for (const entity of ecs.entities) {
    const pos = ecs.getComponent(entity, POSITION);
    const col = ecs.getComponent(entity, COLOR);
    if (!pos || !col) continue;

    const material = new THREE.MeshBasicMaterial({ 
      color: new THREE.Color(col.r, col.g, col.b) 
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(pos.x, pos.y, pos.z);

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

function setupGUI() {
  gui = new GUI();

  // toggles folder for enabling/disabling components
  const togglesFolder = gui.addFolder('Component Toggles');
  
  togglesFolder.add(config, 'enablePostprocessing').name('Bloom Effect').onChange(value => {
    if (value) postProcessor.enableBloom(); else postProcessor.disableBloom();
    render();
  });
  togglesFolder.add(config, 'enableHalftone').name('Halftone Effect').onChange(value => {
    if (value) postProcessor.enableHalftone(); else postProcessor.disableHalftone();
    render();
  });
  togglesFolder.add(config, 'enableGeometry').name('Geometry (Point Cloud)').onChange(value => {
    console.log('Geometry toggle:', value);
  });
  togglesFolder.add(config, 'enableAnimation').name('Animation (Rotation)').onChange(value => {
    animateRotation = value;
  });
  togglesFolder.add(config, 'enableInteraction').name('Interaction (Raycasting/GUI)').onChange(value => {
    if (value) {
      interactionSystem.enable();
    } else {
      interactionSystem.disable();
    }
  });
  
  const bloomFolder = gui.addFolder('Bloom');
  bloomFolder.add(bloomParams, 'threshold', 0, 1).onChange(value => {
    if (postProcessor.bloomComposer && postProcessor.bloomComposer.passes[1]) {
      postProcessor.bloomComposer.passes[1].threshold = value;
    }
    render();
  });
  bloomFolder.add(bloomParams, 'strength', 0, 3).onChange(value => {
    if (postProcessor.bloomComposer && postProcessor.bloomComposer.passes[1]) {
      postProcessor.bloomComposer.passes[1].strength = value;
    }
    render();
  });
  bloomFolder.add(bloomParams, 'radius', 0, 1).onChange(value => {
    if (postProcessor.bloomComposer && postProcessor.bloomComposer.passes[1]) {
      postProcessor.bloomComposer.passes[1].radius = value;
    }
    render();
  });
  bloomFolder.add(bloomParams, 'exposure', 0.1, 2).onChange(value => {
    renderer.toneMappingExposure = Math.pow(value, 4.0);
    render();
  });

  const halftoneFolder = gui.addFolder('Halftone');
  halftoneFolder.add(postProcessor.halftoneParams, 'shape', 0, 10).step(1).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.shape.value = value;
    }
    render();
  });
  halftoneFolder.add(postProcessor.halftoneParams, 'radius', 0, 50).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.radius.value = value;
    }
    render();
  });
  halftoneFolder.add(postProcessor.halftoneParams, 'rotateR', 0, 2 * Math.PI).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.rotateR.value = value;
    }
    render();
  });
  halftoneFolder.add(postProcessor.halftoneParams, 'rotateB', 0, 2 * Math.PI).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.rotateB.value = value;
    }
    render();
  });
  halftoneFolder.add(postProcessor.halftoneParams, 'rotateG', 0, 2 * Math.PI).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.rotateG.value = value;
    }
    render();
  });
  halftoneFolder.add(postProcessor.halftoneParams, 'scatter', 0, 1).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.scatter.value = value;
    }
    render();
  });
  halftoneFolder.add(postProcessor.halftoneParams, 'blending', 0, 1).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.blending.value = value;
    }
    render();
  });
  halftoneFolder.add(postProcessor.halftoneParams, 'blendingMode', 0, 10).step(1).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.blendingMode.value = value;
    }
    render();
  });
  halftoneFolder.add(postProcessor.halftoneParams, 'greyscale').onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.greyscale.value = value;
    }
    render();
  });

  const imageFolder = gui.addFolder('Image');
  imageFolder.add({ depthMultiplier }, 'depthMultiplier', 1, 1000).onChange(value => {
    depthMultiplier = value;
    rebuildGeometry();
  });
  imageFolder.add({ pointSize }, 'pointSize', 1, 10).onChange(value => {
    pointSize = value;
    rebuildGeometry();
  });
  imageFolder.add({ dropoffBlack }, 'dropoffBlack', 0, 0.5).onChange(value => {
    dropoffBlack = value;
    rebuildGeometry();
  });
  imageFolder.add({ dropoffWhite }, 'dropoffWhite', 0, 0.5).onChange(value => {
    dropoffWhite = value;
    rebuildGeometry();
  });
  imageFolder.add({ resolution }, 'resolution', 1, 10).step(1).onChange(value => {
    resolution = value;
    rebuildGeometry();
  });
  imageFolder.add({ objectScale }, 'objectScale', 1, 40).onChange(value => {
    objectScale = value;
    rebuildGeometry();
  });

  const animFolder = gui.addFolder('Animation');
  animFolder.add({ animateRotation }, 'animateRotation').onChange(value => {
    animateRotation = value;
  });
  animFolder.add({ rotationSpeed }, 'rotationSpeed', 0, 0.05).onChange(value => {
    rotationSpeed = value;
  });
  animFolder.add({ rotationDirection }, 'rotationDirection', -1, 1).onChange(value => {
    rotationDirection = value;
  });
  animFolder.add({ verticalRotation }, 'verticalRotation', -0.02, 0.02).onChange(value => {
    verticalRotation = value;
  });
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  ecs.update(0); // dt not used yet
}

init();
loadImageCloud();
setupGUI();
animate();
