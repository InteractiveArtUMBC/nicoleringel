function setup() {
  createCanvas(600, 600);
}
// colors based on location of the mouse
function draw() {
  colorMode(RGB, 600, 600, 255);
  background (mouseY, mouseX, 180);

  stroke(184, 142, 142, mouseX);
  fill(mouseX, mouseY, 180);
  ellipse(mouseX, mouseY, 90, 90);
  
  noStroke()
  fill(mouseX, mouseY, 180);
  rect (50, 50, 50, 50);
  
  noStroke()
  fill(mouseX, mouseY, 180);
  rect (500, 500, 50, 50);

  noStroke()
  fill(mouseX, mouseY, 180);
  rect (50, 500, 50, 50);

  noStroke()
  fill(mouseX, mouseY, 180);
  rect (500, 50, 50, 50);

  stroke(255)
  line(300, 0, 300, 600)

  stroke(255)
  line(0, 300, 600, 300)

  function mousePressed(){
    background (mouseY, mouseX, 180)
  }




}