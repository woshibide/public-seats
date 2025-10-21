function resetDrawingContext() {
  drawingContext.restore();
}

function dropShadow(shadowColor = color(20), shadowBlur = 10, shadowOffsetX = 3, shadowOffsetY = 3) {
  drawingContext.shadowColor = shadowColor;
  drawingContext.shadowBlur = shadowBlur;
  drawingContext.shadowOffsetX = shadowOffsetX;
  drawingContext.shadowOffsetY = shadowOffsetY;
}


function drawingRect(x, y, w, h, r1, r2) {
  drawingContext.save();
  drawingContext.transform(1, 0, 0, 1, x, y);
  drawingContext.beginPath();
  drawingContext.rect(0, 0, w, h, r1, r2);
  drawingContext.fill();
  drawingContext.restore();
}

//////////////////////////////////////////////////////////////////

//配列のシャッフル
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//配列のリピート複製
function repeatArray(array, repeatCount = 3) {
  return Array(repeatCount).fill().flatMap(() => array);
}

//配列からランダムに1つの要素を取得して返す関数
function getRandomElementFromArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    console.error('Invalid input: array must be a non-empty array');
    return null;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


//
function circularizeElements(array, element) {
  const circularArray = [...array];
  circularArray.push(element);
  return circularArray;
}

const colorScheme = [
  { name: 'Rothko', colors: ['#E49A16', '#E19713', '#D67629', '#DA6E2E', '#D85434'] }
];

function getColorScheme(name) {
  const lowercaseName = name.toLowerCase();
  const scheme = colorScheme.find(({ name: objName }) => objName.toLowerCase() === lowercaseName);
  return scheme ? scheme : { name: 'Default',   colors: ['#ffffff', '#000000']};
}

function repeatPalette(palette, repeatCount = 3) {
  return {
    ...palette,
    colors: repeatArray(palette.colors, repeatCount)
  };
}

function adjustCoordinates(x0, y0, x1, y1, rectMode) {
  if (rectMode === 'center') {
    const w = (x1 - x0);
    const h = (y1 - y0);
    x0 = x0 - w / 2;
    y0 = y0 - h / 2;
    x1 = x0 + w;
    y1 = y0 + h;
  }
  return [x0, y0, x1, y1];
}

function setGradientColorStops(gradientColor, colors, colorStops = null, offsetColorStop = 0, easing = 'linear', opacityThreshold = 1) {
  const colorsLength = colors.length;
  const easingFunctions = {
    linear: t => t,
    easeIn: t => t * t,
    easeOut: t => t * (2 - t),
    easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  };
  const ease = easingFunctions[easing] || easingFunctions.linear;

  const setColorStop = (colorStop, i) => {
    colorStop = ((ease(colorStop) % 1) + 1) % 1;
    let color = colors[i];
    if (colorStop > opacityThreshold) {
      const alpha = (colorStop - opacityThreshold) / (1 - opacityThreshold);
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      color = `rgba(${r}, ${g}, ${b}, ${1 - alpha})`;
    }
    gradientColor.addColorStop(colorStop, color);
  };

  if (colorStops) {
    for (let i = 0; i < colorsLength; i++) {
      const adjustedColorStop = colorStops[i] + offsetColorStop;
      setColorStop(adjustedColorStop, i);
    }
  } else {
    for (let i = 0; i < colorsLength; i++) {
      const colorStop = i / colorsLength + offsetColorStop + (1 - (colorsLength - 1) / colorsLength) / 2;
      setColorStop(colorStop, i);
    }
  }
}

