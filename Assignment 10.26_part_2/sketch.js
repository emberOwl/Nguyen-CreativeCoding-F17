var mySound;
var x = 0;
var y = 40;
var add = 20;

function preload() {
  // load font
  mySound = loadSound('assets/ding.mp3');
}

function setup() {
  // play sound

  createCanvas(windowWidth, windowHeight);
  background (0, 0, 0);
}

function draw() {
  fill(0, 255, 0);
  background (0, 0, 0);
  stroke(0, 255, 0);
  strokeWeight(10);
  line(0, 0, 0, windowHeight);
  line(windowWidth, 0, windowWidth, windowHeight);
  strokeWeight(1);
  ellipse(x, y, 20, 20);
  if (x > windowWidth) {
    add = -10;
    mySound.play();
  }
  else if (x < 0) {
    add = 20;
    mySound.play();
  }

  x += add;
}


function mouseClicked() {
  loopMode ^= true;
}