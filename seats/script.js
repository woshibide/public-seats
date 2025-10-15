let balls_num = 5;

// slider values
let sliderValues = {
    hueMin: 150,
    hueMax: 160,
    saturation: 80,
    connectionDistance: 600,
    ballSpeed: 0.5
};

// flags
let flags = {
    stroke: true,
    balls: false,
    bg: false
};

// animation control
let isAnimating = true;

// variables
let balls = [];
const DRAW_BALLS = true;
const LERP_AMOUNT = 0.001;

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
        noStroke();
        ellipse(this.pos.x, this.pos.y, 10, 10);
    }
}

function setup() {

    frameRate(60);
    // create responsive canvas and attach it to the p5-canvas div
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-canvas');

    background(0);

    ellipseMode(CENTER);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
    
    // create balls
    for (let i = 0; i < balls_num; i++) {
        balls.push(new Ball(random(width), random(height)));
    }
}

function draw() {
    if (!isAnimating) return;
    let saturation = map(sin(frameCount * 0.05), -1, 1, 0, 100);

    // translucent background
    if (flags.bg) {
        console.log("translucent bg");
        push();
        fill(0, 0, 0, 20); 
        noStroke();
        rect(0, 0, width, height);
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
                stroke(random(sliderValues.hueMin, sliderValues.hueMax), saturation, 100);
                line(balls[i].pos.x, balls[i].pos.y, other.pos.x, other.pos.y);
            }
            if (d < 10) {
                // collision
                let n = p5.Vector.sub(other.pos, balls[i].pos).normalize();
                let v1n = balls[i].vel.dot(n);
                let v2n = other.vel.dot(n);
                balls[i].vel.add(p5.Vector.mult(n, v2n - v1n));
                other.vel.add(p5.Vector.mult(n, v1n - v2n));
                // separate
                let overlap = 10 - d;
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
    sliderValues[property] = parseFloat(value);
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




function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}