function generateColorStops(numColors, type = 'random', noiseScale = 0.2) {
  const stops = [];
  const step = 1 / (numColors - 1);
  for (let i = 0; i < numColors; i++) {
    let stop;
    switch (type) {
      case 'random':
        const randomValue = Math.random();
        stop = i * step + (randomValue - 0.5) * noiseScale;
        stop = Math.max(0, Math.min(1, stop));
        break;
      case 'noise':
        const noiseValue = (noise(i * noiseScale) + 1) / 2;
        stop = i * step + (noiseValue - 0.5) * noiseScale;
        stop = Math.max(0, Math.min(1, stop));
        break;
      case 'sin':
        stop = i * step + Math.sin(i * Math.PI * 2 / numColors) * noiseScale;
        stop = Math.max(0, Math.min(1, stop));
        break;
      case 'cos':
        stop = i * step + Math.cos(i * Math.PI * 2 / numColors) * noiseScale;
        stop = Math.max(0, Math.min(1, stop));
        break;
      default:
        stop = i * step;
    }
    stops.push(stop);
  }
  return stops;
}

function getGradientEndPoint(x0, y0, w, h, angleType) {
  let x1, y1;
  if (angleType === 'vertical') {
    x1 = x0;
    y1 = y0 + h;
  } else if (angleType === 'horizontal') {
    x1 = x0 + w;
    y1 = y0;
  } else if (angleType === 'diagonal') {
    x1 = x0 + w;
    y1 = y0 + h;
  } else if (angleType === 'random') {
    x1 = x0 + random(-w, w);
    y1 = y0 + random(-h, h);
  } else if (angleType === 'randomhv') {
    const rand = Math.random();
    if (rand < 0.5) {
      x1 = x0;
      y1 = y0 + h;
    } else {
      x1 = x0 + w;
      y1 = y0;
    }
  } else if (angleType === 'randomhvd') {
    const rand = Math.random();
    if (rand < 0.33) {
      x1 = x0;
      y1 = y0 + h;
    } else if (rand < 0.66) {
      x1 = x0 + w;
      y1 = y0;
    } else {
      x1 = x0 + w;
      y1 = y0 + h;
    }
  }
  return [x1, y1];
}

