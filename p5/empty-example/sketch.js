function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  strokeWeight(4);
}


function draw() {
  // put drawing code here
  if (mouseX<1000) {
    stroke(255,0,0);
  } else{
    stroke(255);
  }

  if (mouseIsPressed == true) {    
    rect (mouseX,mouseY,120,120);
    mouseX= mouseX + random(-100,100);
    mouseY= mouseY + random(-100,100);
  } else{
    rect (mouseX,mouseY,50,50);    
    mouseX= mouseX + random(-30,30);
    mouseY= mouseY + random(-30,30);
    fill(0);
  }
}
