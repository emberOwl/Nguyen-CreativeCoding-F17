// timer to "drop" boxes
int time = 0;
int counter = 0;
// place to store rectangle coordinates
Bubble[] locations;
// bubbles

void setup() {
  size(700, 700);
  background(#ffffff);
}

void draw() {
  // every 3 seconds draw a randomly colored box
  if (millis() > time + 2000)
  {
    color c = color(random(255), random(255), random(255));
    float[] coord = {random(700), random(700)};
    float speed = random(20);
    Bubble newBub = new Bubble(c, coord[0], coord[1], speed);
    locations [counter] = newBub;
    counter += 1;
    time = millis();
  }
}



void mouseClicked () {
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, 20, 30);
}

class Bubble {
  color c;
  float x;
  float y;
  float speed;
  
  Bubble(color cin, float xin, float yin, float speedin) {
    c = cin;
    x = xin;
    y = yin;
    speed = speedin;
  }
  
  void display() {
    fill(c);
    ellipse(x, y, 30, 30);
  }
}