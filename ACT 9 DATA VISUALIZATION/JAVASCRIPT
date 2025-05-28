let particles = [];
const maxParticles = 150;
let colorThemes = [
  {bg: '#0a0a23', particle: '#00ffea', text: '#00ffd9', glow: '#00ffd9'},
  {bg: '#230a0a', particle: '#ff4d00', text: '#ff6a00', glow: '#ff6a00'},
  {bg: '#0a230a', particle: '#7fff00', text: '#aaff33', glow: '#aaff33'}
];
let currentTheme = 0;

let welcomeMessage = 'Welcome to Bath Spa University';
let typedIndex = 0;
let typeDelay = 60; 
let lastTypeTime = 0;
let showText = false; 

let currentFont = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';


let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }
  textFont(currentFont);
  noCursor();

  
  mic = new p5.AudioIn();
  mic.start();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


let prevMouseX = 0;

function draw() {
  background(colorThemes[currentTheme].bg);

  
  let vol = mic.getLevel();

  
  if (vol > 0.01) {
    for (let p of particles) {
      p.move(vol);
    }
  } else {
   
    for (let p of particles) {
      p.resetVelocity();
    }
  }

  
  for (let p of particles) {
    p.connect();
    p.show();
  }

  // Detect mouse horizontal movement to right and show text accordingly
  if (!showText && mouseX > prevMouseX + 5) { 
    showText = true;
  }
  prevMouseX = mouseX;

  if (showText) {
    drawWelcomeText();
  }
  drawInstructions();
}

// Glow effect welcome text with partial typing animation
function drawWelcomeText() {
  fill(colorThemes[currentTheme].text);
  noStroke();
  textAlign(CENTER, CENTER);

  
  textFont(currentFont);

  // Setting the text size to be based on the canvas width 
  let textSizeValue = min(windowWidth * 0.06, 100);
  textSize(textSizeValue);

  if (typedIndex < welcomeMessage.length && millis() - lastTypeTime > typeDelay) {
    typedIndex++;
    lastTypeTime = millis();
  }

  let displayedText = welcomeMessage.substring(0, typedIndex);

  drawingContext.shadowColor = colorThemes[currentTheme].glow;
  drawingContext.shadowBlur = 20;
  text(displayedText, width / 2, height / 2);
  drawingContext.shadowBlur = 0;

  if (typedIndex === welcomeMessage.length) {
    drawingContext.shadowBlur = 40 + 10 * sin(frameCount * 0.05);
    text(displayedText, width / 2, height / 2);
    drawingContext.shadowBlur = 0;
  }
}

function drawInstructions() {
  push();
  textAlign(CENTER, BOTTOM);
  textSize(14);
  noStroke();
  let col = color(colorThemes[currentTheme].particle);
  col.setAlpha(204); 
  text('Move mouse to the right to reveal welcome message. Press keys 1, 2, 3 to change color theme. Press SPACE to change font.', width / 2, height - 15);
  pop();
}


class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.size = random(1.5, 4);
    this.baseSize = this.size;
  }

  move(vol) {
    
    this.vel.x += random(-0.05, 0.05) + vol * random(-5, 5);
    this.vel.y += random(-0.05, 0.05) + vol * random(-5, 5);

    this.vel.limit(3);

    this.pos.add(this.vel);

   
    this.pos.x = (this.pos.x + width) % width;
    this.pos.y = (this.pos.y + height) % height;

    this.size = this.baseSize + sin(frameCount * 0.1 + this.pos.x) * 0.7;
  }

  resetVelocity() {
    // Slowing the velocity down smoothly to zero to keep particles stable when no sound
    this.vel.mult(0.9);
    this.pos.add(this.vel);
    
    this.size = this.baseSize + sin(frameCount * 0.1 + this.pos.x) * 0.2;
  }

  connect() {
    for (let other of particles) {
      if (other === this) continue;
      let d = p5.Vector.dist(this.pos, other.pos);
      if (d < 80) {
        let c = color(colorThemes[currentTheme].particle);
        c.setAlpha(map(d, 0, 80, 255, 0));
        stroke(c);
        strokeWeight(map(d, 0, 80, 1.2, 0));
        line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      }
    }
  }

  show() {
    noStroke();
    fill(colorThemes[currentTheme].particle);
    circle(this.pos.x, this.pos.y, this.size);
  }
}

function keyPressed() {
  if (key === '1') {
    currentTheme = 0;
  } else if (key === '2') {
    currentTheme = 1;
  } else if (key === '3') {
    currentTheme = 2;
  } else if (key === ' ') {
    currentFont = random([
      'Segoe UI', 'Arial', 'Georgia', 'Times New Roman', 
      'Verdana', 'Trebuchet MS', 'Comic Sans MS', 
      'Impact', 'Lucida Console', 'Palatino Linotype', 'Tahoma', 
      'Century Gothic', 'Garamond', 'Brush Script MT'   
    ]);
    textFont(currentFont);
  }
}
