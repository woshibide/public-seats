function preload(){
    shashader = loadShader('shader.vert', 'shader.frag');
}


function setup() {
    frameRate(240);
    createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  shader(shashader);
  AnimationPlaybackEvent(width, height);
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