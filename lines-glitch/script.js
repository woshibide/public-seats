let particles1 = [];

let num = 500;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    for (let i = 0; i < num; i++) {
        let p = createVector(random(width), random(height));
        p.prevX = p.x;
        p.prevY = p.y;
        p.life = 1000;
        p.hue = random(360);
        particles1.push(p);
    }

    colorMode(HSB, 360, 100, 100, 1);

    // mic = new p5.AudioIn();
    // mic.start();
}

function draw() {
    blendMode(BLEND);

    let minStrength = 1; 
    let maxStrength = 100;
    let strength = 5; // Fixed strength for constant movement

    strength = constrain(strength, minStrength, maxStrength);

    let zoom = 500;
    background(0, 40);
    strokeWeight(1);

    for (let i = 0; i < num; i++) {
        let p = particles1[i];
        let angle = noise(p.x / zoom, p.y / zoom, frameCount / 50) * TWO_PI;

        p.prevX = p.x;
        p.prevY = p.y;

        p.x += cos(angle) * strength;
        p.y += sin(angle) * strength;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.y = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.life--;

        if (p.life <= 0) {
            p.x = random(width);
            p.y = random(height);
            p.prevX = p.x;
            p.prevY = p.y;
            p.life = 1000;
        }

        // --- MUDANÇA: Mapeia a transparência (alpha) diretamente do volume
        // A transparência agora reflete a intensidade do som
        // let alpha = map(vol, 0, 0.3, 0.1, 1);
        let alpha = 3; // Fixed alpha for constant transparency
        
        stroke(0, 0, 100, alpha); 
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