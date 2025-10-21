let bs = [];
let bsNum = 500;
let pr = 200; // perception radius of neighbours
let force = 1 ;
let speed = 5;

// quadtree 
let quadtree;
let boundary;
let capacity = 3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(120);

    // boundary = new Rect(width/2, height/2, width/2, height/2);
    // quadtree = new quadtree(boundary, capacity);

    for (let i = 0; i < bsNum; i++) {
        bs.push(new Boid(random(width), 
                         random(height), 
                         pr,
                         force,
                         speed
                        ));
    }
}

function draw() {
    
    push();
    fill(0, 20);
    rect(0,0, width, height);
    pop();

    for (let i = 0;  i < bs.length; i++) {
        bs[i].flock(bs);
        bs[i].display();
        bs[i].update();
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