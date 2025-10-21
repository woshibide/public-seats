// UI logic for 3d-cloud
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { config, bloomParams, postProcessor, render, rebuildGeometry, interactionSystem, coreInit, renderer, loadImageCloud } from './script.js';
import { PresetManager } from './presets.js';

// gui instance
let gui;
let randomizeCount = 0;

let guiVisible = true;

// array to hold all gui controllers for updating display
let controllers = [];

// preset manager
const presetManager = new PresetManager();

// preset ui state
const presetUIState = {
  presetName: '',
  selectedPreset: '',
  statusMessage: ''
};

function saveToSession() {
  sessionStorage.setItem('bloomParams', JSON.stringify(bloomParams));
  sessionStorage.setItem('halftoneParams', JSON.stringify(postProcessor.halftoneParams));
  sessionStorage.setItem('filmParams', JSON.stringify(postProcessor.filmParams));
  sessionStorage.setItem('colorParams', JSON.stringify({
    color: {
      r: postProcessor.colorParams.color.r,
      g: postProcessor.colorParams.color.g,
      b: postProcessor.colorParams.color.b
    }
  }));
  sessionStorage.setItem('imageParams', JSON.stringify({
    depthMultiplier: window.depthMultiplier,
    pointSize: window.pointSize,
    dropoffBlack: window.dropoffBlack,
    dropoffWhite: window.dropoffWhite,
    resolution: window.resolution,
    objectScale: window.objectScale
  }));
  sessionStorage.setItem('animationParams', JSON.stringify({
    animateRotation: window.animateRotation,
    rotationSpeed: window.rotationSpeed,
    rotationDirection: window.rotationDirection,
    verticalRotation: window.verticalRotation
  }));
  sessionStorage.setItem('config', JSON.stringify(config));
}

// capture current state for presets
function captureCurrentState() {
  return {
    config: { ...config },
    bloomParams: { ...bloomParams },
    halftoneParams: { ...postProcessor.halftoneParams },
    filmParams: { ...postProcessor.filmParams },
    colorParams: {
      color: {
        r: postProcessor.colorParams.color.r,
        g: postProcessor.colorParams.color.g,
        b: postProcessor.colorParams.color.b
      }
    },
    imageParams: {
      depthMultiplier: window.depthMultiplier,
      pointSize: window.pointSize,
      dropoffBlack: window.dropoffBlack,
      dropoffWhite: window.dropoffWhite,
      resolution: window.resolution,
      objectScale: window.objectScale
    },
    animationParams: {
      animateRotation: window.animateRotation,
      rotationSpeed: window.rotationSpeed,
      rotationDirection: window.rotationDirection,
      verticalRotation: window.verticalRotation
    }
  };
}

