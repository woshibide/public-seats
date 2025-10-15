let img;
let originalImg;

// Menu-related variables
let sliderValues = {
  numRows: 10,
  numCols: 4,
  rowWidth: 200,
  colWidth: 270,
  randomOffset: 40,
  interpolationSteps: 15,
  strokeWeight: 3
};
let flags = {
  shadows: false,
  mode: false
};
let isAnimating = false;
let increment = 2;
let initialFrames = 0;

function drawGrid(numRows, numCols, rowWidth, colWidth, randomOffset, interpolationSteps, graphics = null) {
    let g = graphics || this;
    g.noFill();
    // Create all points for the grid
    let localColumnsPoints = [];
    for (let row = 0; row < numRows; row++) {
        let columnPoints = [];
        for (let col = 0; col < numCols; col++) {
            let x = row * rowWidth + random(randomOffset); // Adjust scaling for display
            let y = col * colWidth + random(randomOffset); // Adjust scaling for display
            columnPoints.push(createVector(x, y));
        }
        localColumnsPoints.push(columnPoints);
    }
    // Interpolating between columns and drawing polygons
    for (let index = 0; index < localColumnsPoints.length - 1; index++) {
        let currentColumnPoints = localColumnsPoints[index];
        let nextColumnPoints = localColumnsPoints[index + 1];
        for (let step = 0; step < interpolationSteps; step++) {
            g.beginShape();
            for (let i = 0; i < currentColumnPoints.length; i++) {
                let interpolatedX = lerp(currentColumnPoints[i].x, nextColumnPoints[i].x, step / interpolationSteps);
                let interpolatedY = lerp(currentColumnPoints[i].y, nextColumnPoints[i].y, step / interpolationSteps);
                //curveVertex(interpolatedX, interpolatedY);
                g.vertex(interpolatedX, interpolatedY);
            }
            g.endShape(); // Close the shape to form a polygon
        }
    }
}



function preload() {
    img = loadImage('input.jpg')
    console.log(img);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
    img.resize(width, height);
    originalImg = img.get();
    loop();
}

function draw() {

    
    img = originalImg.get();
    background(0);

    
    if (initialFrames < 3) {
        increment += 0.1;
        initialFrames++;
    } else if (isAnimating) {
        increment += 0.1;
    }
    push();
    translate(width / 2 - (sliderValues.numRows * sliderValues.rowWidth) / 2, height / 2 - (sliderValues.numCols * sliderValues.colWidth) / 2);
    let maskGraphics = createGraphics(width, height);
    maskGraphics.stroke(255);
    maskGraphics.strokeWeight(sliderValues.strokeWeight);
    maskGraphics.strokeCap(SQUARE);
    drawGrid(sliderValues.numRows, sliderValues.numCols, sliderValues.rowWidth, sliderValues.colWidth, sliderValues.randomOffset * increment, sliderValues.interpolationSteps, maskGraphics);
    pop();
    img.mask(maskGraphics);
    
    if (!isAnimating && initialFrames >= 2) {
        noLoop();
    }


    image(img, 0, 0);
    

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

function handleImageUpload(input) {
    if (input.files && input.files[0]) {
        img = loadImage(URL.createObjectURL(input.files[0]), () => {
            img.resize(width, height);
            redraw();
        });
    }
}




function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}