function setGradient(options = {}) {
  let {
    type = 'linear',
    style = 'fill',  // 'fill', 'stroke', 'both' のいずれか
    colors = ['#000000', '#ffffff'],
    strokeColors = null,  // style='both'の時のstroke用色配列
    colorStops = null,
    strokeColorStops = null,  // style='both'の時のstroke用ストップ位置
    offsetColorStop = 0,
    easing = 'linear',
    opacityThreshold = 1.0,
    // Gradient coordinates
    x0 = 0,
    y0 = 0,
    x1 = null,
    y1 = null,
    rectMode = 'center',
    // Radial specific
    r0 = 0,
    r1 = null,
    // Conic specific
    startAngle = 0,
    // Extended options
    repetitions = 30,
    colorCount = 12,
  } = options;

  let gradientColor, strokeGradientColor;

  const createGradient = (type, coords, colors) => {
    let gradient;
    
    switch (type) {
      case 'linear': {
        if (coords.x1 === null || coords.y1 === null) {
          throw new Error('For linear gradient, both x1 and y1 must be provided');
        }
        const [x0Adjusted, y0Adjusted, x1Adjusted, y1Adjusted] = adjustCoordinates(
          coords.x0, coords.y0, coords.x1, coords.y1, rectMode
        );
        gradient = drawingContext.createLinearGradient(x0Adjusted, y0Adjusted, x1Adjusted, y1Adjusted);
        break;
      }
      case 'radial': {
        if (coords.r1 === null) {
          throw new Error('For radial gradient, r1 must be provided');
        }
        gradient = drawingContext.createRadialGradient(
          coords.x0, coords.y0, Math.max(0, coords.r0),
          coords.x1 || coords.x0, coords.y1 || coords.y0, Math.max(0, coords.r1)
        );
        break;
      }
      case 'conic': {
        gradient = drawingContext.createConicGradient(coords.startAngle, coords.x0, coords.y0);
        break;
      }
      case 'repeating-linear': {
        if (coords.x1 === null || coords.y1 === null) {
          throw new Error('For repeating linear gradient, both x1 and y1 must be provided');
        }
        const [x0Adjusted, y0Adjusted, x1Adjusted, y1Adjusted] = adjustCoordinates(
          coords.x0, coords.y0, coords.x1, coords.y1, rectMode
        );
        gradient = drawingContext.createLinearGradient(x0Adjusted, y0Adjusted, x1Adjusted, y1Adjusted);
        colors = Array(coords.repetitions).fill(colors).flat();
        break;
      }
      case 'repeating-radial': {
        if (coords.r1 === null) {
          throw new Error('For repeating radial gradient, r1 must be provided');
        }
        gradient = drawingContext.createRadialGradient(
          coords.x0, coords.y0, Math.max(0, coords.r0),
          coords.x1 || coords.x0, coords.y1 || coords.y0, Math.max(0, coords.r1)
        );
        colors = Array(coords.repetitions).fill(colors).flat();
        break;
      }
      case 'repeating-conic': {
        gradient = drawingContext.createConicGradient(coords.startAngle, coords.x0, coords.y0);
        colors = Array(coords.repetitions).fill(colors).flat();
        break;
      }
      default: {
        throw new Error(`Unsupported gradient type: ${type}`);
      }
    }

    return { gradient, colors };
  };

  const coords = {
    x0, y0, x1, y1, r0, r1, startAngle, repetitions
  };

  let fillResult = createGradient(type, coords, colors);
  gradientColor = fillResult.gradient;
  setGradientColorStops(
    gradientColor,
    fillResult.colors,
    colorStops,
    offsetColorStop,
    easing,
    opacityThreshold
  );

  if (style === 'both') {
    let strokeResult = createGradient(type, coords, strokeColors || colors);
    strokeGradientColor = strokeResult.gradient;
    setGradientColorStops(
      strokeGradientColor,
      strokeResult.colors,
      strokeColorStops || colorStops,
      offsetColorStop,
      easing,
      opacityThreshold
    );
  }

  if (style === 'fill' || style === 'both') {
    drawingContext.fillStyle = gradientColor;
  }
  if (style === 'stroke' || style === 'both') {
    drawingContext.strokeStyle = strokeGradientColor || gradientColor;
  }

  return style === 'both' ? { fillGradient: gradientColor, strokeGradient: strokeGradientColor } : gradientColor;
}

function setBlurredEdgeGradient(x, y, size, edgeColor, edgeStrokeWidth) {
  noFill();
  const edgeWidth = size * 0.5;
  strokeWeight(edgeStrokeWidth);
  stroke(edgeColor);
  const transparentEdgeColor = edgeColor + '00';
  setStrokeRadialGradient(x, y, edgeWidth - edgeStrokeWidth / 2, x, y, edgeWidth, [transparentEdgeColor, edgeColor], null, 0, 'linear', 1);
}

function getAlphaColor(col, alpha = 255) {
  let alphaColor = color(col);
  alphaColor.setAlpha(alpha);
  return alphaColor;
}

function getColorPairs(colors, fixedColor = '#ffffff') {
  return colors.map(color => [color, fixedColor]);
}

function getAdjacentColorPairs(colors) {
  if (!Array.isArray(colors) || colors.length === 0) {
    console.error('Invalid input: colors must be a non-empty array');
    return [];
  }
  const pairs = [];
  for (let i = 0; i < colors.length; i += 2) {
    if (i + 1 < colors.length) {
      pairs.push([colors[i], colors[i + 1]]);
    } else {
      pairs.push([colors[i], colors[0]]);
    }
  }
  return pairs;
}

function getRandomColorPairs(colors) {
  if (!Array.isArray(colors) || colors.length === 0) {
    console.error('Invalid input: colors must be a non-empty array');
    return [];
  }
  const shuffled = [...colors];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return getAdjacentColorPairs(shuffled);
}

// RGB to HSL conversion
function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h;
  let s;
  let l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}

