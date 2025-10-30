/*

- stroke
+ svg
+ video
+ playback controls

*/

let allColumnsPoints = [];

// Menu-related variables
let sliderValues = {
  numRows:            { min: 2, value: 5, max: 100 },
  numCols:            { min: 2, value: 4, max: 100 },
  rowWidth:           { min: 2, value: 88, max: 1000 },
  colWidth:           { min: 2, value: 44, max: 1000 },
  randomOffset:       { min: 0, value: 8, max: 500 },
  interpolationSteps: { min: 1, value: 8, max: 100 },
  animationSpeed:     { min: 30, value: 300, max: 500 },
  maxShapes:          { min: 1, value: 1, max: 50 },
  strokeWeight:       { min: 0, value: 0, max: 100 },
  bgColor:            { value: '#ffffff' },
  strokeColor:        { value: '#000000' },
  fillColor:          { value: '#000000' }
};
let flags = {
  shadows: false,
  mode: false,
  randomMode: true
};
let isAnimating = false;
let sketchNum = 0;

const presetManager = new PresetManager();

// Animation variables
let currentShape = 0;
// maxShapes and framesPerTransition are now controlled by sliders
let transitionProgress = 0;
let currentPoints = [];
let nextPoints = [];

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

// generate random values for all sliders within their ranges
function generateRandomValues() {

    let randomValues = {};
    for (let prop in sliderValues) {
        if (sliderValues[prop].min !== undefined && sliderValues[prop].max !== undefined) {
            // for numeric sliders, generate random value within range
            let range = sliderValues[prop].max - sliderValues[prop].min;
            randomValues[prop] = Math.floor(Math.random() * range) + sliderValues[prop].min;
        }
    }

    randomValues.strokeWeight = 0;

    return randomValues;
}

// log current parameters to console
function logCurrentParameters() {

    
    for (let prop in sliderValues) {
        if (sliderValues[prop].min !== undefined) {
            console.log(`${prop}: ${sliderValues[prop].value}`);
        } else {
            console.log(`${prop}: ${sliderValues[prop].value}`);
        }
    }
}

// apply random values to sliders
function applyRandomValues() {
    let randomValues = generateRandomValues();
    sketchNum ++;
    
    console.log('=== ' + sketchNum + ' ===');
   console.log(new Date().toISOString()); 

    for (let prop in randomValues) {
        sliderValues[prop].value = randomValues[prop];
        console.log(`${prop}: ${randomValues[prop]}`);
        
        // update dom elements
        let slider = document.getElementById(prop + 'Slider');
        let valueSpan = document.getElementById(prop + 'Value');
        if (slider) slider.value = randomValues[prop];
        if (valueSpan) valueSpan.textContent = randomValues[prop];
    }

    console.log('=========================');
    
    // regenerate grid points with new values
    currentPoints = generateGridPoints(sliderValues.numRows.value, sliderValues.numCols.value, sliderValues.rowWidth.value, sliderValues.colWidth.value, sliderValues.randomOffset.value * (currentShape + 1), currentShape);
    nextPoints = generateGridPoints(sliderValues.numRows.value, sliderValues.numCols.value, sliderValues.rowWidth.value, sliderValues.colWidth.value, sliderValues.randomOffset.value * (currentShape + 2), currentShape + 1);
}


function generateGridPoints(numRows, numCols, rowWidth, colWidth, randomOffset, seed) {
    randomSeed(seed);
    let columnsPoints = [];
    for (let row = 0; row < numRows; row++) {
        let columnPoints = [];
        for (let col = 0; col < numCols; col++) {
            let x = row * rowWidth + random(randomOffset);
            let y = col * colWidth + random(randomOffset);
            columnPoints.push(createVector(x, y));
        }
        columnsPoints.push(columnPoints);
    }
    return columnsPoints;
}

function drawGrid(points, interpolationSteps) {
    // noFill();
    // Interpolating between columns and drawing polygons
    for (let index = 0; index < points.length - 1; index++) {
        let currentColumnPoints = points[index];
        let nextColumnPoints = points[index + 1];
        for (let step = 0; step < interpolationSteps; step++) {
            beginShape();
            for (let i = 0; i < currentColumnPoints.length; i++) {
                let interpolatedX = lerp(currentColumnPoints[i].x, nextColumnPoints[i].x, step / interpolationSteps);
                let interpolatedY = lerp(currentColumnPoints[i].y, nextColumnPoints[i].y, step / interpolationSteps);
                vertex(interpolatedX, interpolatedY);
            }
            endShape();
        }
    }
}

