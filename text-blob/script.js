let font;
let points = [];

// slider values
let sliderValues = {
    hueMin: 20,
    hueMax: 30,
    saturation: 80,
    connectionDistance: 10,
    ballSpeed: 0.3
};

// flags
let flags = {
    stroke: true,
    balls: false,
    bg: true,
    anima: false
};

// appearance variables
let ellipseSizeMin = 15;
let ellipseSizeMax = 25;
let strokeHue = 0;
let strokeSat = 100;
let strokeBright = 100;
let strokeAlpha = 0;
let fillHue = 60;
let fillSat = 60;
let fillBright = 100;
let fillAlpha = 100;

// animation control
let isAnimating = false;


function preload() {
    font = loadFont("./fonts/NectoMono-Regular.otf");
}

function setup() {

    frameRate(60);

    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-canvas');

    background(0);

    ellipseMode(CENTER);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
    
    points = font.textToPoints("very cool rehab", 200, 400, 200, {sampleFactor: 0.5});
    console.log(points);
    

    
}

function draw() {

    // translucent background
    if (flags.bg) {
        push();
        fill(0, 0, 0, 20); 
        rect(0, 0, width, height);
        pop();
    }


    for (let i = 0; i < points.length; i++) {
        let size = random(ellipseSizeMin, ellipseSizeMax);
        if (flags.stroke) {
            stroke(strokeHue, strokeSat, strokeBright, strokeAlpha);
        } else {
            noStroke();
        }
        fill(fillHue, fillSat, fillBright, fillAlpha);
        ellipse(points[i].x, points[i].y, size, size);
    }

    if (!flags.anima){
        noLoop();
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

// slider update function
function updateSliderValue(property, value) {
    const numValue = parseFloat(value);
    document.getElementById(property + 'Value').textContent = value;
    if (property === 'ellipseSizeMin') {
        ellipseSizeMin = numValue;
    } else if (property === 'ellipseSizeMax') {
        ellipseSizeMax = numValue;
    } else if (property === 'strokeHue') {
        strokeHue = numValue;
    } else if (property === 'strokeSat') {
        strokeSat = numValue;
    } else if (property === 'strokeBright') {
        strokeBright = numValue;
    } else if (property === 'strokeAlpha') {
        strokeAlpha = numValue;
    } else if (property === 'fillHue') {
        fillHue = numValue;
    } else if (property === 'fillSat') {
        fillSat = numValue;
    } else if (property === 'fillBright') {
        fillBright = numValue;
    } else if (property === 'fillAlpha') {
        fillAlpha = numValue;
    } else {
        sliderValues[property] = numValue; // for old ones if any
    }
    if (!flags.anima) {
        redraw();
    }
}

// update text function
function updateText(value) {
    points = font.textToPoints(value, 200, 400, 200, {sampleFactor: 0.1});
    if (!flags.anima) {
        redraw();
    }
}

// refresh sketch function
function refreshSketch() {
    background(0);
    if (!flags.anima) {
        redraw();
    }
}

// toggle flag function
function toggleFlag(flag) {
    flags[flag] = !flags[flag];
    if (flag === 'anima') {
        if (flags.anima) {
            loop();
        } else {
            noLoop();
        }
    } else if (!flags.anima) {
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