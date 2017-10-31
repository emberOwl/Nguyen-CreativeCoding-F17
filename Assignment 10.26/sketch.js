var mySound;
var loopMode = true;

function preload() {
  // load font
  mySound = loadSound('assets/cello.wav');
}

function setup() {
  // play sound
  mySound.loop(true);
  mySound.play();
}

function draw() {
if (loopMode) {
    mySound.playMode("restart");
    console.log("restart");
  }
  else {
    mySound.playMode("sustain");
    console.log("sustain");
  }
}


function mouseClicked() {
  loopMode ^= true;
}