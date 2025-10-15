/*
----- Coding Tutorial by Patt Vira ----- 
Name: Bezier Curves (Perlin Noise)
Video Tutorial: https://youtu.be/uctX1P3H3xM?si=7wVuzcgAS9bobG1S

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/


let x1; let y1; 
let x2; let y2; 
let x3; let y3; 
let x4; let y4; 
let offset = 500;
let strokeWeightVal = 1;
let strokeAlpha = 50;
let offsetIncrement = 0.001;
let canContinue = false;
let stopFrame = 200;

function setup() {
    frameRate(240);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(220);

  if (frameCount > stopFrame && !canContinue){
    noLoop();
  } else {
    loop();
  }

  noFill();
  strokeWeight(strokeWeightVal);
  stroke(255, strokeAlpha);
  x1 = noise(offset + 50) * width;
  y1 = noise(offset + 100) * height;
  x2 = noise(offset + 150) * width;
  y2 = noise(offset + 200) * height;
  x3 = noise(offset + 250) * width;
  y3 = noise(offset + 300) * height;
  x4 = noise(offset + 350) * width;
  y4 = noise(offset + 400) * height;
  
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  offset += offsetIncrement;
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
    const numValue = parseFloat(value);
    document.getElementById(property + 'Value').textContent = value;
    if (property === 'strokeWeight') {
        strokeWeightVal = numValue;
    } else if (property === 'strokeAlpha') {
        strokeAlpha = numValue;
    } else if (property === 'offsetIncrement') {
        offsetIncrement = numValue;
    }
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

function continueAnimation() {
    canContinue = true;
    loop();
}

function remakeAnimation() {
    background(0);
    offset = 0;
    canContinue = false;
    loop();
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