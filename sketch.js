let x, y, radius, r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //make stars shine slowly
  frameRate(1);

  //midnight blue background
  background(0, 30, 60);
}

function draw() {
  //make stars of random small sizes appear in random places
  x = random(0, width);
  y = random(0, height);
  radius = random(5, 10); //radius for circle

  //draw small pastel colored stars
  //colors of stars for different x locations
  noStroke();

  //cool colored stars on left side
  if(x<width/2) {
    r = random(150); //red
    g = random(100, 180); //green
    b = random(180, 255); //blue
  }

  //warm colored stars on right
  if(x<=width && x >= width/2) {
    r = random(200, 255); //red
    g = random(200); //green
    b = random(80); //blue
  }

  fill(r, g, b);
  circle(x, y, radius);
}
