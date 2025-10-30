let newTchk;
let tochkaArray = [];
let h2, w2, d2; 
let maxTchks = 5000; 
let newTchksPerFrame = 150;
let speedMin = 0.02;
let speedMax = 20;
let sizeIncrMax =  30;
let ageThreshold = 200;
let noiseScale = 0.1;
let movementSensitivity = 0.05;
let paused = false;
let sliderX, sliderY;
let fadeMax = 255;
let fadeMin = -10;
let zoom = 1;

let font;
let msg = "I N T E R N S";
let leText = [];
let ptSize = 36;

///////////////////////////////

function preload(){
  font = loadFont('./font/Peshka.ttf');
}

function setup() {

  createCanvas(542, 1080);
  noStroke();
  background(0);

  textFont(font, 48);
  textAlign(CENTER, CENTER);
  
  newTchk = new Tchk();
  w2 = width / 2;
  h2 = height / 2;
  d2 = dist(0, 0, w2, h2);
  
  sliderX = 280;
  sliderY = 800;
  document.getElementById('xSlider').max = width;
  document.getElementById('xSlider').value = sliderX;
  document.getElementById('ySlider').max = height;
  document.getElementById('ySlider').value = sliderY;
  updateSliderValue('x', sliderX);
  updateSliderValue('y', sliderY);

  textSize(ptSize);

  // load string msg to char
  for(let i = 0; i < msg.length; i++){
    leText.push(msg[i]);
  }

}

function draw() {

  if (!paused) {
    
    // bg, responsible for trail
    fill(0, map(dist(fadeMin, fadeMax, w2, h2), 0, d2, fadeMax, fadeMin));
    rect(0, 0, width, height);

    
    push();
    translate(w2, h2);
    scale(zoom);
    translate(-w2, -h2);

    // tochki
    fill(255);
    newTchk.render();

    // saturated bg for text
    push();
    noFill();
    
    foo = 80
    let bbrx, bbry;
    
    strokeWeight(2);
    
    for (let i = 0; i < newTchksPerFrame; i++) {
      bbrx = random(foo, width-foo);
      bbry = random(height/2 - foo/4, height/2 + foo/4);
      stroke(255);
      strokeWeight(2);
      point(bbrx, bbry)
    }
    pop();

    // new tochki
    for (let i = 0; i < newTchksPerFrame; i++) {
      tochkaArray.push(new Tchk());
    }

    // update and render tochki, remove if out of bounds
    for (let i = tochkaArray.length - 1; i >= 0; i--) {
      let tochka = tochkaArray[i];
      if (tochka.x < 0 || tochka.x > width || tochka.y < 0 || tochka.y > height) {
        tochkaArray.splice(i, 1);
      } else {
        tochka.move();
        tochka.render();
      }
    }

    // limit number of tochki
    if (tochkaArray.length > maxTchks) {
      tochkaArray.splice(0, newTchksPerFrame);
    }
  
    
    push();
    fill(0);
    
    text(msg, width / 2, height/2 - 5)
    // for(let i = 0; i < msg.length; i ++){
    //   text(leText[i], width / 2, (i * ptSize * 0.85) + 280)
    // }

    pop();

    pop();

    // paused = true;
  }
}

///////////////////////////////

class Tchk {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speed = random(speedMin, speedMax);
    this.grow = int(random(0, 2));
    this.d = this.grow === 1 ? 0 : random(0.2, sizeIncrMax);
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
                                   // can be mouse or just width for centered composition
    this.x = this.x + map(sliderX, 0, width, -movementSensitivity * this.speed, movementSensitivity * this.speed) * (w2 - this.x);
    this.y = this.y + map(sliderY, 0, height, -movementSensitivity * this.speed, movementSensitivity * this.speed) * (h2 - this.y);
  }
}

//////////////////////////////////

// function keyPressed(){
//   if (key = " "){
//     console.log(3)
//     scale(5);
//   }
// }

function mouseWheel(event) {
  if (event.delta < 0){
    zoom *= 1.1;
  } else {
    zoom /= 1.1;
  }
  
}

//////////////////////////////////

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  w2 = width / 2;
  h2 = height / 2;
  d2 = dist(0, 0, w2, h2);
  sliderX = width / 2;
  sliderY = height / 2;
  document.getElementById('xSlider').max = width;
  document.getElementById('xSlider').value = sliderX;
  document.getElementById('ySlider').max = height;
  document.getElementById('ySlider').value = sliderY;
  updateSliderValue('x', sliderX);
  updateSliderValue('y', sliderY);
}



function togglePause() {
  paused = !paused;
}

function remakeAnimation() {
  tochkaArray = [];
  newTchk = new Tchk();
  background(0);
}

function exportFrame() {
  saveCanvas('frame', 'png');
}

function updateMaxTchks(value) {
  maxTchks = parseInt(value);
}

function updateNewTchksPerFrame(value) {
  newTchksPerFrame = parseInt(value);
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

function updateX(value) {
  sliderX = parseInt(value);
}

function updateY(value) {
  sliderY = parseInt(value);
}

function updateFadeMax(value) {
  fadeMax = parseInt(value);
}

function updateFadeMin(value) {
  fadeMin = parseInt(value);
}

function updateSliderValue(id, value) {
  document.getElementById(id + 'Value').textContent = value;
}

function toggleMenu() {
  const menuContent = document.getElementById('menuContent');
  const dropdownArrow = document.querySelector('.dropdown-arrow');
  menuContent.classList.toggle('expanded');
  dropdownArrow.classList.toggle('expanded');
}