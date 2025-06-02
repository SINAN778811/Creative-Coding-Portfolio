function setup() {
  createCanvas(400, 400);
  background(30);
  drawAlien();
}

function drawAlien() {
  noStroke();

  // Head
  fill(100, 255, 100);
  ellipse(200, 200, 150, 180);

  // Eyes
  fill(0);
  ellipse(170, 190, 30, 50);
  ellipse(230, 190, 30, 50);

  // Eye highlights
  fill(255);
  ellipse(175, 185, 8, 12);
  ellipse(235, 185, 8, 12);

  // Antennae
  stroke(100, 255, 100);
  strokeWeight(5);
  line(170, 130, 150, 90);
  line(230, 130, 250, 90);

  // Antenna balls
  noStroke();
  fill(100, 255, 100);
  ellipse(150, 90, 15, 15);
  ellipse(250, 90, 15, 15);

  // Mouth
  fill(0);
  arc(200, 230, 40, 20, 0, PI);
}