// HSL to RGB conversion
function hslToRgb(h, s, l) {
  h /= 360, s /= 100, l /= 100;
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// RGB to Hex conversion
function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Hex to RGB conversion
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

// Main color scheme generator function
function generateColorScheme(baseColor, scheme = 'complementary') {
  const [r, g, b] = hexToRgb(baseColor);
  const [h, s, l] = rgbToHsl(r, g, b);

  switch (scheme) {
    case 'complementary': //補色
      return [
        baseColor,
        rgbToHex(...hslToRgb((h + 180) % 360, s, l)),
      ];
    case 'analogous': //類似色
      return [
        rgbToHex(...hslToRgb((h - 30 + 360) % 360, s, l)),
        baseColor,
        rgbToHex(...hslToRgb((h + 30) % 360, s, l))
      ];
    case 'monochromatic': //ヒュー・チント・シェード
      return [
        rgbToHex(...hslToRgb(h, s, Math.max(0, l - 30))),
        baseColor,
        rgbToHex(...hslToRgb(h, s, Math.min(100, l + 30)))
      ];
    case 'split-complementary': //スプリット・コンプリメンタリ	
      return [
        baseColor,
        rgbToHex(...hslToRgb((h + 150) % 360, s, l)),
        rgbToHex(...hslToRgb((h + 210) % 360, s, l))
      ];
    case 'dyadic': //ダイアード
      return [
        baseColor,
        rgbToHex(...hslToRgb((h + 120) % 360, s, l))
      ];
    case 'triadic': //トライアド
      return [
        baseColor,
        rgbToHex(...hslToRgb((h + 120) % 360, s, l)),
        rgbToHex(...hslToRgb((h + 240) % 360, s, l))
      ];
    case 'tetradic': //テトラード
      return [
        baseColor,
        rgbToHex(...hslToRgb((h + 90) % 360, s, l)),
        rgbToHex(...hslToRgb((h + 180) % 360, s, l)),
        rgbToHex(...hslToRgb((h + 270) % 360, s, l))
      ];
    case 'pentadic': //ペンタード
      return [
        baseColor,
        rgbToHex(...hslToRgb((h + 72) % 360, s, l)),
        rgbToHex(...hslToRgb((h + 144) % 360, s, l)),
        rgbToHex(...hslToRgb((h + 216) % 360, s, l)),
        rgbToHex(...hslToRgb((h + 288) % 360, s, l))
      ];
    case 'hexadic': //ヘクサード
      return [
        baseColor,
        rgbToHex(...hslToRgb((h + 60) % 360, s, l)),
        rgbToHex(...hslToRgb((h + 120) % 360, s, l)),
        rgbToHex(...hslToRgb((h + 180) % 360, s, l)),
        rgbToHex(...hslToRgb((h + 240) % 360, s, l)),
        rgbToHex(...hslToRgb((h + 300) % 360, s, l))
      ];
    default:
      throw new Error('Invalid color scheme');
  }
}

function flick(color0, color1, interval) {
  if (frameCount % interval === 0) {
    return color0;
  } else {
    return color1;
  }
}

function flickDrawingContext(alpha0, alpha1, interval) {
  if (frameCount % interval === 0) {
    drawingContext.globalAlpha = alpha0;
  } else {
    drawingContext.globalAlpha = alpha1;
  }
}

////////////////////////////////////////////////


class Element {
  constructor(props = {}) {
    this.id = props.id ?? 0;
    this.isDisplay = props.isDisplay ?? true;
    this.originX = props.originX ?? 0;
    this.originY = props.originY ?? 0;
    this.x = props.x ?? 0;
    this.y = props.y ?? 0;
    if (props.baseW !== undefined) {
      this.baseW = props.baseW;
      this.baseH = props.baseH;
      this.w = this.baseW;
      this.h = this.baseH;
    } else {
      this.w = props.w ?? 100;
      this.h = props.h ?? 100;
    }
    this.scaleX = props.scaleX ?? 1;
    this.scaleY = props.scaleY ?? 1;
    this.angle = props.angle ?? 0;
    this.fillColor = props.fillColor ?? color('rgba(0, 0, 0, 255)');
    this.strokeColor = props.strokeColor ?? color('rgba(0, 0, 0, 255)');
    this.backgroundColor = props.backgroundColor ?? color('rgba(0, 0, 0, 255)');
    this.offsetColorStop = props.offsetColorStop ?? 0;
    this.offsetColorStopAccel = props.offsetColorStopAccel ?? random(0.001, 0.01);
    this.gradationStopNoise = props.gradationStopNoise ?? 0;
    this.gradientStartAngle = props.gradientStartAngle ?? 0;
    this.gradientX = props.gradientX ?? 0;
    this.gradientY = props.gradientY ?? 0;
    this.colors = props.colors ?? palette.colors.slice();
    this.colors = shuffleArray(this.colors);
    this.colors = circularizeElements(this.colors, this.colors[0]);
    this.colorStops = generateColorStops(this.colors.length, 'noise', 0.2);
    this.amplitude = 25;
    this.phaseShift = 0.1;
    this.repetitions = 1;
    this.targetW = props.targetW ?? 100;
    noStroke();
  }

  run = () => {
    if (!this.isDisplay) return;
    push();
    this.originY = this.amplitude * cos(frameCount * 0.02 + this.id * this.phaseShift);
    translate(this.originX, this.originY);
    scale(this.scaleX, this.scaleY);
    rotate(this.angle);
    this.w = (this.targetW/2 - this.baseW) * sin(frameCount * 0.03 + this.id * this.phaseShift) + this.targetW/2;
    drawingContext.save();
    this.offsetColorStop += this.offsetColorStopAccel;
    var gradient = setGradient({
      type: 'repeating-linear',
      style: 'fill',
      colors: this.colors,
      repetitions: this.repetitions,
      x0: this.x - this.w / 2,
      y0: this.y,
      x1: this.x + this.w / 2,
      y1: this.y,
      rectMode: 'corner',
      offsetColorStop: this.offsetColorStop,
    });
    drawingContext.fillStyle = gradient;
    drawingRect(this.x, this.y, this.w, this.w / 3, 'center');
    drawingContext.restore();
    pop();
  }
}

////////////////////////////////////////////////

class Motif {
  constructor(props = {}) {
    this.id = props.id ?? 0;
    this.isDisplay = props.isDisplay ?? true;
    this.originX = props.originX ?? 0;
    this.originY = props.originY ?? 0;
    this.x = props.x ?? 0;
    this.y = props.y ?? 0;
    if (props.baseSize !== undefined) {
      this.baseSize = props.baseSize;
      this.w = this.baseSize;
      this.h = this.baseSize;
    } else {
      this.w = props.w ?? 100;
      this.h = props.h ?? 100;
    }
    this.scaleX = props.scaleX ?? 1.0;
    this.scaleY = props.scaleY ?? 1.0;
    this.angle = props.angle ?? 0;
    this.repeat = props.repeat || 50; 
    this.elements = [];
    for (let i = 0; i < this.repeat; i++) {
      const element = new Element({
        id: i,
        baseW: 250,
        baseH: 100,
        originX: 0,
        originY: 0,
        targetW: 1000,
        x: 0,
        y: 0,
      });
      this.elements.push(element);
    }
  }

  run = () => {
    push()
    translate(this.originX, this.originY);
    rotate(this.angle);
    for (let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      element.run();
    }
    pop();
  }
}



///////////////////////////////////////////////////

p5.disableFriendlyErrors = true;

const title = 'geometry';
let palette = [];
let motif;
let backgroundColor = '#000';

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-canvas');

  strokeCap(SQUARE);
  angleMode(RADIANS);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER, CENTER);
  pixelDensity(1);
  noSmooth();
	frameRate(30);
  init()
}

function init() {
  const orgPalette = getColorScheme('Rothko');
  palette = repeatPalette(orgPalette, 1);
  motif = new Motif({
    originX: width / 2,
    originY: height / 2,
  });
}

function draw() {
  background(backgroundColor);
	motif.run();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}