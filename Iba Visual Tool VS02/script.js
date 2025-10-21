// interactive 3d image cloud with selective bloom
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
  enablePostprocessing: true,
  enableGeometry: true,
  enableAnimation: true,
  enableInteraction: true,
  enableImageLoading: true
};

// bloom layer constant
const BLOOM_SCENE = 1;
const bloomLayer = new THREE.Layers();
bloomLayer.set(BLOOM_SCENE);

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
    this.enabled = false;
    this.bloomComposer = null;
    this.finalComposer = null;
    this.halftonePass = null;
  }

  enable() {
    if (!config.enablePostprocessing) return;
    this.enabled = true;
    this.setupPostprocessing();
  }

  disable() {
    this.enabled = false;
    // cleanup composers if needed
  }

  setupPostprocessing() {
    const renderScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), bloomParams.strength, bloomParams.radius, bloomParams.threshold);
    bloomPass.threshold = bloomParams.threshold;
    bloomPass.strength = bloomParams.strength;
    bloomPass.radius = bloomParams.radius;

    this.bloomComposer = new EffectComposer(renderer);
    this.bloomComposer.renderToScreen = false;
    this.bloomComposer.addPass(renderScene);
    this.bloomComposer.addPass(bloomPass);

    const mixPass = new ShaderPass(
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
    mixPass.needsSwap = true;

    const outputPass = new OutputPass();

    // add halftone pass after compositing
    const halftoneParams = {
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
    this.halftonePass = new HalftonePass(window.innerWidth, window.innerHeight, halftoneParams);

    this.finalComposer = new EffectComposer(renderer);
    this.finalComposer.addPass(renderScene);
    this.finalComposer.addPass(mixPass);
    this.finalComposer.addPass(this.halftonePass);
    this.finalComposer.addPass(outputPass);
  }

  onWindowResize() {
    if (!this.enabled) return;
    if (this.bloomComposer) this.bloomComposer.setSize(window.innerWidth, window.innerHeight);
    if (this.finalComposer) this.finalComposer.setSize(window.innerWidth, window.innerHeight);
    if (this.halftonePass) this.halftonePass.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    if (!this.enabled) {
      renderer.render(scene, camera);
      return;
    }
    scene.traverse(darkenNonBloomed);
    this.bloomComposer.render();
    scene.traverse(restoreMaterial);
    this.finalComposer.render();
  }
}

// create postprocessor instance
const postProcessor = new PostProcessor();
let scene, camera, renderer, controls;
let bloomComposer, finalComposer;
let pointMeshes = [];
let pointData = [];
let pointCloudGroup;
let halftonePass;

// material storage for bloom rendering
const darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' });
const materials = {};

// raycasting for click detection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// image parameters
let depthMultiplier = 400;
let pointSize = 6;
let dropoffBlack = 0;
let dropoffWhite = 0;
let resolution = 4;
let objectScale = 2;

// animation parameters
let animateRotation = true;
let rotationSpeed = 0.15;
let rotationDirection = 1;
let verticalRotation = 0.01;

// bloom parameters
const bloomParams = {
  threshold: 0,
  strength: 1.5,
  radius: 0.5,
  exposure: 1
};

// gui instance
let gui;

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

  // pointer down for raycasting
  window.addEventListener('pointerdown', onPointerDown);

  // image upload
  document.getElementById("imageUpload").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(event) {
      loadImageCloud(event.target.result);
    };
    reader.readAsDataURL(file);
  });

  // enable postprocessing
  postProcessor.enable();
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
  img.src = src || "https://freight.cargo.site/w/1500/q/75/i/N2172233884443262099351353689255/Post_Slide01.jpg";

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const scale = 0.1;
    const w = (canvas.width = Math.floor(img.width * scale));
    const h = (canvas.height = Math.floor(img.height * scale));
    ctx.drawImage(img, 0, 0, w, h);
    const imgData = ctx.getImageData(0, 0, w, h).data;

    pointData = [];
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const r = imgData[i] / 255;
        const g = imgData[i + 1] / 255;
        const b = imgData[i + 2] / 255;
        const brightness = (r + g + b) / 3;
        pointData.push({ x, y, r, g, b, brightness });
      }
    }
    rebuildGeometry();
    camera.position.z = Math.max(w, h) * 5;
  };
}

function rebuildGeometry() {
  // remove existing meshes
  pointMeshes.forEach(mesh => {
    mesh.geometry.dispose();
    mesh.material.dispose();
    pointCloudGroup.remove(mesh);
  });
  pointMeshes = [];

  const h = Math.max(...pointData.map(p => p.y)) + 1;
  const w = Math.max(...pointData.map(p => p.x)) + 1;

  // create individual meshes instead of points
  const geometry = new THREE.SphereGeometry(pointSize * 0.5, 8, 8);

  for (let y = 0; y < h; y += resolution) {
    for (let x = 0; x < w; x += resolution) {
      const p = pointData.find(pt => pt.x === x && pt.y === y);
      if (!p) continue;
      if (p.brightness <= dropoffBlack || p.brightness >= 1 - dropoffWhite) continue;

      const material = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color(p.r, p.g, p.b) 
      });
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(
        (p.x - w/2) * objectScale,
        (h/2 - p.y) * objectScale,
        (p.brightness - 0.5) * depthMultiplier
      );

      // randomly enable bloom on some points (optional)
      if (Math.random() < 0.1) mesh.layers.enable(BLOOM_SCENE);

      pointCloudGroup.add(mesh);
      pointMeshes.push(mesh);
    }
  }
  render();
}

function onPointerDown(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(pointMeshes, false);
  if (intersects.length > 0) {
    const object = intersects[0].object;
    object.layers.toggle(BLOOM_SCENE);
    render();
  }
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
  togglesFolder.add(config, 'enableCore').name('Core (Scene/Camera/Renderer)').onChange(value => {
    if (value) coreInit.enable(); else coreInit.disable();
    render();
  });
  togglesFolder.add(config, 'enablePostprocessing').name('Postprocessing (Bloom)').onChange(value => {
    if (value) postProcessor.enable(); else postProcessor.disable();
    render();
  });
  togglesFolder.add(config, 'enableGeometry').name('Geometry (Point Cloud)').onChange(value => {
    // TODO: implement geometry manager toggle
    console.log('Geometry toggle:', value);
  });
  togglesFolder.add(config, 'enableAnimation').name('Animation (Rotation)').onChange(value => {
    // TODO: implement animation system toggle
    animateRotation = value;
  });
  togglesFolder.add(config, 'enableInteraction').name('Interaction (Raycasting/GUI)').onChange(value => {
    // TODO: implement interaction system toggle
    console.log('Interaction toggle:', value);
  });
  togglesFolder.add(config, 'enableImageLoading').name('Image Loading').onChange(value => {
    // TODO: implement image loader toggle
    console.log('Image loading toggle:', value);
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

  const imageFolder = gui.addFolder('Image');
  imageFolder.add({ depthMultiplier }, 'depthMultiplier', 100, 1000).onChange(value => {
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
  imageFolder.add({ objectScale }, 'objectScale', 1, 20).onChange(value => {
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
  coreInit.updateStats();
  controls.update();
  if (animateRotation && pointCloudGroup) {
    pointCloudGroup.rotation.y += rotationSpeed * rotationDirection;
    pointCloudGroup.rotation.x += verticalRotation;
  }
  render();
}

init();
loadImageCloud();
setupGUI();
animate();
