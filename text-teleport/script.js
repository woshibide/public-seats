// drawing ttf fonts with opentype.js and p5js commands.
// note that this ONLY works with ttf fonts, which provide
// the shapes of counters (i.e., the hole in 'O') in
// counter-clockwise order. I use this in the code below
// with the beginContour()/endContour() functions in p5js
// to draw the shapes accordingly.

let font;

// Menu-related variables
let sliderValues = {
  num: 1,
  offset: 0,
  tilt: 0,
  speed: 0.1,
  textSize: 0.25
};
let displayText = "somehow";
let isAnimating = true;
let shadows = false;
let mode = false;

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

let path;

function setup() {
createCanvas(windowWidth, windowHeight);
font = opentype.parse(fontData.bytes.buffer);
path = font.getPath(displayText, 0, 0, 300 * sliderValues.textSize);
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
  
  let lines = [];
  
  push();
  translate(width / 2 - 350 + sliderValues.offset, height*0.86);
  rotate(radians(sliderValues.tilt));
  drawContours(
    groupByContour(
      commandTransform(path.commands, function(x, y) {
        let newX, newY;
        newX = x;
        if (y < map(sin(frameCount * sliderValues.speed * 0.04), -1, 1, 0, sin(frameCount * sliderValues.speed * 0.05) * 1000)) {
          newY = y - height / 2;
        }
        else {
          newY = y;
        }
        lines.push({x1: x, y1: y, x2: newX, y2: newY});
        return [newX, newY];
      })
    )
  );
  
  // Draw visualization lines
  stroke(255,0,0, 100); // semi-transparent white
  strokeWeight(4);
  for (let ln of lines) {
    // point(ln.x1, ln.y1, ln.x2, ln.y2);
  }
  noStroke();
  
  pop();
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
    if (property === 'textSize') {
        refreshSketch();
    }
}

// update text function
function updateText(value) {
    displayText = value;
    refreshSketch();
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





function refreshSketch() {
    path = font.getPath(displayText, 0, 0, 300 * sliderValues.textSize);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}