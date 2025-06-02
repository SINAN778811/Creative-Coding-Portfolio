function setup() {
  createCanvas(600, 400);
  noLoop(); // Stops the draw loop since we don't need animation
}

function draw() {
  background(220);

  // Car body
  fill(0, 150, 255); // Blue color
  noStroke();
  rect(100, 200, 400, 100); // Main body
  rect(150, 150, 300, 50);  // Roof

  // Windows
  fill(200, 220, 240); // Light blue for windows
  rect(160, 160, 130, 30); // Left window
  rect(310, 160, 130, 30); // Right window

  // Wheels
  fill(50); // Dark gray for wheels
  ellipse(200, 300, 80, 80); // Left wheel
  ellipse(400, 300, 80, 80); // Right wheel

  // Wheel rims
  fill(200); // Light gray for rims
  ellipse(200, 300, 50, 50); // Left rim
  ellipse(400, 300, 50, 50); // Right rim

  // Headlights
  fill(255, 255, 0); // Yellow for headlights
  ellipse(500, 230, 30, 30); // Right headlight
  ellipse(100, 230, 30, 30); // Left headlighter

}
