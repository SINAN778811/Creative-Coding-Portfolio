let song;
let fft;

function preload() {
  song = loadSound('Bass.mp3'); 
}

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  fft = new p5.FFT();
  song.play(); 
}

function draw() {
  background(0, 0, 10, 0.1); 
  translate(width / 2, height / 2);

  let waveform = fft.waveform();
  noFill();
  strokeWeight(2);
  beginShape();
  
  for (let i = 0; i < 360; i++) {
    let index = floor(map(i, 0, 360, 0, waveform.length));
    let waveAmp = waveform[index];
    let r = map(waveAmp, -1, 1, 100, 250);
    let x = r * cos(i);
    let y = r * sin(i);
    stroke(i % 360, 100, 100); 
    vertex(x, y);
  }
  endShape(CLOSE);
}
