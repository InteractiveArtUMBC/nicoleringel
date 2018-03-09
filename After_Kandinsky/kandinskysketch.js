//gradient variables
var Y_AXIS = 1;
var X_AXIS = 5;
var b1, b2, c1, c2;

//motion variables
var xspeed = 1 
var x = 1
var xRan = random (0, 600)
var yRan = random (0, 400)


function setup (){
    createCanvas (1000, 600);

//gradient colors
  push()
  b1 = color(221, 214, 193);
  b2 = color(249, 248, 244);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);

  pop();
}

function draw () {

    push()
    setGradient(0, 0, width/2, height, b1, b2, X_AXIS);
    setGradient(width/2, 0, width/2, height, b2, b1, X_AXIS);
    pop()
    //random circle generation
    var x = random(100, 900);
    var y = random(100, 500);
    var z = random(0,1000);
   
    ellipse(x, y, 30, 30);
  

    stroke(mouseX, 10, mouseY, 10);
    line(mouseX, mouseY, y, x);
    
   // strokeWeight(5);
    
    // drawing elements
    strokeWeight(1)
    line (300, 20, 300, 140);
    line (300, 260, 300, 380);

    noFill();
    strokeWeight(3);
    stroke(225, 239, 236);
    arc(350, 80, 150, 100, PI + QUARTER_PI, TWO_PI);
    arc(290, 315, 150, 100, HALF_PI, PI);

    fill(155);
    stroke(155);
    ellipse (300, 200, 50, 50);

    noFill();
    strokeWeight(5);
    stroke (47, 55, 100);
    ellipse (300, 200, mouseX, mouseY);

    fill(22, 24, 45);
    stroke(22, 24, 45);
    ellipse (350, 100, 20, 20);
    ellipse (250, 300, 20, 20);

    //moving parts 

    x = x +1;
    strokeWeight(1.5);
    line (0, 0, 600, x);
    x = x * -1;
    line (600,400, 0, x);




}

function mousePressed() {
    loop();
  }
  
  function mouseReleased() {
    noLoop();
  }

function setGradient(x, y, w, h, c1, c2, axis) {

    noFill();
  
    if (axis == Y_AXIS) {  
      for (var i = y; i <= y+h; i++) {
        var inter = map(i, y, y+h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x+w, i);
      }
    }  
    else if (axis == X_AXIS) {  
      for (var i = x; i <= x+w; i++) {
        var inter = map(i, x, x+w, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y+h);
      }
    }
  }