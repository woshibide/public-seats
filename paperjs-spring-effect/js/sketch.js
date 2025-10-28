// Vector2 class
class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    const len = this.length();
    if (len > 0) {
      this.x /= len;
      this.y /= len;
    }
    return this;
  }

  mix(other, factor) {
    this.x = this.x * (1 - factor) + other.x * factor;
    this.y = this.y * (1 - factor) + other.y * factor;
    return this;
  }

  copy() {
    return new Vector2(this.x, this.y);
  }

  multiply(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  subtract(other) {
    return new Vector2(this.x - other.x, this.y - other.y);
  }

  withinBounds(bounds) {
    return this.x >= bounds.left && this.x <= bounds.right && this.y >= bounds.top && this.y <= bounds.bottom;
  }
}

// Line class
class Line {
  constructor(point, normal, config) {
    this.position = point;
    this.normal = normal;
    this.config = config;
    this.positionV2 = new Vector2(point.x, point.y);
    this.angle = config.angle;
    this.basePosition = point.clone();
    this.path = new paper.Path();
    this.path.strokeColor = config.color;
    this.path.strokeWidth = 1;
    const endPoint = point.add(normal.multiply(config.width));
    this.path.add(point, endPoint);
  }

  update(vel, pos, strength, mouseStrength) {
    const dist = this.positionV2.subtract(pos).length();
    const influence = Math.max(0, 1 - dist / 200); // arbitrary radius
    const moveAmount = strength * influence * (this.config.move.max - this.config.move.min) + this.config.move.min;
    const offset = vel.copy().normalize().multiply(moveAmount);
    this.path.position = this.basePosition.add(new paper.Point(offset.x, offset.y));
    // rotate based on vel
    const angleOffset = vel.length() * strength * 10; // arbitrary
    this.path.rotation = this.angle + angleOffset;
  }

  cleanUp() {
    this.path.remove();
  }
}

// DancingImage class
class DancingImage {
  constructor(container) {
    this.container = container;
    // implement animation if needed
  }

  update() {
    // animate the image
  }

  destroy() {
    // cleanup
  }
}

// Main SpringEffect class
class SpringEffect {
  constructor() {
    this.init = this.init.bind(this);
    this.initLetters = this.initLetters.bind(this);
    this.draw = this.draw.bind(this);
    this.resize = this.resize.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.loadShape = this.loadShape.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.scroll = this.scroll.bind(this);
    this.updateMouseVel = this.updateMouseVel.bind(this);
    this.updateVel = this.updateVel.bind(this);
    this.extractPaths = this.extractPaths.bind(this);
    this.buildLines = this.buildLines.bind(this);
    this.destroy = this.destroy.bind(this);
    this.init();
    // expose instance so external code (paper.view.onFrame) can call draw()
    try {
      window.springEffect = this;
    } catch (e) {
      // window might be undefined in non-browser envs; ignore
    }
    this.handleResize();
  }

  init() {
    document.addEventListener("mousemove", this.mouseMove);
    document.addEventListener("touchmove", this.touchMove);
    window.addEventListener("scroll", this.scroll);
    this.destroy();
    this.mouse = {
      pos: new Vector2(window.innerWidth / 2, window.innerHeight / 2),
      vel: new Vector2(),
      strength: 0,
      mouseStrength: 1
    };
    this.scrollPos = 0;
    this.config = {
      mouse: { velDecay: 0.975, maxMovmentPercentage: 0.5 },
      svg: {},
      lines: {
        line: {
          angle: 10,
          color: window.accentColor || '#000',
          width: 20,
          move: { max: 50, min: 2 }
        }
      }
    };
    this.lines = [];
    this.images = [];
    this.initLetters();
    document.querySelectorAll(".dancing-image-container").forEach(container => {
      this.images.push(new DancingImage(container));
    });
  }

