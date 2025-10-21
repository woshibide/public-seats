let particles1 = [];

let num = 1500;

// Slider values
let sliderValues = {
    strength: 0.5,
    alpha: 0.8,
    zoom: 300,
    bgFade: 0.1,
    num: 2,
    life: 1000,
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
let obstacle;
let textObstacles = [];
let inputText = "I B A";
let font;
let obstacleMode = "text"; // "text", "circle", or "rectangle"

// flow direction control variables
let flowAngle = 0; // angle in radians for particle flow direction
let isDraggingFlow = false;
let dragStartX, dragStartY;

function preload() {
    font = loadFont('fonts/StellageTest-Regular.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    
    // create obstacle in the center
    obstacle = {
        x: width / 2,
        y: height / 2,
        radius: 150,
        width: 300,
        height: 200
    };
    
    textFont(font);
    updateTextObstacles();

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

function updateTextObstacles() {
    textObstacles = [];
    let fontSize = 200;
    textSize(fontSize);
    let points = font.textToPoints(inputText, width / 2 - textWidth(inputText) / 2, height / 2 + fontSize / 3, fontSize, {
        sampleFactor: 0.15
    });
    
    textObstacles = points;
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
    
    // draw obstacles based on mode
    if (obstacleMode === "circle") {
        // draw circle obstacle
        push();
        fill(sliderValues.bgHue, sliderValues.bgSat, sliderValues.bgBright);
        stroke(sliderValues.hue, sliderValues.saturation, sliderValues.brightness, 0.5);
        strokeWeight(2);
        // circle(obstacle.x, obstacle.y, obstacle.radius * 2);
        pop();
    } else if (obstacleMode === "rectangle") {
        // draw rectangle obstacle
        push();
        fill(sliderValues.bgHue, sliderValues.bgSat, sliderValues.bgBright);
        stroke(sliderValues.hue, sliderValues.saturation, sliderValues.brightness, 0.5);
        rectMode(CENTER);
        // rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        pop();
    } else {
        // draw text obstacles
        push();
        fill(sliderValues.hue, sliderValues.saturation, sliderValues.brightness, 0.3);
        noStroke();
        for (let pt of textObstacles) {
            // circle(pt.x, pt.y, 3);
        }
        pop();
    }

    for (let i = 0; i < num; i++) {
        let p = particles1[i];
        
        let angle = noise(p.x / zoom, p.y / zoom, frameCount / sliderValues.animSpeed) / TWO_PI * 6;
        
        // add global flow direction to the noise-based angle
        angle += flowAngle;
        
        // apply repulsion based on obstacle mode
        let repelForceX = 0;
        let repelForceY = 0;
        
        if (obstacleMode === "circle") {
            // check distance to circular obstacle
            let distToObstacle = dist(p.x, p.y, obstacle.x, obstacle.y);
            
            if (distToObstacle < obstacle.radius + 50) {
                let repelAngle = atan2(p.y - obstacle.y, p.x - obstacle.x);
                let repelStrength = map(distToObstacle, 0, obstacle.radius + 50, 5, 0);
                repelForceX = cos(repelAngle) * repelStrength * 2;
                repelForceY = sin(repelAngle) * repelStrength * 2;
            }
        } else if (obstacleMode === "rectangle") {
            // check distance to rectangle obstacle
            let halfW = obstacle.width / 2;
            let halfH = obstacle.height / 2;
            let padding = 50;
            
            // find closest point on rectangle to particle
            let closestX = constrain(p.x, obstacle.x - halfW, obstacle.x + halfW);
            let closestY = constrain(p.y, obstacle.y - halfH, obstacle.y + halfH);
            
            let distToRect = dist(p.x, p.y, closestX, closestY);
            
            if (distToRect < padding) {
                let repelAngle = atan2(p.y - closestY, p.x - closestX);
                let repelStrength = map(distToRect, 0, padding, 5, 0);
                repelForceX = cos(repelAngle) * repelStrength * 2;
                repelForceY = sin(repelAngle) * repelStrength * 2;
            }
        } else {
            // check distance to text obstacles and apply repulsion
            let obstacleRadius = 15;
            
            for (let pt of textObstacles) {
                let distToPoint = dist(p.x, p.y, pt.x, pt.y);
                if (distToPoint < obstacleRadius) {
                    let repelAngle = atan2(p.y - pt.y, p.x - pt.x);
                    let repelStrength = map(distToPoint, 0, obstacleRadius, 3, 0);
                    repelForceX += cos(repelAngle) * repelStrength;
                    repelForceY += sin(repelAngle) * repelStrength;
                }
            }
        }

        p.prevX = p.x;
        p.prevY = p.y;

        p.x += cos(angle) * strength * 3 + repelForceX;
        p.y += sin(angle) * strength * 3 + repelForceY;


        // edge detection
        if (p.x < 0) {
            p.x = width;
            p.y = random(height);
            p.prevX = p.x;
            p.prevY = p.y;
        }
        if (p.x > width) {
            p.x = 0;
            p.y = random(height);
            p.prevX = p.x;
            p.prevY = p.y;
        }
        if (p.y < 0) {
            p.y = height;
            p.x = random(width);
            p.prevX = p.x;
            p.prevY = p.y;
        }
        if (p.y > height) {
            p.y = 0;
            p.x = random(width);
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
    // reposition obstacle in center
    obstacle.x = width / 2;
    obstacle.y = height / 2;
    updateTextObstacles();
}

// obstacle control functions
function changeObstacleType(type) {
    obstacleMode = type;
    const textInputGroup = document.getElementById('textInputGroup');
    if (type === "text") {
        textInputGroup.style.display = 'block';
    } else {
        textInputGroup.style.display = 'none';
    }
}

function updateText(text) {
    inputText = text;
    updateTextObstacles();
}

function keyPressed() {
    if (keyCode === BACKSPACE) {
        inputText = inputText.slice(0, -1);
    } else if (keyCode === ENTER || keyCode === SHIFT || keyCode === CONTROL || keyCode === ALT) {
        // do nothing for special keys
        return;
    } else if (key.length === 1) {
        inputText += key.toUpperCase();
    }
    updateTextObstacles();
}

// mouse interaction for controlling flow direction
function mousePressed() {
    // only start drag if not clicking on menu
    const menu = document.querySelector('.menu-container');
    if (menu) {
        const rect = menu.getBoundingClientRect();
        if (mouseX >= rect.left && mouseX <= rect.right && 
            mouseY >= rect.top && mouseY <= rect.bottom) {
            return; // don't start flow drag if clicking on menu
        }
    }
    
    isDraggingFlow = true;
    dragStartX = mouseX;
    dragStartY = mouseY;
}

function mouseDragged() {
    if (isDraggingFlow) {
        // calculate angle from drag start to current mouse position
        let dx = mouseX - dragStartX;
        let dy = mouseY - dragStartY;
        flowAngle = atan2(dy, dx);
        
        // visual feedback: draw arrow showing flow direction
        push();
        stroke(255, 200);
        strokeWeight(3);
        fill(255, 100);
        
        // draw line from start to current position
        line(dragStartX, dragStartY, mouseX, mouseY);
        
        // draw arrowhead
        let arrowSize = 15;
        let angle = atan2(dy, dx);
        translate(mouseX, mouseY);
        rotate(angle);
        line(0, 0, -arrowSize, -arrowSize / 2);
        line(0, 0, -arrowSize, arrowSize / 2);
        pop();
    }
}

function mouseReleased() {
    isDraggingFlow = false;
}