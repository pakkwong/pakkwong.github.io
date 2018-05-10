function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  strokeWeight(4);
}

function draw() {
  // put drawing code here
  if (mouseIsPressed == true) {

  	line (mouseX,mouseY,30,30);
  }
}