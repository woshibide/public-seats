class SimplexNoise {
  constructor(seed = 0) {
    this.grad3 = [[1,1,0],[-1,1,0],[1,-1,0],
                  [-1,-1,0],[1,0,1],[-1,0,1],
                  [1,0,-1],[-1,0,-1],[0,1,1],
                  [0,-1,1],[0,1,-1],[0,-1,-1]];
    this.p = [];
    for (let i = 0; i < 256; i++) {
      this.p[i] = Math.floor((seed + i * 0.1) * 256) % 256;
    }
    this.perm = [];
    for (let i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
    }
    this.permMod12 = [];
    for (let i = 0; i < 512; i++) {
      this.permMod12[i] = this.perm[i] % 12;
    }
  }

  dot(g, x, y) {
    return g[0]*x + g[1]*y;
  }

  noise2D(xin, yin) {
    const F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
    const G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
    let n0, n1, n2;
    let s = (xin + yin) * F2;
    let i = Math.floor(xin + s);
    let j = Math.floor(yin + s);
    let t = (i + j) * G2;
    let X0 = i - t;
    let Y0 = j - t;
    let x0 = xin - X0;
    let y0 = yin - Y0;
    let i1, j1;
    if (x0 > y0) {
      i1 = 1;
      j1 = 0;
    } else {
      i1 = 0;
      j1 = 1;
    }
    let x1 = x0 - i1 + G2;
    let y1 = y0 - j1 + G2;
    let x2 = x0 - 1.0 + 2.0 * G2;
    let y2 = y0 - 1.0 + 2.0 * G2;
    let ii = i & 255;
    let jj = j & 255;
    let gi0 = this.permMod12[ii + this.perm[jj]];
    let gi1 = this.permMod12[ii + i1 + this.perm[jj + j1]];
    let gi2 = this.permMod12[ii + 1 + this.perm[jj + 1]];
    let t0 = 0.5 - x0*x0 - y0*y0;
    if (t0 >= 0) {
      t0 *= t0;
      n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0);
    } else {
      n0 = 0.0;
    }
    let t1 = 0.5 - x1*x1 - y1*y1;
    if (t1 >= 0) {
      t1 *= t1;
      n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1);
    } else {
      n1 = 0.0;
    }
    let t2 = 0.5 - x2*x2 - y2*y2;
    if (t2 >= 0) {
      t2 *= t2;
      n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2);
    } else {
      n2 = 0.0;
    }
    return 70.0 * (n0 + n1 + n2);
  }
}

let chairs = []
let gc, oc, rc, wc, yc
let simplex

function preload() {
	gc = loadImage('stoeltje_1.png');
	oc = loadImage('stoeltje_7.png');
	rc = loadImage('stoeltje_3.png');
	wc = loadImage('stoeltje_4.png');
	yc = loadImage('stoeltje_8.png');
	chairs.push(gc, oc, rc, wc, yc)
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	simplex = new SimplexNoise(Date.now())
	background(0);
	shuffle(chairs, true)
}

function draw() {
	blendMode(HARD_LIGHT)
	let sizing = height * 0.05

	for (let x = -sizing; x <= width + sizing; x += sizing) {
		for (let i = 0; i < 10; i++) {
			push()
			blendMode(BURN)
			let s = random(height)
			image(random(chairs), x - (sizing * 1.75), random(height), s, s * 0.25)
			pop()
		}
		for (let y = height + sizing; y > -sizing; y -= sizing * 0.75) {
			let soff = sizing * 0.25
			let sjiggle = sizing * 0.1
			fan(x + random(-soff, soff), y + random(-soff, soff), sizing + random(-sjiggle, sjiggle), chairs[1])
		}
		sizing = map(x, -sizing, height + sizing, height * 0.05, height * 0.33)
	}
	for (let i = 0; i < 5; i++) {
		push()
		blendMode(DODGE)
		let s = random(height * 0.5)
		image(random(chairs), random(width * 0.66, width + width * 0.1), random(height), s, s * 0.5)
		pop()
	}
	for (let y = 0; y <= height; y += height * 0.1) {
		let length = map(noise(y / 10), 0, 1, width * 0.2, width)
		sideSwipe(y, length, random(width * 0.3), chairs[3])
	}

	noLoop()
}

function fan(x, y, r, c) {
	for (let a = 0; a < TAU; a += TAU / 30) {
		push()
		blendMode(HARD_LIGHT)
		translate(x, y)
		rotate(a)

		image(c, 0, 0, r, r * 0.5)
		pop()
	}
}


function sideSwipe(y, length, baseS, c) {
	push()
	blendMode(BLEND)
	translate(0, y)
	let inc = baseS * 0.1

	for (let x = -baseS; x < length; x += inc) {
		let sized = map(x, -baseS, length, baseS, inc)
		let r = simplex.noise2D(x / 100, y / 10) * QUARTER_PI
		push()
		translate(x, 0)
		rotate(r)
		image(c, 0, 0, sized, sized * 0.5)
		pop()
	}

	pop()

}