// apply a preset state to the system
function applyState(state) {
  // apply config
  if (state.config) {
    Object.assign(config, state.config);
  }

  // apply bloom params
  if (state.bloomParams) {
    Object.assign(bloomParams, state.bloomParams);
    if (postProcessor.bloomComposer && postProcessor.bloomComposer.passes[1]) {
      postProcessor.bloomComposer.passes[1].threshold = bloomParams.threshold;
      postProcessor.bloomComposer.passes[1].strength = bloomParams.strength;
      postProcessor.bloomComposer.passes[1].radius = bloomParams.radius;
    }
    renderer.toneMappingExposure = Math.pow(bloomParams.exposure, 4.0);
  }

  // apply halftone params
  if (state.halftoneParams) {
    Object.assign(postProcessor.halftoneParams, state.halftoneParams);
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
  }

  // apply film params
  if (state.filmParams) {
    Object.assign(postProcessor.filmParams, state.filmParams);
    if (postProcessor.filmPass && postProcessor.filmPass.uniforms) {
      if (postProcessor.filmPass.uniforms.nIntensity) postProcessor.filmPass.uniforms.nIntensity.value = postProcessor.filmParams.noiseIntensity;
      if (postProcessor.filmPass.uniforms.sIntensity) postProcessor.filmPass.uniforms.sIntensity.value = postProcessor.filmParams.scanlinesIntensity;
      if (postProcessor.filmPass.uniforms.sCount) postProcessor.filmPass.uniforms.sCount.value = postProcessor.filmParams.scanlinesCount;
      if (postProcessor.filmPass.uniforms.grayscale) postProcessor.filmPass.uniforms.grayscale.value = postProcessor.filmParams.grayscale ? 1 : 0;
    }
  }

  // apply color params
  if (state.colorParams && state.colorParams.color) {
    postProcessor.colorParams.color.r = state.colorParams.color.r;
    postProcessor.colorParams.color.g = state.colorParams.color.g;
    postProcessor.colorParams.color.b = state.colorParams.color.b;
    if (postProcessor.colorPass && postProcessor.colorPass.uniforms) {
      postProcessor.colorPass.uniforms.color.value.r = postProcessor.colorParams.color.r / 255;
      postProcessor.colorPass.uniforms.color.value.g = postProcessor.colorParams.color.g / 255;
      postProcessor.colorPass.uniforms.color.value.b = postProcessor.colorParams.color.b / 255;
    }
  }

  // apply image params
  if (state.imageParams) {
    window.depthMultiplier = state.imageParams.depthMultiplier;
    window.pointSize = state.imageParams.pointSize;
    window.dropoffBlack = state.imageParams.dropoffBlack;
    window.dropoffWhite = state.imageParams.dropoffWhite;
    window.resolution = state.imageParams.resolution;
    window.objectScale = state.imageParams.objectScale;
  }

  // apply animation params
  if (state.animationParams) {
    window.animateRotation = state.animationParams.animateRotation;
    window.rotationSpeed = state.animationParams.rotationSpeed;
    window.rotationDirection = state.animationParams.rotationDirection;
    window.verticalRotation = state.animationParams.verticalRotation;
  }

  // update all gui controllers to reflect new values
  for (let controller of controllers) {
    controller.updateDisplay();
  }

  // rebuild geometry and re-render
  rebuildGeometry();
  render();
  saveToSession();
}

// update preset dropdown options
function updatePresetDropdown(controller) {
  const names = presetManager.getPresetNames();
  presetUIState.selectedPreset = names.length > 0 ? names[0] : '';
  controller.options(names.length > 0 ? names : ['no presets']);
  controller.updateDisplay();
}

