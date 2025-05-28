let baseFontSize = 48;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont('Georgia');
}

function draw() {
  background(30);
  
  // Animated color
  let r = map(sin(frameCount * 0.02), -1, 1, 100, 255);
  let g = map(sin(frameCount * 0.04), -1, 1, 100, 255);
  let b = map(sin(frameCount * 0.03), -1, 1, 100, 255);
  
  fill(r, g, b);
  
  // Zoom effect using sine wave
  let zoom = sin(frameCount * 0.05) * 10;  // Ranges from -10 to +10
  let currentFontSize = baseFontSize + zoom;
  textSize(currentFontSize);
  
  text("The best way out is through.", width / 2, height / 2);
}
