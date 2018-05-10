function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  strokeWeight(4);
}

function draw() {
  // put drawing code here
  if (mouseX<300) {
  	stroke(255,0,0);
  } else{
  	stroke(0);
  }

  if (mouseIsPressed == true) {
  	ellipse (mouseX,mouseY,30,30);
  }
 }