function setupGUI() {
  gui = new GUI();

  // toggles folder for enabling/disabling components
  const togglesFolder = gui.addFolder('Component Toggles');
  


  controllers.push(togglesFolder.add(config, 'enablePostprocessing').name('Bloom Effect').onChange(value => {
    if (value) postProcessor.enableBloom(); else postProcessor.disableBloom();
    render();
    saveToSession();
  }));
  controllers.push(togglesFolder.add(config, 'enableHalftone').name('Halftone Effect').onChange(value => {
    if (value) postProcessor.enableHalftone(); else postProcessor.disableHalftone();
    render();
    saveToSession();
  }));
  controllers.push(togglesFolder.add(config, 'enableFilm').name('Film Effect').onChange(value => {
    if (value) postProcessor.enableFilm(); else postProcessor.disableFilm();
    render();
    saveToSession();
  }));
  controllers.push(togglesFolder.add(config, 'enableColor').name('Color Effect').onChange(value => {
    if (value) postProcessor.enableColor(); else postProcessor.disableColor();
    render();
    saveToSession();
  }));
  controllers.push(togglesFolder.add(config, 'enableGeometry').name('Geometry (Point Cloud)').onChange(value => {
    console.log('Geometry toggle:', value);
    saveToSession();
  }));
  controllers.push(togglesFolder.add(config, 'enableAnimation').name('Animation (Rotation)').onChange(value => {
    animateRotation = value;
    saveToSession();
  }));
  controllers.push(togglesFolder.add(config, 'enableInteraction').name('Interaction (Raycasting/GUI)').onChange(value => {
    if (value) {
      interactionSystem.enable();
    } else {
      interactionSystem.disable();
    }
    saveToSession();
  }));
  



  const bloomFolder = gui.addFolder('Bloom');
  controllers.push(bloomFolder.add(bloomParams, 'threshold', 0, 1).onChange(value => {
    if (postProcessor.bloomComposer && postProcessor.bloomComposer.passes[1]) {
      postProcessor.bloomComposer.passes[1].threshold = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(bloomFolder.add(bloomParams, 'strength', 0, 3).onChange(value => {
    if (postProcessor.bloomComposer && postProcessor.bloomComposer.passes[1]) {
      postProcessor.bloomComposer.passes[1].strength = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(bloomFolder.add(bloomParams, 'radius', 0, 1).onChange(value => {
    if (postProcessor.bloomComposer && postProcessor.bloomComposer.passes[1]) {
      postProcessor.bloomComposer.passes[1].radius = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(bloomFolder.add(bloomParams, 'exposure', 0.1, 2).onChange(value => {
    renderer.toneMappingExposure = Math.pow(value, 4.0);
    render();
    saveToSession();
  }));




  const halftoneFolder = gui.addFolder('Halftone');
  controllers.push(halftoneFolder.add(postProcessor.halftoneParams, 'shape', 0, 4).step(1).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.shape.value = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(halftoneFolder.add(postProcessor.halftoneParams, 'radius', 0, 50).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.radius.value = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(halftoneFolder.add(postProcessor.halftoneParams, 'rotateR', 0, 360).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.rotateR.value = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(halftoneFolder.add(postProcessor.halftoneParams, 'rotateB', 0, 360).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.rotateB.value = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(halftoneFolder.add(postProcessor.halftoneParams, 'rotateG', 0, 360).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.rotateG.value = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(halftoneFolder.add(postProcessor.halftoneParams, 'scatter', 0, 1).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.scatter.value = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(halftoneFolder.add(postProcessor.halftoneParams, 'blending', 0, 1).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.blending.value = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(halftoneFolder.add(postProcessor.halftoneParams, 'blendingMode', 0, 10).step(1).onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.blendingMode.value = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(halftoneFolder.add(postProcessor.halftoneParams, 'greyscale').onChange(value => {
    if (postProcessor.halftonePass && postProcessor.halftonePass.uniforms) {
      postProcessor.halftonePass.uniforms.greyscale.value = value;
    }
    render();
    saveToSession();
  }));




  const filmFolder = gui.addFolder('Film');
  controllers.push(filmFolder.add(postProcessor.filmParams, 'noiseIntensity', 0, 5).onChange(value => {
    if (postProcessor.filmPass && postProcessor.filmPass.uniforms && postProcessor.filmPass.uniforms.nIntensity) {
      postProcessor.filmPass.uniforms.nIntensity.value = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(filmFolder.add(postProcessor.filmParams, 'scanlinesIntensity', 0, 2).onChange(value => {
    if (postProcessor.filmPass && postProcessor.filmPass.uniforms && postProcessor.filmPass.uniforms.sIntensity) {
      postProcessor.filmPass.uniforms.sIntensity.value = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(filmFolder.add(postProcessor.filmParams, 'scanlinesCount', 0, 10000).onChange(value => {
    if (postProcessor.filmPass && postProcessor.filmPass.uniforms && postProcessor.filmPass.uniforms.sCount) {
      postProcessor.filmPass.uniforms.sCount.value = value;
    }
    render();
    saveToSession();
  }));
  controllers.push(filmFolder.add(postProcessor.filmParams, 'grayscale').onChange(value => {
    if (postProcessor.filmPass && postProcessor.filmPass.uniforms && postProcessor.filmPass.uniforms.grayscale) {
      postProcessor.filmPass.uniforms.grayscale.value = postProcessor.filmParams.grayscale ? 1 : 0;
    }
    render();
    saveToSession();
  }));




  const colorFolder = gui.addFolder('Color');
  controllers.push(colorFolder.add(postProcessor.colorParams.color, 'r', 0, 255).onChange(value => {
    if (postProcessor.colorPass && postProcessor.colorPass.uniforms) {
      postProcessor.colorPass.uniforms.color.value.r = value / 255;
    }
    render();
    saveToSession();
  }));
  controllers.push(colorFolder.add(postProcessor.colorParams.color, 'g', 0, 255).onChange(value => {
    if (postProcessor.colorPass && postProcessor.colorPass.uniforms) {
      postProcessor.colorPass.uniforms.color.value.g = value / 255;
    }
    render();
    saveToSession();
  }));
  controllers.push(colorFolder.add(postProcessor.colorParams.color, 'b', 0, 255).onChange(value => {
    if (postProcessor.colorPass && postProcessor.colorPass.uniforms) {
      postProcessor.colorPass.uniforms.color.value.b = value / 255;
    }
    render();
    saveToSession();
  }));




  const imageFolder = gui.addFolder('Image');
  controllers.push(imageFolder.add(window, 'depthMultiplier', 1, 1000).onChange(value => {
    rebuildGeometry();
    saveToSession();
  }));
  controllers.push(imageFolder.add(window, 'pointSize', 1, 100).onChange(value => {
    rebuildGeometry();
    saveToSession();
  }));
  controllers.push(imageFolder.add(window, 'dropoffBlack', 0, 0.5).onChange(value => {
    rebuildGeometry();
    saveToSession();
  }));
  controllers.push(imageFolder.add(window, 'dropoffWhite', 0, 0.5).onChange(value => {
    rebuildGeometry();
    saveToSession();
  }));
  controllers.push(imageFolder.add(window, 'resolution', 1, 10).step(1).onChange(value => {
    rebuildGeometry();
    saveToSession();
  }));
  controllers.push(imageFolder.add(window, 'objectScale', 1, 20).onChange(value => {
    rebuildGeometry();
    saveToSession();
  }));




  const animFolder = gui.addFolder('Animation');
  controllers.push(animFolder.add(window, 'animateRotation').onChange(value => {
    saveToSession();
  }));
  controllers.push(animFolder.add(window, 'rotationSpeed', 0, 0.05).onChange(value => {
    saveToSession();
  }));
  controllers.push(animFolder.add(window, 'rotationDirection', -1, 1).onChange(value => {
    saveToSession();
  }));
  controllers.push(animFolder.add(window, 'verticalRotation', -0.02, 0.02).onChange(value => {
    saveToSession();
  }));




  // presets folder
  const presetsFolder = gui.addFolder('Presets');
  
  // preset name input
  presetsFolder.add(presetUIState, 'presetName').name('Preset Name');
  
  // save preset button
  presetsFolder.add({
    savePreset: () => {
      try {
        const name = presetUIState.presetName.trim();
        if (!name) {
          presetUIState.statusMessage = 'please enter a preset name';
          return;
        }

        // check if preset exists and ask for confirmation
        if (presetManager.presetExists(name)) {
          const confirmed = confirm(`preset "${name}" already exists. do you want to overwrite it?`);
          if (!confirmed) {
            presetUIState.statusMessage = 'save cancelled';
            return;
          }
        }

        const state = captureCurrentState();
        const result = presetManager.savePreset(name, state, true);
        presetUIState.statusMessage = `${result.message}`;
        presetUIState.presetName = '';
        
        // update dropdown
        updatePresetDropdown(loadPresetController);
        
        console.log('preset saved:', name);
      } catch (error) {
        presetUIState.statusMessage = `${error.message}`;
        console.error('save preset error:', error);
      }
    }
  }, 'savePreset').name('save preset');

  // load preset dropdown and button
  const loadPresetController = presetsFolder.add(presetUIState, 'selectedPreset', 
    presetManager.getPresetNames().length > 0 ? presetManager.getPresetNames() : ['no presets']
  ).name('Select Preset');

  presetsFolder.add({
    loadPreset: () => {
      try {
        if (presetUIState.selectedPreset === 'no presets' || !presetUIState.selectedPreset) {
          presetUIState.statusMessage = 'no preset selected';
          return;
        }

        const result = presetManager.loadPreset(presetUIState.selectedPreset);
        applyState(result.state);
        presetUIState.statusMessage = `${result.message}`;
        
        console.log('preset loaded:', presetUIState.selectedPreset);
      } catch (error) {
        presetUIState.statusMessage = `${error.message}`;
        console.error('load preset error:', error);
      }
    }
  }, 'loadPreset').name('load preset');

  // delete preset button
  presetsFolder.add({
    deletePreset: () => {
      try {
        if (presetUIState.selectedPreset === 'no presets' || !presetUIState.selectedPreset) {
          presetUIState.statusMessage = 'no preset selected';
          return;
        }

        const confirmed = confirm(`are you sure you want to delete "${presetUIState.selectedPreset}"?`);
        if (!confirmed) {
          presetUIState.statusMessage = 'delete cancelled';
          return;
        }

        const result = presetManager.deletePreset(presetUIState.selectedPreset);
        presetUIState.statusMessage = `${result.message}`;
        
        // update dropdown
        updatePresetDropdown(loadPresetController);
        
        console.log('preset deleted:', presetUIState.selectedPreset);
      } catch (error) {
        presetUIState.statusMessage = `${error.message}`;
        console.error('delete preset error:', error);
      }
    }
  }, 'deletePreset').name('delete preset');

  // export all presets button
  presetsFolder.add({
    exportAll: () => {
      try {
        const data = presetManager.exportPresets();
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `3d-cloud-presets-${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);
        
        presetUIState.statusMessage = `exported ${presetManager.getPresetCount()} preset(s)`;
        console.log('presets exported');
      } catch (error) {
        presetUIState.statusMessage = `export failed: ${error.message}`;
        console.error('export error:', error);
      }
    }
  }, 'exportAll').name('export all');

  // import presets button
  presetsFolder.add({
    importPresets: () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target.result);
            
            // ask for import mode
            const mode = confirm('click OK to MERGE with existing presets, or CANCEL to OVERWRITE all presets') 
              ? 'merge' 
              : 'overwrite';

            const result = presetManager.importPresets(data, mode);
            presetUIState.statusMessage = `${result.message}`;
            
            // update dropdown
            updatePresetDropdown(loadPresetController);
            
            console.log('presets imported:', result.count);
          } catch (error) {
            presetUIState.statusMessage = `import failed: ${error.message}`;
            console.error('import error:', error);
          }
        };
        reader.readAsText(file);
      };
      input.click();
    }
  }, 'importPresets').name('import presets');

  // clear all presets button
  presetsFolder.add({
    clearAll: () => {
      const confirmation = prompt('this will delete ALL presets! type "DELETE_ALL" to confirm:');
      try {
        const result = presetManager.clearAllPresets(confirmation);
        presetUIState.statusMessage = `${result.message}`;
        
        // update dropdown
        updatePresetDropdown(loadPresetController);
        
        console.log('all presets cleared');
      } catch (error) {
        presetUIState.statusMessage = `${error.message}`;
        console.error('clear all error:', error);
      }
    }
  }, 'clearAll').name('clear all');

  // status message display
  presetsFolder.add(presetUIState, 'statusMessage').name('Status').disable().listen();

  presetsFolder.close();
}

setupGUI();

// Event listeners
document.getElementById('toggleGui').addEventListener('click', () => {
  if (guiVisible) {
    gui.hide();
    coreInit.stats.dom.style.display = 'none';
  } else {
    gui.show();
    coreInit.stats.dom.style.display = 'block';
  }
  guiVisible = !guiVisible;
});

document.getElementById('exportPng').addEventListener('click', () => {
  render();
  const link = document.createElement('a');
  link.download = 'iba.png';
  link.href = renderer.domElement.toDataURL('image/png');
  link.click();
});

document.getElementById('randomize').addEventListener('click', () => {
  randomizeCount++;
  const isFullRandom = randomizeCount % 10 === 0;

  // Helper function to add noise or set full random
  const randomizeValue = (value, min, max, noiseFactor = 0.05) => {
    if (isFullRandom) {
      // Full random within bounds
      return min + Math.random() * (max - min);
    } else {
      // Add noise to current value
      const range = max - min;
      const noise = (Math.random() - 0.5) * 2 * range * noiseFactor;
      return Math.max(min, Math.min(max, value + noise));
    }
  };

  // Randomize bloom parameters
  bloomParams.threshold = randomizeValue(bloomParams.threshold, 0, 1);
  bloomParams.strength = randomizeValue(bloomParams.strength, 0, 3);
  bloomParams.radius = randomizeValue(bloomParams.radius, 0, 1);
  bloomParams.exposure = randomizeValue(bloomParams.exposure, 0.1, 2);

  // Apply bloom changes
  if (postProcessor.bloomComposer && postProcessor.bloomComposer.passes[1]) {
    postProcessor.bloomComposer.passes[1].threshold = bloomParams.threshold;
    postProcessor.bloomComposer.passes[1].strength = bloomParams.strength;
    postProcessor.bloomComposer.passes[1].radius = bloomParams.radius;
  }
  renderer.toneMappingExposure = Math.pow(bloomParams.exposure, 4.0);

  // Randomize halftone parameters
  postProcessor.halftoneParams.shape = Math.floor(randomizeValue(postProcessor.halftoneParams.shape, 0, 4));
  postProcessor.halftoneParams.radius = randomizeValue(postProcessor.halftoneParams.radius, 0, 50);
  postProcessor.halftoneParams.rotateR = randomizeValue(postProcessor.halftoneParams.rotateR, 0, 2 * Math.PI);
  postProcessor.halftoneParams.rotateG = randomizeValue(postProcessor.halftoneParams.rotateG, 0, 2 * Math.PI);
  postProcessor.halftoneParams.rotateB = randomizeValue(postProcessor.halftoneParams.rotateB, 0, 2 * Math.PI);
  postProcessor.halftoneParams.scatter = randomizeValue(postProcessor.halftoneParams.scatter, 0, 1);
  postProcessor.halftoneParams.blending = randomizeValue(postProcessor.halftoneParams.blending, 0, 1);
  postProcessor.halftoneParams.blendingMode = Math.floor(randomizeValue(postProcessor.halftoneParams.blendingMode, 0, 10));

  // Apply halftone changes
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

  // Randomize film parameters
  postProcessor.filmParams.noiseIntensity = randomizeValue(postProcessor.filmParams.noiseIntensity, 0, 5);
  postProcessor.filmParams.scanlinesIntensity = randomizeValue(postProcessor.filmParams.scanlinesIntensity, 0, 2);
  postProcessor.filmParams.scanlinesCount = randomizeValue(postProcessor.filmParams.scanlinesCount, 0, 10000);

  // Apply film changes
  if (postProcessor.filmPass && postProcessor.filmPass.uniforms) {
    if (postProcessor.filmPass.uniforms.nIntensity) postProcessor.filmPass.uniforms.nIntensity.value = postProcessor.filmParams.noiseIntensity;
    if (postProcessor.filmPass.uniforms.sIntensity) postProcessor.filmPass.uniforms.sIntensity.value = postProcessor.filmParams.scanlinesIntensity;
    if (postProcessor.filmPass.uniforms.sCount) postProcessor.filmPass.uniforms.sCount.value = postProcessor.filmParams.scanlinesCount;
    if (postProcessor.filmPass.uniforms.grayscale) postProcessor.filmPass.uniforms.grayscale.value = postProcessor.filmParams.grayscale ? 1 : 0;
  }

  // Randomize color parameters
  postProcessor.colorParams.color.r = randomizeValue(postProcessor.colorParams.color.r, 0, 255);
  postProcessor.colorParams.color.g = randomizeValue(postProcessor.colorParams.color.g, 0, 255);
  postProcessor.colorParams.color.b = randomizeValue(postProcessor.colorParams.color.b, 0, 255);

  // Apply color changes
  if (postProcessor.colorPass && postProcessor.colorPass.uniforms) {
    postProcessor.colorPass.uniforms.color.value.r = postProcessor.colorParams.color.r / 255;
    postProcessor.colorPass.uniforms.color.value.g = postProcessor.colorParams.color.g / 255;
    postProcessor.colorPass.uniforms.color.value.b = postProcessor.colorParams.color.b / 255;
  }

  // Randomize image parameters
  window.depthMultiplier = randomizeValue(window.depthMultiplier, 1, 1000);
  window.pointSize = randomizeValue(window.pointSize, 1, 100);
  window.dropoffBlack = randomizeValue(window.dropoffBlack, 0, 0.5);
  window.dropoffWhite = randomizeValue(window.dropoffWhite, 0, 0.5);
  window.resolution = Math.floor(randomizeValue(window.resolution, 1, 10));
  window.objectScale = randomizeValue(window.objectScale, 1, 40);

  // Randomize animation parameters
  // window.rotationSpeed = randomizeValue(window.rotationSpeed, 0, 0.05);
  // window.rotationDirection = randomizeValue(window.rotationDirection, -1, 1);
  // window.verticalRotation = randomizeValue(window.verticalRotation, -0.02, 0.02);

  // Update GUI controllers to reflect new values
  for (let controller of controllers) {
    controller.updateDisplay();
  }

  // Rebuild geometry for image parameter changes
  rebuildGeometry();

  // Re-render to apply changes
  render();
  saveToSession();
});

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