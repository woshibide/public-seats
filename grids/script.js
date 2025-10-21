////////////////////////////////////////////////////////

/*
This piece is an exploration of distortion, movement, and transformation within a structured framework.
The artwork consists of a grid of progressive deformations, where an initial order—represented by evenly spaced parallel lines—gradually succumbs to an increasing state of disorder.
The lines begin to ripple, bend, and fold, creating an illusion of three-dimensionality within a two-dimensional space.

The sequential nature of the composition evokes the language of digital simulation, reminiscent of algorithmic manipulations or generative art.
It suggests a process unfolding over time, akin to fabric being stretched and crumpled by an unseen force.
The visual tension arises from the contrast between the initial order and the chaotic disruption, mirroring broader themes of instability, entropy, and transformation.

This work resonates with Op Art and kinetic art influences, where the viewer's perception becomes an active component in experiencing depth and motion.
The subtle yet systematic deterioration of the structure also draws parallels with data corruption, glitch aesthetics, and the fragility of digital and organic systems.

By presenting this gradual shift in form, the piece invites contemplation on the nature of control and unpredictability—whether in physical materials, digital landscapes, or societal structures.
It is a meditation on impermanence, where order is never static but always in flux.

*/
let allColumnsPoints = [];

// Menu-related variables
let sliderValues = {
  numRows: 20,
  numCols: 10,
  rowWidth: 120,
  colWidth: 120,
  randomOffset: 10,
  interpolationSteps: 8,
  animationSpeed: 50,
  maxShapes: 25,
  strokeWeight: 1
};
let flags = {
  shadows: false,
  mode: false
};
let isAnimating = false;

// Animation variables
let currentShape = 10;
// maxShapes and framesPerTransition are now controlled by sliders
let transitionProgress = 0;
let currentPoints = [];
let nextPoints = [];

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
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
    noFill();
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

function setup() {
	createCanvas(windowWidth, windowHeight);
    // Generate initial points
    currentPoints = generateGridPoints(sliderValues.numRows, sliderValues.numCols, sliderValues.rowWidth, sliderValues.colWidth, sliderValues.randomOffset * (currentShape + 1), currentShape);
    nextPoints = generateGridPoints(sliderValues.numRows, sliderValues.numCols, sliderValues.rowWidth, sliderValues.colWidth, sliderValues.randomOffset * (currentShape + 2), currentShape + 1);
    loop(); // Enable animation
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(sliderValues.strokeWeight);
    
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
    push();
    translate(width / 2 - (sliderValues.numRows * sliderValues.rowWidth) / 2, height / 2 - (sliderValues.numCols * sliderValues.colWidth) / 2);
    drawGrid(interpolatedPoints, sliderValues.interpolationSteps);
    pop();
    
    // Update transition
    transitionProgress += 1 / sliderValues.animationSpeed;
    if (transitionProgress >= 1) {
        transitionProgress = 0;
        currentShape++;
        if (currentShape >= sliderValues.maxShapes) {
            currentShape = 0;
        }
        currentPoints = nextPoints.map(col => col.map(v => v.copy()));
        nextPoints = generateGridPoints(sliderValues.numRows, sliderValues.numCols, sliderValues.rowWidth, sliderValues.colWidth, sliderValues.randomOffset * (currentShape + 2), currentShape + 1);
    }
}


//////////////////////////////////

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

// slider update function
function updateSliderValue(property, value) {
    sliderValues[property] = parseFloat(value);
    document.getElementById(property + 'Value').textContent = value;
    if (property === 'numRows' || property === 'numCols') {
        currentPoints = generateGridPoints(sliderValues.numRows, sliderValues.numCols, sliderValues.rowWidth, sliderValues.colWidth, sliderValues.randomOffset * (currentShape + 1), currentShape);
        nextPoints = generateGridPoints(sliderValues.numRows, sliderValues.numCols, sliderValues.rowWidth, sliderValues.colWidth, sliderValues.randomOffset * (currentShape + 2), currentShape + 1);
    }
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
    saveCanvas('animation_frame', 'png');
}




function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}