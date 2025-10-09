let bs = [];
let bsNum = 1000;
let pr = 50; // perception radius of neighbours
let force = 2 ;
let speed = 10;

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