let trails = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(20, 20, 30, 50); // Soft dark background with transparency

  // Add a new trail object at the mouse position
  trails.push(new Trail(mouseX, mouseY, frameCount));

  // Limit number of trails
  if (trails.length > 80) {
    trails.shift();
  }

  // Display each trail
  for (let i = 0; i < trails.length; i++) {
    trails[i].display(i, trails.length);
  }
}

// Trail class for elegant behavior
class Trail {
  constructor(x, y, t) {
    this.x = x;
    this.y = y;
    this.t = t;
  }

  display(index, total) {
    let lifeRatio = map(index, 0, total, 0.2, 1); // Fades over life
    let size = map(index, 0, total, 6, 18);       // Smaller as it fades

    // Elegant color transitions
    let r = map(sin(this.t * 0.05), -1, 1, 180, 255);
    let g = map(cos(this.t * 0.03), -1, 1, 120, 220);
    let b = map(sin(this.t * 0.07), -1, 1, 200, 255);
    let alpha = lifeRatio * 150;

    fill(r, g, b, alpha);
    ellipse(this.x, this.y, size);
  }
}
