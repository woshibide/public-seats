let font;
let msg = "S O M E H O W";
let leText = [];
let ptSize = 72;
let cellSize;

//////////////////////////////////

function preload(){
  font = loadFont('./font/FT88-Italic.otf');
                       // FT88-Bold.otf
                       // FT88-Gothique.otf
                       // FT88-Regular.otf
                       // FT88-Serif.otf
                       // FT88-Expanded.otf
                       // FT88-Italic.otf
                       // FT88-School.otf
}

function setup() {

  cellSize = ptSize/10;

  createCanvas(windowWidth - 790, 100);
  background(255);

  textFont(font, ptSize);
  textAlign(CENTER, CENTER);
  
  textSize(ptSize);

  // load string msg to char
  for(let i = 0; i < msg.length; i++){
    leText.push(msg[i]);
  }

}

function draw() {
  
  push();
  noFill();
  strokeWeight(1);
  for(let i = 0; i < width; i += cellSize){
    for( let j = 0; j < height; j += cellSize){
      rect(i, j, ptSize/10, ptSize/10);
    }
  }
  fill(0);
  textAlign(LEFT, TOP);

  // to understand width of a cell compared to type
  // text("L",0,0)
  pop();

  push();
  fill(0);
  
  text(msg, width/2, height/2 - 5)
  // for(let i = 0; i < msg.length; i ++){
  //   text(leText[i], width / 2, (i * ptSize * 0.85) + 280)
  // }
  pop();

  paused = true;
}

//////////////////////////////////


//////////////////////////////////

// function keyPressed(){
//   if (key = " "){
//     console.log(3)
//     scale(5);
//   }
// }


//////////////////////////////////

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function togglePause() {
  paused = !paused;
}

function remakeAnimation() {
  background(255);
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



