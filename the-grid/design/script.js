let img;
let originalImg;

let sliderValues = {
  numRows: 10,
  numCols: 4,
  rowWidth: 200,
  colWidth: 270,
  randomOffset: 40,
  interpolationSteps: 15,
  strokeWeight: 3
};
let flags = {
  shadows: false,
  mode: false
};
let isAnimating = false;
let increment = 2;
let initialFrames = 0;


let frequency;
let scrollFactor = 0;
let scrollTimeout = null;

function preload() {
    // img = loadImage('teletubbies-jpg-2983617398.jpg')
    // console.log(img);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
    // img.resize(width, height);
    // originalImg = img.get();
    loop();

    strokeCap(SQUARE);

    // listen to page scroll and update bend amount
    window.addEventListener('scroll', handleScroll);
}

function draw() {

    // img = originalImg.get();
    background(0);

    noFill();
    noStroke();
    strokeWeight(20);
    stroke(255);

    frequency = 40;

    initialFrames++;

    for (let i = 0; i < width + frequency; i += frequency){

        let dir;
        if (i < width / 2){
            dir = 1;
        } else {
            dir = -1;
        }

        // distance from center (0 at center, 1 at edges)
        const centerX = width / 2;
        let distNorm = Math.min(1, Math.abs(i - centerX) / (width / 2));

        // bend magnitude increases toward edges and with scroll
        // scrollFactor is 0..1, distNorm is 0..1
        const bendBase = frequency;
        const bendFromEdge = distNorm; // 0.1..0.6
        const bendFromScroll = scrollFactor; // 0..1
        const bendMag = bendBase * bendFromEdge * bendFromScroll;
        const offsetX = bendMag * dir;

        beginShape();
        vertex(i, 0);
        vertex(i + offsetX, height / 2);
        vertex(i, height);
        endShape();
    }


    
    if (!isAnimating && initialFrames >= 2) {
        noLoop();
    }
}


//////////////////////////////////


// slider update 
function updateSliderValue(property, value) {
    sliderValues[property] = parseFloat(value);
    document.getElementById(property + 'Value').textContent = value;
    redraw();
}

// toggle flag 
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

function handleImageUpload(input) {
    if (input.files && input.files[0]) {
        img = loadImage(URL.createObjectURL(input.files[0]), () => {
            img.resize(width, height);
            redraw();
        });
    }
}




function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


// update scrollFactor based on document scroll, 0..1
function handleScroll() {
    // how far down the page are we as fraction of total scrollable height
    const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let frac = 0;
    if (docHeight > 0) {
        frac = Math.min(1, Math.max(0, scrollTop / docHeight));
    }

    // smooth and clamp
    scrollFactor = Math.min(1, Math.max(0, frac));

    // keep drawing while the user scrolls, then stop after a short timeout if not animating
    if (!isAnimating) {
        loop();
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (!isAnimating) noLoop();
        }, 250);
    }
}