// For the #WCCChallenge, theme: "visual poetry."
/*
By Okazz
*/
let colors = ['#e6302b', '#fbd400', '#36ad63', '#2B50AA', '#ffffff', '#f654a9'];
let ctx;
let walkers = [];
let points = [];
let cellSize;

// Menu-related variables
let sliderValues = {
  numWalkers: 30,
  gridRows: 16,
  cycleLength: 120,
  trailLength: 50,
  strokeWeight: 0.007,
  speedMultiplier: 1
};
let flags = {
  shadows: false,
  background: 0  // 0: black, 1: white, 2: off
};
let isAnimating = true;

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	ctx = drawingContext;
	let region = width * 1.95;
	let rows = sliderValues.gridRows;
	cellSize = region / rows;
	for (let i = 0; i < sliderValues.numWalkers; i++) {
		walkers.push(new Walker(width / 2, height / 2, cellSize));
	}
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < rows; j++) {
			let x = i * cellSize + (cellSize / 2) + (width - region) / 2;
			let y = j * cellSize + (cellSize / 2) + (height - region) / 2;
			points.push({ x: x, y: y, d: cellSize });
		}
	}
}

function draw() {
    if (flags.background === 0) {
        background(0);
    } else if (flags.background === 1) {
        background(255);
    }
    // if 2, no background call, so trails remain
	for (let i of walkers) {
		i.run();
	}

	for (let i = 0; i < walkers.length; i++) {
		let w = walkers[i];
		if (w.isDead) {
			walkers.splice(i, 1);
			walkers.push(new Walker(width / 2, height / 2, cellSize));
		}
	}

	noStroke();
	fill(255);
	for (let i of points) {
		// circle(i.x, i.y, cellSize/6);
	}
}

class Walker {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.size = cellSize * 0.01;
		this.cycle = sliderValues.cycleLength;
		this.ang = (TAU / 4) * int(random(4));
		this.aStep = (TAU / this.cycle) * random([-1, 1]) * sliderValues.speedMultiplier;
		this.r = r * this.aStep / 2;
		this.locus = [];
		this.lengthLimit = sliderValues.trailLength;
		this.t = 0;
		this.isDead = false;
		this.clr = random(colors);
	}

	show() {
		noStroke();
		fill(this.clr);
		// circle(this.x, this.y, this.size);
		noFill();
		stroke(this.clr);
		strokeWeight(width * sliderValues.strokeWeight);
		beginShape();
		for (let i = 0; i < this.locus.length; i++) {
			vertex(this.locus[i].x, this.locus[i].y);
		}
		vertex(this.x, this.y);
		endShape();

		if (this.locus.length < this.lengthLimit) {
			this.locus.push(createVector(this.x, this.y));
		} else {
			this.locus.splice(0, 1);
		}
	}

	move() {
		this.x += this.r * cos(this.ang);
		this.y += this.r * sin(this.ang);
		this.ang += this.aStep;
		this.t++;
		if (this.t % ((this.cycle / 4) * random([1, 2, 3, 4])) == 0) {
			this.aStep *= -1;
			if (this.x < 0 || width < this.x || this.y < 0 || height < this.y) {
				this.isDead = true;
			}
		}
	}

	init() {

	}

	run() {
		this.show();
		this.move();
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
    // Restart sketch with new values
    walkers = [];
    points = [];
    setup();
}

// update text function
function updateText(value) {
    // Not used in this sketch
}

// refresh sketch function
function refreshSketch() {
    walkers = [];
    points = [];
    setup();
}

// toggle flag function
function toggleFlag(flag) {
    if (flag === 'background') {
        flags.background = (flags.background + 1) % 3;
        walkers = [];
        points = [];
        setup();
    } else {
        flags[flag] = !flags[flag];
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