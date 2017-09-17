int x = 10;
int velocity = 20;

void setup() {
  size(600, 600);
}x

void draw() {
  background(#000000);
  x += velocity;
  
  if ((x > width) || (x < 0)) {
    velocity *= -1;
  }
  
  ellipse(x, 300, 20, 20);
}