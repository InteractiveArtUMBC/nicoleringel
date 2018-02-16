var r = 84
var g = 175
var b = 203

function setup (){
  createCanvas(600, 480);
  background(r, g, b);
}

function draw(){
  var x = random(0, 600)
  var y = random(0, 480)
  stroke (r, g, mouseX);
  fill (r, g, mouseY, 70);
  ellipse(x, y, 60, 60);

  fill (167, 84, 203, 50);
  rect (mouseX, mouseY, 40, 40);
}