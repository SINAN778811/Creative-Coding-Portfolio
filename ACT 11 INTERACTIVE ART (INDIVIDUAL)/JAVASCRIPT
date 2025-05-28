let raindrops = [];
let grasses = [];
let cloudGraphics;
let showRain = false;
let lastMouseMovedTime = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // Create offscreen graphics for clouds
  cloudGraphics = createGraphics(width, height / 2);
  generateClouds(cloudGraphics);

  // Create realistic grass
  for (let x = 0; x < width; x += 3) {
    grasses.push(new GrassBlade(x, height, random(30, 80), random(0.5, 1.5)));
  }
}

function draw() {
  background(20, 29, 68);

  // Draw static clouds
  image(cloudGraphics, 0, 0);

  // Lightning flash
  if (showRain && random(1) < 0.01) {
    background(255, 255, 255, 60);
  }

  // Rain if mouse recently moved
  if (millis() - lastMouseMovedTime < 100) {
    showRain = true;
    for (let i = 0; i < 10; i++) {
      raindrops.push(new Raindrop(random(width), random(-100, 0)));
    }
  } else {
    showRain = false;
  }

  // Draw raindrops
  for (let i = raindrops.length - 1; i >= 0; i--) {
    raindrops[i].fall();
    raindrops[i].show();
    if (raindrops[i].offScreen()) {
      raindrops.splice(i, 1);
    }
  }

  // Draw grass
  for (let blade of grasses) {
    blade.swing();
    blade.display();
  }
}

function generateClouds(pg) {
  pg.clear();
  pg.noStroke();
  for (let y = 0; y < pg.height; y++) {
    for (let x = 0; x < pg.width; x++) {
      let n = noise(x * 0.0025, y * 0.005);
      let alpha = map(n, 0.45, 0.7, 0, 255);
      alpha = constrain(alpha, 0, 200);
      pg.fill(255, alpha);
      pg.rect(x, y, 1, 1);
    }
  }
}

function mouseMoved() {
  lastMouseMovedTime = millis();
}

// Grass blade class
class GrassBlade {
  constructor(x, baseY, length, swaySpeed) {
    this.x = x;
    this.baseY = baseY;
    this.length = length;
    this.swaySpeed = swaySpeed;
    this.offset = random(TWO_PI);
    this.color = color(0, random(120, 200), 0);
  }

  swing() {
    this.angle = sin(frameCount * 0.05 * this.swaySpeed + this.offset) * 0.4;
  }

  display() {
    push();
    translate(this.x, this.baseY);
    rotate(this.angle);
    stroke(this.color);
    strokeWeight(1);
    line(0, 0, 0, -this.length);
    pop();
  }
}

// Raindrop class
class Raindrop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.len = random(10, 20);
    this.speed = random(5, 12);
  }

  fall() {
    this.y += this.speed;
  }

  show() {
    stroke(180, 180, 255);
    strokeWeight(2);
    line(this.x, this.y, this.x, this.y + this.len);
    noStroke();
  }

  offScreen() {
    return this.y > height;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cloudGraphics = createGraphics(width, height / 2);
  generateClouds(cloudGraphics); // regenerate clouds for new size
}
