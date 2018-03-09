var x = 0

function setup(){
  createCanvas(600, 600);
}

function draw() {
  background (150);
  squares(10, 10);

  ellipse(250, 250, mouseX, mouseY)

  x = x + 1

  ellipse(50, x, 20, 20)

  strokeWeight(1)
  line(0, x, 600, 600);

  line(0, x, 600, 0);

  strokeWeight(7);
  line(x, 0, 0, 600,);
  line(600, 0, x, 600);

}

function squares(x,y){
  rect(x, y, 10, 10);
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}