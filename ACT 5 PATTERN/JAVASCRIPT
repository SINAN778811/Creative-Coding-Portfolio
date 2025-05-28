var x;
var y;
var size = 20;
var shapes = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(14);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);
  noCursor();
}

function draw() {
  background(0); // dark background
  x = 25;

  for (x = 25; x < 400; x += 50) {
    for (y = 25; y < 400; y += 50) {
      size = random(10, 40);
      shapes = random(0, 1);

      let hue = random(180, 360); // bright hues from cyan to pink
      let sat = 100;
      let bri = 90;

      fill(hue, sat, bri);
      stroke(0, 0, 100); // white stroke in HSB
      strokeWeight(2);

      if (shapes < 0.5) {
        ellipse(x, y, size, size);
      } else {
        rect(x, y, size, size);
      }
    }
  }
}