  initLetters() {
    this.container = document.querySelector(".effect-container");
    if (this.container) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          this.areLinesInView = entry.isIntersecting;
        });
      });
      this.observer.observe(this.container);
      this.canvas = this.container.querySelector("canvas");
      this.paper = new paper.PaperScope();
      this.paper.activate();
    this.paper.setup(this.canvas);
    this.paper.view.onResize = this.debounce(this.handleResize, 50);
    this.paper.view.onFrame = this.draw.bind(this);
    }
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  loadShape() {
    let svgPath = 'assets/spring.svg';
    this.type = document.body.classList.contains("single") ? "s" : "spring";
    if (this.paper) {
      if (this.type === "s") {
        svgPath = this.isMobile ? 'assets/spring.svg' : 'assets/spring.svg'; // assume same
        this.config.lines = {
          line: {
            angle: 10,
            color: "#FFF",
            width: this.isMobile ? 150 : 300,
            move: { max: this.isMobile ? 100 : 250, min: 10 }
          }
        };
      }
      this.paper.project.importSVG(svgPath, {
        onLoad: item => {
          this.shape = item;
          this.resize();
        },
        expandShapes: true,
        insert: false
      });
    }
  }

  handleResize() {
    const newWidth = window.innerWidth;
    const oldWidth = this.windowWidth;
    this.isMobile = window.innerWidth < 700;
    this.windowWidth = window.innerWidth;
    this.maxMov = Math.max(window.innerWidth, window.innerHeight) * this.config.mouse.maxMovmentPercentage;
    if (!this.shape || (this.type === "s" && ((oldWidth >= 700 && newWidth < 700) || (oldWidth < 700 && newWidth >= 700)))) {
      this.loadShape();
    } else {
      this.resize();
    }
  }

  resize() {
    this.paper.project.activeLayer.removeChildren(1);
    let heightRatio = 0.45;
    let scaleFactor = 1.05;
    if (this.type === "s") {
      heightRatio = 0.75;
      scaleFactor = 1.075;
    }
    this.paper.view.viewSize = new paper.Size(this.container.clientWidth, heightRatio * this.container.clientWidth);
    this.shape.fitBounds(this.paper.view.bounds);
    if (this.type === "s") {
      this.shape.position.y = this.isMobile ? this.shape.bounds.height / 2 : this.shape.bounds.height / 2.5;
    }
    this.shape.scale(scaleFactor);
    this.config.svg.width = this.shape.bounds.width;
    this.config.svg.height = this.shape.bounds.height;
    this.workPaths = this.extractPaths(this.shape);
    this.bounds = [];
    const canvasRect = this.paper.view.element.getBoundingClientRect();
    const canvasBounds = new paper.Rectangle(canvasRect.left, canvasRect.top, canvasRect.width, canvasRect.height);
    if (this.container.nextElementSibling && this.container.nextElementSibling.querySelector("img")) {
      const imgRect = this.container.nextElementSibling.querySelector("img").getBoundingClientRect();
      const imgBounds = new paper.Rectangle(imgRect.left, imgRect.top, imgRect.width, imgRect.height);
      const left = Math.max(imgBounds.left, canvasBounds.left);
      const top = Math.max(imgBounds.top, canvasBounds.top);
      const right = Math.min(imgBounds.right, canvasBounds.right);
      const bottom = Math.min(imgBounds.bottom, canvasBounds.bottom);
      if (left < right && top < bottom) {
        this.bounds.push({ left, right, top: 0, bottom: bottom - top });
      }
    }
    this.config.lines.splitDistance = Math.round(0.01 * this.windowWidth);
    this.config.lines.line.width = Math.round(0.05 * this.windowWidth);
    this.config.lines.line.move.max = Math.round(0.09 * this.windowWidth);
    if (this.type === "s") {
      if (this.isMobile) {
        this.config.lines.splitDistance *= 6;
        this.config.lines.line.width *= 7;
      } else {
        this.config.lines.splitDistance *= 4;
        this.config.lines.line.width *= 4;
      }
    }
    this.buildLines();
  }

  buildLines() {
    const splitDistance = this.config.lines.splitDistance;
    while (this.lines.length > 0) {
      this.lines.pop().cleanUp();
    }
    for (let path of this.workPaths) {
      const numSegments = Math.round(path.length / splitDistance);
      const segmentLength = Math.round(path.length / numSegments);
      for (let i = 0; i < numSegments; i++) {
        const loc = path.getLocationAt(segmentLength * i);
        this.lines.push(new Line(loc.point, loc.normal, this.config.lines.line));
      }
      const lastLoc = path.getLocationAt(path.length);
      if (lastLoc) {
        this.lines.push(new Line(lastLoc.point, lastLoc.normal, this.config.lines.line));
      }
    }
  }

  extractPaths(item, paths = []) {
    let result = [...paths];
    if (item.children) {
      for (let child of item.children) {
        if (child.className === "Path") {
          result.push(child);
        } else {
          result = [...result, ...this.extractPaths(child)];
        }
      }
    } else if (item.className !== "Shape") {
      console.error(`Not supported ${item.className}`);
    }
    return result;
  }

  scroll(event) {
    const deltaY = this.scrollPos - window.scrollY;
    this.mouse.mouseStrength *= 0.75;
    this.scrollPos = window.scrollY;
    this.updateMouseVel(this.mouse.pos.x, this.mouse.pos.y + 0.5 * deltaY);
    this.paper.view.element.style.transform = `translateY(${0.15 * window.scrollY}px)`;
  }

  mouseMove(event) {
    this.updateMouseVel(event.clientX, event.clientY);
  }

  touchMove(event) {
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      this.updateMouseVel(touch.clientX, touch.clientY);
    }
  }

  updateMouseVel(x, y) {
    const prevX = this.mouse.pos.x;
    const prevY = this.mouse.pos.y;
    this.mouse.pos.set(x, y);
    if (prevX === -1 || prevY === -1) return;
    if (prevX === x && prevY === y) return;
    let diff = new Vector2(prevX - x, prevY - y);
    let len = diff.length();
    diff.normalize();
    this.mouse.vel.mix(diff, 0.15);
    len /= this.maxMov;
    this.mouse.strength += len;
    this.mouse.strength = Math.min(1, this.mouse.strength);
  }

  updateVel() {
    this.mouse.strength *= this.config.mouse.velDecay;
    let normalizedVel = this.mouse.vel.copy();
    normalizedVel.normalize();
    this.mouse.vel.mix(normalizedVel, 0.05);
    this.mouse.mouseStrength += 0.05 * (1 - this.mouse.mouseStrength);
  }

  draw() {
    this.images.forEach(img => img.update());
    this.updateVel();
    if (this.areLinesInView && this.lines) {
      for (let line of this.lines) {
        let strengthMultiplier = 1;
        for (let bound of this.bounds) {
          if (new Vector2(line.positionV2.x, line.positionV2.y + 0.15 * this.scrollPos).withinBounds(bound)) {
            strengthMultiplier = 0.1;
            break;
          }
        }
        line.update(this.mouse.vel, this.mouse.pos, this.mouse.strength * strengthMultiplier, this.mouse.mouseStrength);
      }
    }
  }

  destroy() {
    console.log("destroy effects");
    try {
      document.removeEventListener("mousemove", this.mouseMove);
    } catch (e) {}
    try {
      document.removeEventListener("touchmove", this.touchMove);
    } catch (e) {}
    try {
      window.removeEventListener("scroll", this.scroll);
    } catch (e) {}
    try {
      if (this.observer && typeof this.observer.disconnect === 'function') {
        this.observer.disconnect();
      }
    } catch (e) {}
    try {
      if (Array.isArray(this.images)) {
        this.images.forEach(img => { try { img.destroy(); } catch (err) {} });
      }
    } catch (e) {}
    this.images = [];
  }
}

// Instantiate the effect
new SpringEffect();


