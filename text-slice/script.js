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
    textSize: 0.25,
    textHue: 360,
    textSat: 0,
    textBright: 0,
    bgHue: 80,
    bgSat: 100,
    bgBright: 80,
    shadowHue: 0,
    shadowSat: 0,
    shadowBright: 0,
    shadowAlpha: 180,
    animSpeed: 200
};

let flags = {
    shadows: false,
    mode: true, // true for horizontal, false for vertical
    frostedOverlay: false,
    offsetAnim: false,
    tiltAnim: false,
    sync: false
};

let displayText = 'hello\nfrom\nsomehow';

let isAnimating = true;

let animPhase = 0; // 0: going up, 1: at max, 2: going down, 3: at min
let phaseFrame = 0;
const freezeFrames = 200;

function easeInOut(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
}

function setup() {
	colorMode(HSB);
	createCanvas(windowWidth, windowHeight);
	page = createGraphics(width, height);
	makeStrips();
}

function makeStrips() {
	page.colorMode(HSB);
	page.background(color(sliderValues.bgHue, sliderValues.bgSat, sliderValues.bgBright));
	page.fill(color(sliderValues.textHue, sliderValues.textSat, sliderValues.textBright));
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
	if (flags.offsetAnim || flags.tiltAnim) {
		phaseFrame++;
		let transitionFrames = sliderValues.animSpeed;
		if (animPhase === 0) { // going up
			let progress = phaseFrame / transitionFrames;
			if (progress >= 1) {
				animPhase = 1;
				phaseFrame = 0;
				progress = 1;
			}
			let eased = easeInOut(progress);
			if (flags.sync && flags.offsetAnim && flags.tiltAnim) {
				let val = eased;
				if (flags.offsetAnim) {
					sliderValues.offset = val * 10000;
					updateSliderValue('offset', sliderValues.offset);
				}
				if (flags.tiltAnim) {
					sliderValues.tilt = val * 90;
					updateSliderValue('tilt', sliderValues.tilt);
				}
			} else {
				if (flags.offsetAnim) {
					sliderValues.offset = eased * 10000;
					updateSliderValue('offset', sliderValues.offset);
				}
				if (flags.tiltAnim) {
					sliderValues.tilt = eased * 90;
					updateSliderValue('tilt', sliderValues.tilt);
				}
			}
		} else if (animPhase === 1) { // at max
			if (phaseFrame >= freezeFrames) {
				animPhase = 2;
				phaseFrame = 0;
			}
			// stay at max
			if (flags.offsetAnim) {
				sliderValues.offset = 10000;
				updateSliderValue('offset', sliderValues.offset);
			}
			if (flags.tiltAnim) {
				sliderValues.tilt = 90;
				updateSliderValue('tilt', sliderValues.tilt);
			}
		} else if (animPhase === 2) { // going down
			let progress = phaseFrame / transitionFrames;
			if (progress >= 1) {
				animPhase = 3;
				phaseFrame = 0;
				progress = 1;
			}
			let eased = 1 - easeInOut(progress);
			if (flags.sync && flags.offsetAnim && flags.tiltAnim) {
				let val = eased;
				if (flags.offsetAnim) {
					sliderValues.offset = val * 10000;
					updateSliderValue('offset', sliderValues.offset);
				}
				if (flags.tiltAnim) {
					sliderValues.tilt = val * 90;
					updateSliderValue('tilt', sliderValues.tilt);
				}
			} else {
				if (flags.offsetAnim) {
					sliderValues.offset = eased * 10000;
					updateSliderValue('offset', sliderValues.offset);
				}
				if (flags.tiltAnim) {
					sliderValues.tilt = eased * 90;
					updateSliderValue('tilt', sliderValues.tilt);
				}
			}
		} else if (animPhase === 3) { // at min
			if (phaseFrame >= freezeFrames) {
				animPhase = 0;
				phaseFrame = 0;
			}
			// stay at min
			if (flags.offsetAnim) {
				sliderValues.offset = 0;
				updateSliderValue('offset', sliderValues.offset);
			}
			if (flags.tiltAnim) {
				sliderValues.tilt = 0;
				updateSliderValue('tilt', sliderValues.tilt);
			}
		}
		offset = sliderValues.offset;
		tilt = radians(sliderValues.tilt);
	} else {
		offset = lerp(offset, sliderValues.offset, sliderValues.speed);
		tilt = lerp(tilt, radians(sliderValues.tilt), sliderValues.speed * 2);
	}
	background(color(sliderValues.bgHue, sliderValues.bgSat, sliderValues.bgBright));
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
			fill(color(sliderValues.shadowHue, sliderValues.shadowSat, sliderValues.shadowBright, sliderValues.shadowAlpha));
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
    document.getElementById(property + 'Slider').value = value;
    document.getElementById(property + 'Value').textContent = value;
    if (property === 'num' || property === 'textSize' || property === 'textHue' || property === 'textSat' || property === 'textBright' || property === 'bgHue' || property === 'bgSat' || property === 'bgBright') {
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

// toggle frosted overlay function
function toggleFrostedOverlay() {
    flags.frostedOverlay = !flags.frostedOverlay;
    const overlay = document.getElementById('frosted-overlay');
    if (flags.frostedOverlay) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

// toggle animation function
function toggleAnim(type) {
    flags[type + 'Anim'] = !flags[type + 'Anim'];
}

// toggle sync function
function toggleSync() {
    flags.sync = !flags.sync;
}

// stop animations function
function stopAnimations() {
    flags.offsetAnim = false;
    flags.tiltAnim = false;
    document.getElementById('offsetAnimToggle').checked = false;
    document.getElementById('tiltAnimToggle').checked = false;
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