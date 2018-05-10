function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  strokeWeight(4);
}

function draw() {
  // put drawing code here
  if (mouseIsPressed) {

  	line (mouseX,mouseY,pmouseX,pmouseY);
  }
