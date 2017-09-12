void setup() {
  size(600, 600);
  background(#ffffff);
}

void draw() {
  // red section for last 1/4th of the screen width
  if ((mouseX >= width * 3/4)) {
    background(#ffffff);
    fill(#ff0000);
    rect(width * 3/4, 0, width/4, height);
  }
  
  // blue sectopm for first 1/2 horizontally and 2/3r vertically of screen height
  if ((mouseX <= width/2) && (mouseY < height * 2/3)) {
    background(#ffffff);
    fill(#0000ff);
    rect(0, 0, width/2, height);
  }
  
  // make the background yellow
  if (mouseX > width/2 && mouseX < width * 3/4) {
    fill(#ffff00);
    rect(0, 0, width, height);
  }
}

// teal section
void mouseClicked() {
    if (mouseX <= width/2) {
      background(#ffffff);
      fill(#00ffcc);
      rect(0, (height * 2)/3, width/2, height/3);
    }
}

// in class code
/* 
void mouseReleased() {
  fill(#00ff00);
  ellipse(mouseX, mouseY, 20, 30);
}

void mouseDragged() {
    fill(#0000ff);
    ellipse(mouseX, mouseY, 20, 30);
}

void mouseMoved() {
  fill(#ffffff);
  ellipse(mouseX, mouseY, 10, 20);
}

void keyPressed() {
  fill(0, 0, 0);
  rect(mouseX, mouseY, 30, 70);
  println(key);
}
*/