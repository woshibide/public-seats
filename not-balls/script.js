
let balls_num;
let frequency;
let leSize;

// slider values
let sliderValues = {
    frequency: 4,
    connectionDistance: 100,
    ballSpeed: 1,
    rotationAngle: 15,
    ballsNum: 500,
    ballSize: 45,
    crossSize: 100,
    strokeWeight: 1,
    bgHue: 0,
    bgSat: 0,
    bgBright: 100,
    bgAlpha: 1,
    lineHue: 310,
    lineSat: 60,
    lineBright: 70,
    crossHue: 335,
    crossSat: 100,
    crossBright: 100
};

// flags
let flags = {
    stroke: false,
    balls: true,
    bg: true,
    blinking: false
};

// animation control
let isAnimating = true;

// variables
let balls = [];
const DRAW_BALLS = true;


// not balls
function doubleLines(px, py, w=10, h=10){
    let cw = px - (w / 2);
    let ch = py - (h / 2);

    stroke(55);
    point(px, py);

    stroke(255);
    point(cw, ch);
}


function cross(px, py, w=10, h=10){
    
    // Blinking effect
    if (flags.blinking) {
        leSize = map(tan(frameCount * sliderValues.frequency), -1, 1, 0, sliderValues.ballSize);
        w = leSize;
        h = leSize;
    }
    


    push();
    angleMode(DEGREES);
    translate(px, py);

    
    rotate(sliderValues.rotationAngle);

    // horizontal
    stroke(sliderValues.crossHue, sliderValues.crossSat, sliderValues.crossBright);
    line(-w/2, 0, w/2, 0);
    
    // vertical
    line(0, -h/2, 0, h/2);
    
    // point
    stroke(255, 0, 0);
    // point(0, 0);
    pop();
}

// ball class
class Ball {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
    }
    
    move() {
        this.pos.add(p5.Vector.mult(this.vel, sliderValues.ballSpeed));
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }
        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }
    
    applyForce(force) {
        this.vel.add(force);
    }
    
    display() {
        if (!flags.balls) { 
            noFill();
            // fill(0, 0, 0, 0); 
        } else {
            fill(255, 100); 
        }

        // TODO: add slider control
        strokeWeight(sliderValues.strokeWeight);

        push();
        fill(0);
        // rect(this.pos.x, this.pos.y, sliderValues.ballSize, sliderValues.ballSize);
        pop();
        cross(this.pos.x, this.pos.y, sliderValues.ballSize, sliderValues.ballSize);
        // doubleLines(this.pos.x, this.pos.y, 10, 10);
    }
}

function setup() {

    frameRate(60);

    // create responsive canvas and attach it to the p5-canvas div
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-canvas');

    background(255);

    rectMode(CENTER);
    strokeCap(SQUARE);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
    
    // create not-balls
    for (let i = 0; i < sliderValues.ballsNum; i++) {
        balls.push(new Ball(random(width), random(height)));
    }
}

function draw() {
    if (!isAnimating) return;
    let brightness = map(sin(frameCount * 0.05), -1, 1, 0, 100);

    // translucent background
    if (flags.bg) {
        push();
        fill(sliderValues.bgHue, sliderValues.bgSat, sliderValues.bgBright, sliderValues.bgAlpha);
        noStroke();
        rect(0, 0, width*2, height*2);
        pop();
    }

    noStroke();
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        if (DRAW_BALLS && flags.balls) {
            balls[i].display();
        }
        for (let j = i + 1; j < balls.length; j++) {
            let other = balls[j];
            let d = dist(balls[i].pos.x, balls[i].pos.y, other.pos.x, other.pos.y);
            if (d < sliderValues.connectionDistance && flags.stroke) {
                stroke(sliderValues.lineHue, sliderValues.lineSat, sliderValues.lineBright);
                line(balls[i].pos.x, balls[i].pos.y, other.pos.x, other.pos.y);
            }
            if (d < sliderValues.ballSize) {
                // collision
                let n = p5.Vector.sub(other.pos, balls[i].pos).normalize();
                let v1n = balls[i].vel.dot(n);
                let v2n = other.vel.dot(n);
                balls[i].vel.add(p5.Vector.mult(n, v2n - v1n));
                other.vel.add(p5.Vector.mult(n, v1n - v2n));
                // separate
                let overlap = sliderValues.ballSize - d;
                let sep = p5.Vector.mult(n, overlap / 2);
                balls[i].pos.sub(sep);
                other.pos.add(sep);
            }
        }
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
    let newValue = parseFloat(value);
    if (property === 'ballsNum') {
        let currentNum = balls.length;
        if (newValue > currentNum) {
            for (let i = currentNum; i < newValue; i++) {
                balls.push(new Ball(random(width), random(height)));
            }
        } else if (newValue < currentNum) {
            balls.splice(newValue);
        }
    }
    sliderValues[property] = newValue;
    document.getElementById(property + 'Value').textContent = value;
}

// toggle flag function
function toggleFlag(flag) {
    flags[flag] = !flags[flag];
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

// initialize sliders with values from script.js
function initializeSliders() {
    for (let key in sliderValues) {
        let slider = document.getElementById(key + 'Slider');
        let valueSpan = document.getElementById(key + 'Value');
        if (slider) {
            slider.value = sliderValues[key];
        }
        if (valueSpan) {
            valueSpan.textContent = sliderValues[key];
        }
    }
}

// call initialize on load
initializeSliders();