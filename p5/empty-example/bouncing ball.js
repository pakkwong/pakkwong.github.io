var circleX;
var xspeed= 10;

function setup(){
  createCanvas(600,350);
  circleX=0;
}

function draw(){
 background(200);
 fill(255);
 stroke(0);
 ellipse(circleX,height/2,32,32);
 if(mouseIsPressed){
 circleX=circleX + xspeed;
 }
 
 if(circleX>width){
    xspeed=-30;
 }
 
 if(circleX<0){
   xspeed=15;
 }
 
}