function drawGridToGraphics(g, points, interpolationSteps) {
    for (let index = 0; index < points.length - 1; index++) {
        let currentColumnPoints = points[index];
        let nextColumnPoints = points[index + 1];
        for (let step = 0; step < interpolationSteps; step++) {
            g.beginShape();
            for (let i = 0; i < currentColumnPoints.length; i++) {
                let interpolatedX = lerp(currentColumnPoints[i].x, nextColumnPoints[i].x, step / interpolationSteps);
                let interpolatedY = lerp(currentColumnPoints[i].y, nextColumnPoints[i].y, step / interpolationSteps);
                g.vertex(interpolatedX, interpolatedY);
            }
            g.endShape();
        }
    }
}

function drawScene(g = window) {
    g.stroke(sliderValues.strokeColor.value);
    g.fill(sliderValues.fillColor.value);
    g.strokeWeight(sliderValues.strokeWeight.value);
    
    // Interpolate between current and next points
    let easedProgress = easeInOutQuad(transitionProgress);
    let interpolatedPoints = [];
    for (let i = 0; i < currentPoints.length; i++) {
        let interpolatedColumn = [];
        for (let j = 0; j < currentPoints[i].length; j++) {
            let x = lerp(currentPoints[i][j].x, nextPoints[i][j].x, easedProgress);
            let y = lerp(currentPoints[i][j].y, nextPoints[i][j].y, easedProgress);
            interpolatedColumn.push(createVector(x, y));
        }
        interpolatedPoints.push(interpolatedColumn);
    }
    
    // Draw the grid in the center
    g.push();
    // Calculate the actual bounds of the interpolated points
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (let col of interpolatedPoints) {
        for (let point of col) {
            if (point.x < minX) minX = point.x;
            if (point.x > maxX) maxX = point.x;
            if (point.y < minY) minY = point.y;
            if (point.y > maxY) maxY = point.y;
        }
    }
    let centerX = (minX + maxX) / 2;
    let centerY = (minY + maxY) / 2;
    g.translate(width / 2 - centerX, height / 2 - centerY);
    drawGridToGraphics(g, interpolatedPoints, sliderValues.interpolationSteps.value);
    g.pop();
}

function preload() {
    // img = loadImage('chair.jpg');
}

function setup() {

    strokeCap(SQUARE);
	createCanvas(windowWidth, windowHeight);
    // Generate initial points
    currentPoints = generateGridPoints(sliderValues.numRows.value, sliderValues.numCols.value, sliderValues.rowWidth.value, sliderValues.colWidth.value, sliderValues.randomOffset.value * (currentShape + 1), currentShape);
    nextPoints    = generateGridPoints(sliderValues.numRows.value, sliderValues.numCols.value, sliderValues.rowWidth.value, sliderValues.colWidth.value, sliderValues.randomOffset.value * (currentShape + 2), currentShape + 1);
    
    // Initialize slider DOM elements to match sliderValues
    initializeSliders();
    
    // Expand controls by default
    toggleControls();
    
    loop(); // Enable animation
}

function draw() {
    background(sliderValues.bgColor.value);

    // background(img, width, height);

    drawScene();
    
    // Update transition
    transitionProgress += 2 / sliderValues.animationSpeed.value;
    if (transitionProgress >= 1) {
        transitionProgress = 0;
        currentShape++;
        if (currentShape >= sliderValues.maxShapes.value) {
            currentShape = 0;
            // apply random values when loop completes in random mode
            if (flags.randomMode) {
                applyRandomValues();
            }
        }
        currentPoints = nextPoints.map(col => col.map(v => v.copy()));
        nextPoints = generateGridPoints(sliderValues.numRows.value, sliderValues.numCols.value, sliderValues.rowWidth.value, sliderValues.colWidth.value, sliderValues.randomOffset.value * (currentShape + 2), currentShape + 1);
    }
}


//////////////////////////////////

// Initialize slider DOM elements to match sliderValues
function initializeSliders() {
    for (let prop in sliderValues) {
        let element = document.getElementById(prop + 'Slider') || document.getElementById(prop + 'Picker');
        if (element) {
            if (sliderValues[prop].min !== undefined) {
                element.min = sliderValues[prop].min;
                element.max = sliderValues[prop].max;
            }
            element.value = sliderValues[prop].value;
            let valueElement = document.getElementById(prop + 'Value');
            if (valueElement) {
                valueElement.textContent = sliderValues[prop].value;
            }
        }
    }
}

