let newStar;
let starArray = [];
let h2, w2, d2; 
let maxStars = 5000;
let newStarsPerFrame = 50;
let speedMin = 0.05;
let speedMax = 0.5;
let sizeIncrMax  = 3;
let ageThreshold = 20;
let noiseScale = 0.01;
let movementSensitivity = 0.005;
let paused = false;
let fadeMax = 255;
let fadeMin = -10; 

let currentAnima = 0;
let animaState = [
  {
    x: 120,
    y: 20
  },
  {
    x: 10,
    y: -5000
  },
  {
    x: 100,
    y: 5000
  }
];

// let sliderX = 10;
// let sliderY = 200;

function calculateCanvasSize() {
  // 4/5 for insta posts or 1.91:1
  let aspectRatio = 16 / 9; // width / height for Instagram story
  let canvasWidth, canvasHeight;
  if (windowWidth / windowHeight > aspectRatio) {
    canvasHeight = windowHeight;
    canvasWidth = canvasHeight * aspectRatio;
  } else {
    canvasWidth = windowWidth;
    canvasHeight = canvasWidth / aspectRatio;
  }
  return { canvasWidth, canvasHeight };
}

function setup() {
  let { canvasWidth, canvasHeight } = calculateCanvasSize();
  createCanvas(canvasWidth, canvasHeight);
  w2 = width / 2;
  h2 = height / 2;
  d2 = dist(0, 0, w2, h2);
  noStroke();
  newStar = new Star();
  background(0);

  frameRate(25);
  textSize(24);
  textAlign(CENTER, LEFT);
}

function draw() {

  if (!paused) {

    if (frameCount % 75 == 0) {
      currentAnima = (currentAnima + 1) % animaState.length;
    }
    sliderX = animaState[currentAnima].x;
    sliderY = animaState[currentAnima].y;

    fill(0, map(dist(sliderX, sliderY, w2, h2), 0, d2, fadeMax, fadeMin));
    rect(0, 0, width, height);
    fill(255);
    newStar.render();

    push();
    fill(255, 0, 0);
    text(currentAnima, 20, 40);
    pop();


    // Add new stars
    for (let i = 0; i < newStarsPerFrame; i++) {
      starArray.push(new Star());
    }

    // Update and render stars, remove if out of bounds
    for (let i = starArray.length - 1; i >= 0; i--) {
      let star = starArray[i];
      if (star.x < 0 || star.x > width || star.y < 0 || star.y > height) {
        starArray.splice(i, 1);
      } else {
        star.move();
        star.render();
      }
    }

    // Limit the number of stars
    if (starArray.length > maxStars) {
      starArray.splice(0, newStarsPerFrame);
    }
  }
}

function windowResized() {
  let { canvasWidth, canvasHeight } = calculateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  w2 = width / 2;
  h2 = height / 2;
  d2 = dist(0, 0, w2, h2);
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speed = random(speedMin, speedMax);
    this.grow = int(random(0, 2));
    this.d = this.grow === 1 ? 0 : random(0.2, 3);
    this.age = 0;
    this.sizeIncr = random(0, sizeIncrMax);
  }

  render() {
    this.age++;
    if (this.age < ageThreshold) {
      if (this.grow === 1) {
        this.d += this.sizeIncr;
        if (this.d > 3 || this.d < -3) this.d = 3;
      } else {
        if (this.d > 3 || this.d < -3) this.d = 3;
        this.d = this.d + 0.2 - 0.6 * noise(this.x, this.y, frameCount * noiseScale);
      }
    } else {
      if (this.d > 3 || this.d < -3) this.d = 3;
    }
    ellipse(
      this.x,
      this.y,
      this.d * map(noise(this.x, this.y, noiseScale * frameCount), 0, 1, 0.2, 1.5),
      this.d * map(noise(this.x, this.y, noiseScale * frameCount), 0, 1, 0.2, 1.5)
    );
  }

  move() {
    //                   can be mouse or just width for centered composition
    this.x = this.x - map(sliderX, 0, width, -movementSensitivity * this.speed, movementSensitivity * this.speed) * (w2 - this.x);
    this.y = this.y - map(sliderY, 0, height, -movementSensitivity * this.speed, movementSensitivity * this.speed) * (h2 - this.y);
  }
}

function togglePause() {
  paused = !paused;
}

function keyPressed(){
  if (key == " "){
    togglePause();
  }
}

function remakeAnimation() {
  starArray = [];
  newStar = new Star();
  background(0);
}

function exportFrame() {
  saveCanvas('frame', 'png');
}

function updateMaxStars(value) {
  maxStars = parseInt(value);
}

function updateNewStarsPerFrame(value) {
  newStarsPerFrame = parseInt(value);
}

function updateSpeedMin(value) {
  speedMin = parseFloat(value);
}

function updateSpeedMax(value) {
  speedMax = parseFloat(value);
}

function updateSizeIncrMax(value) {
  sizeIncrMax = parseFloat(value);
}

function updateAgeThreshold(value) {
  ageThreshold = parseInt(value);
}

function updateNoiseScale(value) {
  noiseScale = parseFloat(value);
}

function updateMovementSensitivity(value) {
  movementSensitivity = parseFloat(value);
}

// function updateX(value) {
//   sliderX = parseInt(value);
// }

// function updateY(value) {
//   sliderY = parseInt(value);
// }

function updateFadeMax(value) {
  fadeMax = parseInt(value);
}

function updateFadeMin(value) {
  fadeMin = parseInt(value);
}

function updateSliderValue(id, value) {
  // document.getElementById(id + 'Value').textContent = value;
}

function toggleMenu() {
  const menuContent = document.getElementById('menuContent');
  const dropdownArrow = document.querySelector('.dropdown-arrow');
  menuContent.classList.toggle('expanded');
  dropdownArrow.classList.toggle('expanded');
}