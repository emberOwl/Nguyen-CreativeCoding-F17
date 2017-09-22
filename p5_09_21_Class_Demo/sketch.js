function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#ffffff');
}

function draw() {
  // red section for last 1/4th of the screen windowWidth
  if ((mouseX >= windowWidth * 3/4)) {
    background('#ffffff');
    fill('#ff0000');
    rect(windowWidth * 3/4, 0, windowWidth/4, windowHeight);
  }
  
  // blue sectopm for first 1/2 horizontally and 2/3r vertically of screen windowHeight
  if ((mouseX <= windowWidth/2) && (mouseY < windowHeight * 2/3)) {
    background('#ffffff');
    fill('#0000ff');
    rect(0, 0, windowWidth/2, windowHeight);
  }
  
  // make the background yellow
  if (mouseX > windowWidth/2 && mouseX < windowWidth * 3/4) {
    fill('#ffff00');
    rect(0, 0, windowWidth, windowHeight);
  }
}

// teal section
function mouseClicked() {
    if (mouseX <= windowWidth/2) {
      background('#ffffff');
      fill('#00ffcc');
      rect(0, (windowHeight * 2)/3, windowWidth/2, windowHeight/3);
    }
}