// Function to dynamically set multiple slider values
function setSliderValues(newValues) {
    for (let prop in newValues) {
        if (newValues.hasOwnProperty(prop) && sliderValues.hasOwnProperty(prop)) {
            let val = newValues[prop];
            if (typeof val === 'number') {
                updateSliderValue(prop, val);
            } else if (typeof val === 'string') {
                updateColorValue(prop, val);
            } else if (typeof val === 'object') {
                if (val.min !== undefined) sliderValues[prop].min = val.min;
                if (val.value !== undefined) {
                    if (typeof val.value === 'number') {
                        updateSliderValue(prop, val.value);
                    } else {
                        updateColorValue(prop, val.value);
                    }
                }
                if (val.max !== undefined) sliderValues[prop].max = val.max;
                // Update slider min/max
                let slider = document.getElementById(prop + 'Slider');
                if (slider) {
                    slider.min = sliderValues[prop].min;
                    slider.max = sliderValues[prop].max;
                }
            }
        }
    }
}

// menu toggle function
function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    const arrow = document.querySelector('.dropdown-arrow');

    if (menuContent.classList.contains('expanded')) {
        menuContent.classList.remove('expanded');
        arrow.classList.remove('expanded');
    } else {
        menuContent.classList.add('expanded');
        arrow.classList.add('expanded');
    }
}

// controls toggle function
function toggleControls() {
    const controlsContent = document.getElementById('controlsContent');
    const arrow = document.querySelector('.controls-header .dropdown-arrow');

    if (controlsContent.classList.contains('expanded')) {
        controlsContent.classList.remove('expanded');
        arrow.classList.remove('expanded');
    } else {
        controlsContent.classList.add('expanded');
        arrow.classList.add('expanded');
    }
}

// presets toggle function
function togglePresets() {
    const presetsContent = document.getElementById('presetsContent');
    const arrow = document.querySelector('.presets-header .dropdown-arrow');

    if (presetsContent.classList.contains('expanded')) {
        presetsContent.classList.remove('expanded');
        arrow.classList.remove('expanded');
    } else {
        presetsContent.classList.add('expanded');
        arrow.classList.add('expanded');
        updatePresetDropdown();
    }
}

// slider update function
function updateSliderValue(property, value) {
    sliderValues[property].value = parseFloat(value);
    document.getElementById(property + 'Value').textContent = value;
    if (property === 'numRows' || property === 'numCols') {
        currentPoints = generateGridPoints(sliderValues.numRows.value, sliderValues.numCols.value, sliderValues.rowWidth.value, sliderValues.colWidth.value, sliderValues.randomOffset.value * (currentShape + 1), currentShape);
        nextPoints = generateGridPoints(sliderValues.numRows.value, sliderValues.numCols.value, sliderValues.rowWidth.value, sliderValues.colWidth.value, sliderValues.randomOffset.value * (currentShape + 2), currentShape + 1);
    }
    redraw();
}

// color update function
function updateColorValue(property, value) {
    sliderValues[property].value = value;
    redraw();
}

// update text function
function updateText(value) {
    displayText = value;
    makeStrips();
}

// refresh sketch function
function refreshSketch() {
    redraw();
}

// toggle flag function
function toggleFlag(flag) {
    flags[flag] = !flags[flag];
    if (flag === 'mode') {
        redraw();
    }
}

// animation control functions
function toggleAnimation() {
    isAnimating = !isAnimating;
    const button = document.getElementById('stopButton');
    button.textContent = isAnimating ? 'Stop Animation' : 'Start Animation';
    if (isAnimating) {
        loop();
    } else {
        noLoop();
    }
}

function exportFrame() {
    saveCanvas('animation_frame', 'svg');
}

function exportGraphics() {
    let g = createGraphics(width, height);
    g.clear(); // Set to transparent
    drawScene(g);
    g.save('graphics_no_bg.svg');
}

// Preset functions
function updatePresetDropdown() {
    const select = document.getElementById('presetSelect');
    const names = presetManager.getPresetNames();
    
    // Clear existing options except the first
    select.innerHTML = '<option value="">Select a preset...</option>';
    
    // Add preset options
    names.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
    });
}

