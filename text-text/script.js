// For the #WCCChallenge, theme: "visual poetry."

let page;
let strips = [];
let num = 1;
let offset = 0;
let toff = 0;
let tilt = 0;
let ttilt = 0;
let shadows = true;

let sliderValues = {
    num: 1,
    offset: 0,
    tilt: 0,
    speed: 0.1,
    textSize: 0.25
};

let flags = {
    shadows: false,
    mode: true // true for horizontal, false for vertical
};

let displayText = 'hello\nfrom\nsomehow';

let isAnimating = true;

function setup() {
	createCanvas(windowWidth, windowHeight);
	page = createGraphics(width, height);
	makeStrips();
}

function makeStrips() {
	page.background('GreenYellow');
	page.fill(0);
	page.textSize(page.height * sliderValues.textSize);
	page.textAlign(CENTER, CENTER);
	let lines = displayText.split('\n');
	for (let i = 0; i < lines.length; i++) {
		page.text(lines[i], page.width / 2, (i + 1) * page.height / (lines.length + 1));
	}
	rectMode(CENTER);
	strips = [];
	if (flags.mode) { // horizontal
		for (let i = 0; i < sliderValues.num; i++) {
			let y = i * page.height / sliderValues.num;
			let strip = page.get(0, y, page.width, floor(page.height / sliderValues.num));
			strips.push({
				x: width / 2,
				y: y + page.height / (2 * sliderValues.num) + (height / 2 - page.height / 2),
				img: strip,
				a: 0
			});
		}
	} else { // vertical
		for (let i = 0; i < sliderValues.num; i++) {
			let x = i * page.width / sliderValues.num;
			let strip = page.get(x, 0, floor(page.width / sliderValues.num), page.height);
			strips.push({
				x: x + page.width / (2 * sliderValues.num) + (width / 2 - page.width / 2),
				y: height / 2,
				img: strip,
				a: 0
			});
		}
	}
}

function draw() {
	offset = lerp(offset, sliderValues.offset, sliderValues.speed);
	tilt = lerp(tilt, radians(sliderValues.tilt), sliderValues.speed * 2);
	background('GreenYellow');
	imageMode(CENTER);
	for (let s of strips) {
		let noiseVal = flags.mode ? s.y / 300 : s.x / 300;
		s.a = tilt * (0.5 - noise(frameCount / 60 + noiseVal))
	}
	if (flags.shadows) {
		for (let s of strips) {
			push();
			let offsetX = flags.mode ? offset * (0.5 - noise(frameCount / 180 + s.y / 50)) : 0;
			let offsetY = flags.mode ? 0 : offset * (0.5 - noise(frameCount / 180 + s.x / 50));
			translate(s.x + offsetX, s.y + offsetY);
			rotate(s.a);
			fill(0, 180);
			rect(4, 4, s.img.width, s.img.height);
			pop();
		}
	}
	for (let s of strips) {
		push();
		let offsetX = flags.mode ? offset * (0.5 - noise(frameCount / 180 + s.y / 50)) : 0;
		let offsetY = flags.mode ? 0 : offset * (0.5 - noise(frameCount / 180 + s.x / 50));
		translate(s.x + offsetX, s.y + offsetY);
		rotate(s.a);
		image(s.img, 0, 0);
		pop();
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
    if (property === 'num' || property === 'textSize') {
        makeStrips();
    }
}

// update text function
function updateText(value) {
    displayText = value;
    makeStrips();
}

// refresh sketch function
function refreshSketch() {
    makeStrips();
}

// toggle flag function
function toggleFlag(flag) {
    flags[flag] = !flags[flag];
    if (flag === 'mode') {
        makeStrips();
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