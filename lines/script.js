// hey u!
//          )      (\_
//         ((    _/{  "-;
//          )).-' {{ ;'`
//         ( (  ;._ \\     
// @od3zza is here.

// Array que armazenará todas as partículas
let particles1 = [];

// Número total de partículas
let num = 1000;

// Variáveis para o microfone
let mic;
let vol;
let smoothedVol = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    for (let i = 0; i < num; i++) {
        let p = createVector(random(width), random(height));
        p.prevX = p.x;
        p.prevY = p.y;
        p.life = 180;
        p.hue = random(360);
        particles1.push(p);
    }

    colorMode(HSB, 360, 100, 100, 1);

    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    blendMode(BLEND);

    vol = mic.getLevel();
    smoothedVol = lerp(smoothedVol, vol, 0.2);

    // --- MUDANÇA: Aumenta a força mínima e máxima para movimento constante e intenso
    let minStrength = 10; // Aumentado para 10, garantindo movimento constante
    let maxStrength = 80;  // Aumentado para 80, para um impacto visual mais forte

    let mappedVol = pow(smoothedVol, 2);
    let strength = map(mappedVol, 0, pow(0.15, 2), minStrength, maxStrength);
    strength = constrain(strength, minStrength, maxStrength);

    let zoom = 300;
    background(0, 40);
    strokeWeight(1);

    for (let i = 0; i < num; i++) {
        let p = particles1[i];
        let angle = noise(p.x / zoom, p.y / zoom, frameCount / 600) * TWO_PI;

        p.prevX = p.x;
        p.prevY = p.y;

        p.x += cos(angle) * strength * 3;
        p.y += sin(angle) * strength * 3;

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
            p.life = 180;
        }

        // --- MUDANÇA: Mapeia a transparência (alpha) diretamente do volume
        // A transparência agora reflete a intensidade do som
        let alpha = map(vol, 0, 0.3, 0.1, 1);
        
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

// drag functions
let isDragging = false;
let dragOffsetX, dragOffsetY;

function startDrag(e) {
    isDragging = true;
    const menu = document.querySelector('.menu-container');
    const rect = menu.getBoundingClientRect();
    dragOffsetX = e.clientX - rect.left;
    dragOffsetY = e.clientY - rect.top;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(e) {
    if (!isDragging) return;
    const menu = document.querySelector('.menu-container');
    menu.style.left = (e.clientX - dragOffsetX) + 'px';
    menu.style.top = (e.clientY - dragOffsetY) + 'px';
}

function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}