function savePreset() {
    const nameInput = document.getElementById('presetNameInput');
    const name = nameInput.value.trim();
    const statusDiv = document.getElementById('presetStatus');
    
    if (!name) {
        statusDiv.textContent = 'Please enter a preset name';
        statusDiv.style.color = '#ff6b6b';
        return;
    }
    
    try {
        // Capture current state
        const state = {
            sliderValues: { ...sliderValues },
            flags: { ...flags }
        };
        
        // Check if preset exists
        if (presetManager.presetExists(name)) {
            if (!confirm(`Preset "${name}" already exists. Overwrite?`)) {
                statusDiv.textContent = 'Save cancelled';
                statusDiv.style.color = '#ffa500';
                return;
            }
        }
        
        const result = presetManager.savePreset(name, state, true);
        statusDiv.textContent = result.message;
        statusDiv.style.color = '#4ecdc4';
        nameInput.value = '';
        updatePresetDropdown();
    } catch (error) {
        statusDiv.textContent = error.message;
        statusDiv.style.color = '#ff6b6b';
    }
}

function loadPreset() {
    const select = document.getElementById('presetSelect');
    const selectedName = select.value;
    const statusDiv = document.getElementById('presetStatus');
    
    if (!selectedName) {
        statusDiv.textContent = 'Please select a preset';
        statusDiv.style.color = '#ff6b6b';
        return;
    }
    
    try {
        const result = presetManager.loadPreset(selectedName);
        const state = result.state;
        
        // Apply slider values
        if (state.sliderValues) {
            Object.keys(state.sliderValues).forEach(key => {
                if (sliderValues[key]) {
                    sliderValues[key].value = state.sliderValues[key].value;
                    // Update DOM
                    const slider = document.getElementById(key + 'Slider');
                    const valueSpan = document.getElementById(key + 'Value');
                    if (slider) slider.value = state.sliderValues[key].value;
                    if (valueSpan) valueSpan.textContent = state.sliderValues[key].value;
                }
            });
        }
        
        // Apply flags
        if (state.flags) {
            Object.assign(flags, state.flags);
        }
        
        // Regenerate points if grid dimensions changed
        currentPoints = generateGridPoints(sliderValues.numRows.value, sliderValues.numCols.value, sliderValues.rowWidth.value, sliderValues.colWidth.value, sliderValues.randomOffset.value * (currentShape + 1), currentShape);
        nextPoints = generateGridPoints(sliderValues.numRows.value, sliderValues.numCols.value, sliderValues.rowWidth.value, sliderValues.colWidth.value, sliderValues.randomOffset.value * (currentShape + 2), currentShape + 1);
        
        statusDiv.textContent = result.message;
        statusDiv.style.color = '#4ecdc4';
        redraw();
    } catch (error) {
        statusDiv.textContent = error.message;
        statusDiv.style.color = '#ff6b6b';
    }
}

function deletePreset() {
    const select = document.getElementById('presetSelect');
    const selectedName = select.value;
    const statusDiv = document.getElementById('presetStatus');
    
    if (!selectedName) {
        statusDiv.textContent = 'Please select a preset to delete';
        statusDiv.style.color = '#ff6b6b';
        return;
    }
    
    if (!confirm(`Delete preset "${selectedName}"?`)) {
        statusDiv.textContent = 'Delete cancelled';
        statusDiv.style.color = '#ffa500';
        return;
    }
    
    try {
        const result = presetManager.deletePreset(selectedName);
        statusDiv.textContent = result.message;
        statusDiv.style.color = '#4ecdc4';
        updatePresetDropdown();
    } catch (error) {
        statusDiv.textContent = error.message;
        statusDiv.style.color = '#ff6b6b';
    }
}

function exportPresets() {
    const data = presetManager.exportPresets();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grids-presets.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    const statusDiv = document.getElementById('presetStatus');
    statusDiv.textContent = 'Presets exported successfully';
    statusDiv.style.color = '#4ecdc4';
}

// Handle import file selection
document.getElementById('importFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const statusDiv = document.getElementById('presetStatus');
    
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            const result = presetManager.importPresets(data);
            statusDiv.textContent = result.message;
            statusDiv.style.color = '#4ecdc4';
            updatePresetDropdown();
        } catch (error) {
            statusDiv.textContent = 'Import failed: ' + error.message;
            statusDiv.style.color = '#ff6b6b';
        }
    };
    reader.readAsText(file);
});

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}