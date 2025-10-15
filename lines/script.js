let particles1 = [];

let num = 5000;

// Slider values
let sliderValues = {
    strength: 0.5,
    alpha: 0.5,
    zoom: 300,
    bgFade: 0.1,
    num: 2,
    life: 10000,
    animSpeed: 500,
    strokeW: 3,
    hue: 0,
    saturation: 0,
    brightness: 100,
    bgHue: 0,
    bgSat: 0,
    bgBright: 0
};


// Other variables
let isAnimating = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    initParticles();

    sliderValues.num = num;

    // Sync sliders with current values
    for (let prop in sliderValues) {
        let slider = document.getElementById(prop + 'Slider');
        if (slider) slider.value = sliderValues[prop];
        let valueSpan = document.getElementById(prop + 'Value');
        if (valueSpan) valueSpan.textContent = sliderValues[prop];
    }

    colorMode(HSB, 360, 100, 100, 1);

    // mic = new p5.AudioIn();
    // mic.start();
}

function initParticles() {
    particles1 = [];
    for (let i = 0; i < num; i++) {
        let p = createVector(random(width), random(height));
        p.prevX = p.x;
        p.prevY = p.y;
        p.life = sliderValues.life;
        p.hue = sliderValues.hue;
        particles1.push(p);
    }
}

function draw() {

    blendMode(BLEND);

    // --- MUDANÇA: Aumenta a força mínima e máxima para movimento constante e intenso
    let minStrength = 1; // Ajustado para permitir controle via slider
    let maxStrength = 50;  // Ajustado

    let strength = sliderValues.strength;
    strength = constrain(strength, minStrength, maxStrength);

    let zoom = sliderValues.zoom;
    background(sliderValues.bgHue, sliderValues.bgSat, sliderValues.bgBright, sliderValues.bgFade);
    strokeWeight(1);

    push();
    fill(255);
    pop();

    for (let i = 0; i < num; i++) {
        let p = particles1[i];
        let angle = noise(p.x / zoom, p.y / zoom, frameCount / sliderValues.animSpeed) / TWO_PI * 6;

        p.prevX = p.x;
        p.prevY = p.y;

        p.x += cos(angle) * strength * 3;
        p.y += sin(angle) * strength * 3;

        if (p.x < 0) {
            p.x = width;
            p.prevX = p.x;
            p.prevY = p.y;
        }
        if (p.x > width) {
            p.x = 0;
            p.prevX = p.x;
            p.prevY = p.y;
        }
        if (p.y < 0) {
            p.y = height;
            p.prevX = p.x;
            p.prevY = p.y;
        }
        if (p.y > height) {
            p.y = 0;
            p.prevX = p.x;
            p.prevY = p.y;
        }

        p.life--;

        if (p.life <= 0) {
            p.x = random(width);
            p.y = random(height);
            p.prevX = p.x;
            p.prevY = p.y;
            p.life = sliderValues.life;
        }

        // --- MUDANÇA: Mapeia a transparência (alpha) diretamente do volume
        // A transparência agora reflete a intensidade do som
        // let alpha = map(vol, 0, 0.3, 0.1, 1);
        let alpha = sliderValues.alpha; // Controlled by slider
        
        strokeWeight(sliderValues.strokeW);
        stroke(sliderValues.hue, sliderValues.saturation, sliderValues.brightness, alpha); 
        
        // Draw straight line
        line(p.prevX, p.prevY, p.x, p.y);
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
    if (property === 'num') {
        num = sliderValues.num;
        initParticles();
    }
    redraw();
}

// refresh sketch function
function refreshSketch() {
    background(0);
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