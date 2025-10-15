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
  numRows: 5,
  numCols: 5,
  rowWidth: 40,
  colWidth: 40,
  randomOffset: 3,
  interpolationSteps: 8
};
let flags = {
  shadows: false,
  mode: false
};
let isAnimating = false;

function drawGrid(numRows, numCols, rowWidth, colWidth, randomOffset, interpolationSteps) {
    noFill();
    // Create all points for the grid
    for (let row = 0; row < numRows; row++) {
        let columnPoints = [];
        for (let col = 0; col < numCols; col++) {
            let x = row * rowWidth + random(randomOffset); // Adjust scaling for display
            let y = col * colWidth + random(randomOffset); // Adjust scaling for display
            columnPoints.push(createVector(x, y));
        }
        allColumnsPoints.push(columnPoints);
    }
    // Interpolating between columns and drawing polygons
    for (let index = 0; index < allColumnsPoints.length - 1; index++) {
        let currentColumnPoints = allColumnsPoints[index];
        let nextColumnPoints = allColumnsPoints[index + 1];
        for (let step = 0; step < interpolationSteps; step++) {
            beginShape();
            for (let i = 0; i < currentColumnPoints.length; i++) {
                let interpolatedX = lerp(currentColumnPoints[i].x, nextColumnPoints[i].x, step / interpolationSteps);
                let interpolatedY = lerp(currentColumnPoints[i].y, nextColumnPoints[i].y, step / interpolationSteps);
                //curveVertex(interpolatedX, interpolatedY);
                vertex(interpolatedX, interpolatedY);
            }
            endShape(); // Close the shape to form a polygon
        }
    }
}

function setup() {
	createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    background(0);
    let increment = 0
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 7; j++) {
            push()
            translate(30 + 200 * j, 30 + 200 * i);
            drawGrid(sliderValues.numRows, sliderValues.numCols, sliderValues.rowWidth, sliderValues.colWidth, sliderValues.randomOffset * increment, sliderValues.interpolationSteps);
            increment += 1;
            pop()
            stroke(255);
            allColumnsPoints = []; 
        }
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