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
    anima: true
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
let theEmoji = '🌺';


// text settings
let sampleFactor = 0.06;
let fontTextSize = 200;
let displayMode = 'ellipse'; // 'ellipse' or 'text'

// animation control
let isAnimating = true;

// size sync state
let sizeSyncEnabled = false;


function preload() {
    font = loadFont("./fonts/NectoMono-Regular.otf");
}

function setup() {

    frameRate(60);

    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-canvas');

    background(0);

    textAlign(CENTER);

    ellipseMode(CENTER);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
    
    
    
    // center the text
    let textValue = "flowers";
    let bounds = font.textBounds(textValue, 0, 0, fontTextSize);
    let x = width/2 - bounds.w/2;
    let y = height/2 + bounds.h/2;
    points = font.textToPoints(textValue, x, y, fontTextSize, {sampleFactor: sampleFactor});
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

        // modes of displaying
        if (displayMode === 'text') {
            textSize(size);
            // ddddd
            text(theEmoji, points[i].x, points[i].y);
        } else {
            ellipse(points[i].x, points[i].y, size, size);
        }
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
        // if sync is enabled, update max to match min
        if (sizeSyncEnabled) {
            ellipseSizeMax = numValue;
            document.getElementById('ellipseSizeMaxSlider').value = numValue;
            document.getElementById('ellipseSizeMaxValue').textContent = numValue;
        }
    } else if (property === 'ellipseSizeMax') {
        ellipseSizeMax = numValue;
        // if sync is enabled, update min to match max
        if (sizeSyncEnabled) {
            ellipseSizeMin = numValue;
            document.getElementById('ellipseSizeMinSlider').value = numValue;
            document.getElementById('ellipseSizeMinValue').textContent = numValue;
        }
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
    } else if (property === 'sampleFactor') {
        sampleFactor = numValue;
        // regenerate points with new sample factor
        let textValue = document.getElementById('textInput').value;
        let bounds = font.textBounds(textValue, 0, 0, fontTextSize);
        let x = width/2 - bounds.w/2;
        let y = height/2 + bounds.h/2;
        points = font.textToPoints(textValue, x, y, fontTextSize, {sampleFactor: sampleFactor});
    } else if (property === 'textSize') {
        fontTextSize = numValue;
        // regenerate points with new text size
        let textValue = document.getElementById('textInput').value;
        let bounds = font.textBounds(textValue, 0, 0, fontTextSize);
        let x = width/2 - bounds.w/2;
        let y = height/2 + bounds.h/2;
        points = font.textToPoints(textValue, x, y, fontTextSize, {sampleFactor: sampleFactor});
    } else {
        sliderValues[property] = numValue; // for old ones if any
    }
    if (!flags.anima) {
        redraw();
    }
}

function updateEmoji(value) {
    // text(value, points[i].x, points[i].y);

    theEmoji = value;

    if (!flags.anima) {
        redraw();
    }
}


function toggleSizeSync(checked) {
    sizeSyncEnabled = checked;
    // if enabling sync, immediately sync max to min value
    if (checked) {
        ellipseSizeMax = ellipseSizeMin;
        document.getElementById('ellipseSizeMaxSlider').value = ellipseSizeMin;
        document.getElementById('ellipseSizeMaxValue').textContent = ellipseSizeMin;
        if (!flags.anima) {
            redraw();
        }
    }
}

// update text function
function updateText(value) {
    let bounds = font.textBounds(value, 0, 0, fontTextSize);
    let x = width/2 - bounds.w/2;
    let y = height/2 + bounds.h/2;
    points = font.textToPoints(value, x, y, fontTextSize, {sampleFactor: sampleFactor});
    if (!flags.anima) {
        redraw();
    }
}

// change display mode function
function changeDisplayMode(mode) {
    displayMode = mode;
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
    // recenter text when window is resized
    let textValue = document.getElementById('textInput').value;
    let bounds = font.textBounds(textValue, 0, 0, fontTextSize);
    let x = width/2 - bounds.w/2;
    let y = height/2 + bounds.h/2;
    points = font.textToPoints(textValue, x, y, fontTextSize, {sampleFactor: sampleFactor});
}