function setup() {
  createCanvas(600,600);
}

function draw() {
  background(215, 183, 255);

  fill(0, 0, 100, 10);
  noStroke();
  rect(0, 0, 600, 50);
  rect(0, 100, 600, 50);
  rect(0, 200, 600, 50);
  rect(0, 300, 600, 50);
  rect(0, 400, 600, 50);
  rect(0, 500, 600, 50);

  fill(0, 0, 150, 10)
  rect(100, 0, 50, 600);
  rect(200, 0, 50, 600);
  rect(300, 0, 50, 600);
  rect(400, 0, 50, 600);
  rect(500, 0, 50, 600);
  rect(0, 0, 50, 600);

  stroke(255);
  line(0, 0, 600, 600);
  line(600, 0, 0, 600);

  noFill()
  arc(350, 355, mouseX, mouseY, 0, HALF_PI);
  arc(400, 405, 200, 200, 0, HALF_PI);

  stroke(255);
  fill(255);
  ellipse(mouseX, mouseY, 40, 40);

  noFill();
  arc(150, 150, 75, 75, 0, HALF_PI)

}