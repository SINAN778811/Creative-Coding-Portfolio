let data = [
  { continent: "Asia", population: 4763800000 },
  { continent: "Africa", population: 1428700000 },
  { continent: "Europe", population: 748000000 },
  { continent: "North America", population: 602000000 },
  { continent: "South America", population: 439000000 },
  { continent: "Oceania", population: 44000000 },
];

let totalPopulation;
let angles = [];

function setup() {
  createCanvas(800, 600);
  angleMode(RADIANS);
  textAlign(CENTER, CENTER);
  textSize(14);
  colorMode(HSB, 360, 100, 100);

  // Calculate total population
  totalPopulation = data.reduce((sum, d) => sum + d.population, 0);

  // Precompute angles
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let angle = map(data[i].population, 0, totalPopulation, 0, TWO_PI);
    angles.push({ start: lastAngle, end: lastAngle + angle });
    lastAngle += angle;
  }
}

function draw() {
  background(0, 0, 95);
  translate(width / 2, height / 2);

  let radius = 200;
  let mouseAngle = atan2(mouseY - height / 2, mouseX - width / 2);
  if (mouseAngle < 0) mouseAngle += TWO_PI;

  for (let i = 0; i < data.length; i++) {
    let start = angles[i].start;
    let end = angles[i].end;

    // Assign a unique color
    fill(i * 60, 80, 90);
    stroke(255);
    strokeWeight(1);
    arc(0, 0, radius * 2, radius * 2, start, end, PIE);

    // Check if mouse is inside this segment
    if (mouseAngle > start && mouseAngle < end && dist(mouseX, mouseY, width / 2, height / 2) < radius) {
      fill(0);
      rect(-150, -250, 300, 60, 10);
      fill(255);
      text(`${data[i].continent}`, 0, -240);
      text(`${nf(data[i].population / 1e9, 1, 2)} Billion`, 0, -220);
    }
  }

  // Title
  fill(0);
  textSize(20);
  text("World Population by Continent (2023)", 0, -260);
}
