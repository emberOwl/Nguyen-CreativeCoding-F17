// timer to "drop" boxes
int time = 0;
// place to store rectangle coordinates
int[][] locations;

void setup() {
  size(700, 700);
  background(#ffffff);
}

void draw() {
  // every 3 seconds draw a randomly colored box
  if (millis() > time + 3000)
  {
    fill(random(255), random(255), random(255));
    float[] coord = {random(700), random(700)};
    rect(coord[0], coord[1], 20, 30);
  }
}