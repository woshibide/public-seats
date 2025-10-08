let font;
let fontData;
let theWidth;

let currentText = "somehow";
let charWidths = [];
let charPaths = [];
let totalWidth = 0;

let sliderValues = {
  fontSize: 72,
  lineSpacing: 1,
  warpMin: 0.1,
  warpMax: 1,
};

let isAnimating = true;

// groups a list of opentype.js vector commands by contour
function groupByContour(cmds) {
  contours = [];
  current = [];
  for (let cmd of cmds) {
    current.push(cmd);
    if (cmd.type == 'Z') {
      contours.push(current);
      current = [];
    }
  }
  return contours;
}

// determines if a list of commands specify a path in clockwise
// or counter-clockwise order
function clockwise(cmds) {
  let sum = 0;
  for (let i = 0; i < cmds.length - 1; i++) {
    let a = cmds[i];
    let b = cmds[i+1];
    if (!(a.hasOwnProperty('x') && b.hasOwnProperty('x'))) {
      continue;
    }
    sum += (b.x - a.x) * (b.y + a.y);
  }
  return sum < 0;
}

// draws contours grouped by groupByContour(). uses clockwise()
// to determine if this contour should be a p5js shape or a p5js
// contour (i.e., cutout of a shape)
function drawContours(contours) {
  let inShape = false;
  for (let i = 0; i < contours.length; i++) {
    if (clockwise(contours[i])) {
      if (inShape) {
        endShape(CLOSE);
      }
      beginShape();
      inShape = true;
      drawContour(contours[i]);
    }
    else {
      beginContour();
      drawContour(contours[i]);
      endContour();
    }
  }
  if (inShape) {
    endShape(CLOSE);
  }
}

// draws an individual contour
function drawContour(cmds) {
  for (let i = 0; i < cmds.length; i++) {
    cmd = cmds[i];
    switch (cmd.type) {
      case 'M':
      case 'Z':
        break;
      case 'L':
        vertex(cmd.x, cmd.y);
        break;
      case 'C':
        bezierVertex(
          cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
        break;
      case 'Q':
        quadraticVertex(cmd.x1, cmd.y1, cmd.x, cmd.y);
        break;
		}    
  }
}

function preload() {
  fontData = loadBytes('fonts/Peshka.ttf');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  theWidth = (width - 40) / 2;
  canvas.parent('p5-canvas');
  font = opentype.parse(fontData.bytes.buffer);
  
  document.getElementById('fontSizeSlider').value = sliderValues.fontSize;
  document.getElementById('fontSizeValue').textContent = sliderValues.fontSize;
  document.getElementById('lineSpacingSlider').value = sliderValues.lineSpacing;
  document.getElementById('lineSpacingValue').textContent = sliderValues.lineSpacing;
  document.getElementById('warpMinSlider').value = sliderValues.warpMin;
  document.getElementById('warpMinValue').textContent = sliderValues.warpMin;
  document.getElementById('warpMaxSlider').value = sliderValues.warpMax;
  document.getElementById('warpMaxValue').textContent = sliderValues.warpMax;

  document.getElementById('textInput').value = currentText;

  updateTextData();
}

// updates the character data when text or font size changes
function updateTextData() {
  const fontSize = sliderValues.fontSize;
  totalWidth = 0;
  charWidths = [];
  charPaths = [];
  for (let char of currentText) {
    let path = font.getPath(char, 0, 0, fontSize);
    let bbox = path.getBoundingBox();
    let w = bbox.x2 - bbox.x1;
    charWidths.push(w);
    charPaths.push(path);
    totalWidth += w;
  }
}

// applies a transformation to the x/y coordinates of each opentypejs
// command you pass to it, according to the callback, which will be
// given the x/y coordinates as parameters and should return an array
// in the form of [x, y]
function commandTransform(cmds, callback) {
  let transformed = [];
	for (let cmd of cmds) {
    let newCmd = {type: cmd.type}
    for (let pair of [['x', 'y'], ['x1', 'y1'], ['x2', 'y2']]) {
      if (cmd.hasOwnProperty(pair[0]) && cmd.hasOwnProperty(pair[1])) {
        let result = callback(cmd[pair[0]], cmd[pair[1]]);
        newCmd[pair[0]] = result[0];
        newCmd[pair[1]] = result[1];
      }
    }
    transformed.push(newCmd);
  }
  return transformed;
}

function draw() {
  background(0);
  fill(200);
  noStroke();

  const textToRender = currentText;
  const fontSize = sliderValues.fontSize;
  const lineSpacing = sliderValues.lineSpacing;

  let scaleX = 2 * width / totalWidth; // double the width
  const yStep = (charPaths[0].getBoundingBox().y2 - charPaths[0].getBoundingBox().y1) * lineSpacing;

  for (let y = yStep; y < height; y += yStep) {
    let lineIndex = Math.floor((y - yStep) / yStep);
    let currentX = 0; // start from left edge
    for (let i = 0; i < textToRender.length; i++) {
      let path = charPaths[i];
      let w = charWidths[i];
      let warpFactor = map(sin(frameCount * 0.02 + i * 0.8 + lineIndex * 0.2), -1, 1, sliderValues.warpMin, sliderValues.warpMax);
      push();
      translate(currentX, y);
      drawContours(
        groupByContour(
          commandTransform(path.commands, function(x, valY) {
            let newX, newY;
            newY = valY;
            newX = x * scaleX * warpFactor;
            return [newX, newY];
          })
        )
      );
      pop();
      currentX += w * scaleX * warpFactor;
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
    if (property === 'fontSize') {
        updateTextData();
    }
}

function updateText(value) {
    currentText = value;
    updateTextData();
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
