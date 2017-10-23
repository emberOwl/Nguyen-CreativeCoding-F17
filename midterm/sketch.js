// global worm y position
var yPos = 0;
var rainyPos = 13;

// global bird status
var dead = true;
var deathReason = "";

// screen width and height
var screen = 600;

function setup() {
  // setup screen
  createCanvas(screen, screen);
  background('#666666');
  
  // load assets
  player = loadImage("assets/bird.png");
  rain = loadImage("assets/raindrop.png");  
  worm = loadImage("assets/worm.png");  
  bg = loadImage("assets/background.jpg");  
  font = loadFont('assets/Everlong 2.0.otf');

  // create the player
  Player1 = new Bird();
  Player1.xPos = 30;
  Player1.yPos = 0;

  // create the worms
  var wormy1, wormy2, wormy3, wormy4;
  worms = [wormy1, wormy2, wormy3, wormy4];
  for (var w = 0; w < worms.length; w++) {
    worms[w] = new Worm();
    worms[w].xPos = Math.floor((Math.random() * screen) + 1);
  }

  // create the acid rain
  var rain1, rain2, rain3, rain4, rain5, rain6, rain7, rain8, rain9, rain10;
  raindrops = [rain1, rain2, rain3, rain4, rain5, rain6, rain7, rain8, rain9, rain10];
  for (var r = 0; r < raindrops.length; r++) {
    raindrops[r] = new Raindrop();
    raindrops[r].xPos = Math.floor((Math.random() * screen) + 1);
  }
}

function draw() {

  // load bg image
  background(bg);

  // setup title
  textSize(40);
  fill(17, 9, 163);
  textFont(font);
  text("HARD KNOCK LIFE", 10, 40);
  
  // setup game logic
  if (!dead) {
    // deforestation: 17% of Amazon forest has been lost within the last 50 years
    if (Math.floor((Math.random() * 100) + 1) == 17) {
      dead = true;
      deathReason = "Deforestation.";
    }

    // predator: random number
    if (Math.floor((Math.random() * 100) + 1) == 25) {
      dead = true;
      deathReason = "Eaten by a predator.";
    }

    // drop worms
    yPos += 0.5;
    for (var w = 0; w < worms.length; w++) {
      worms[w].yPos = yPos;
      worms[w].draw();
    }
  
    // drop rain
    rainyPos += 1;
    for (var r = 0; r < raindrops.length; r++) {
      raindrops[r].yPos = rainyPos;
      raindrops[r].draw();
    }

    // player movement
    if (keyIsDown(LEFT_ARROW))
      Player1.xPos-=5;

    if (keyIsDown(RIGHT_ARROW))
      Player1.xPos+=5;

    if (keyIsDown(UP_ARROW))
      Player1.yPos-=5;

    if (keyIsDown(DOWN_ARROW))
      Player1.yPos+=5;
    Player1.draw();


    // worms increase health
    for (var w = 0; w < worms.length; w++) {
      if ((worms[w].xPos <= Player1.xPos + 20) && (worms[w].xPos >= Player1.xPos - 20) && (worms[w].yPos <= Player1.yPos + 20) && (worms[w].yPos >= Player1.yPos - 20)) {
        Player1.health += 2;
      }
    }

    // acid rain decreases health
    for (var r = 0; r < raindrops.length; r++) {
      if ((raindrops[r].xPos <= Player1.xPos + 20) && (raindrops[r].xPos >= Player1.xPos - 20) && (raindrops[r].yPos <= Player1.yPos + 20) && (raindrops[r].yPos >= Player1.yPos - 20)) {
        Player1.health -= 10;
      }
    }
  } else {
    // prepare death text
    textSize(36);
    fill(255, 0, 0);
    textFont(font);
    text("You died.", 10, 80);

    // prepare reason text
    textSize(24);
    fill(102, 0, 204);
    text(deathReason, 10, 100);

    // wait 3 seconds before game restart
    setTimeout(function(){ 
      dead = false;
      deathReason = "";
      Player1.health = 100;
      Player1.size = 50;
    }, 3000);
  }
}

// Bird function
function Bird() {
  this.health = 100;    // default health
  this.size = 50;       // default size: 50
  this.xPos;
  this.yPos;

  this.draw = function() {
    // if > 100 health, grow
    if (this.health > 100) {
      this.health -= 10;
      this.size += 10;
    }

    // if < 0 health, die
    if (this.health <= 0) {
      dead = true;
      deathReason = "Hit by too much acid rain.";
    }

    // keep bird on canvas
    this.xPos = constrain(this.xPos, 0, screen);
    this.yPos = constrain(this.yPos, 0, screen);
    image(player, this.xPos, this.yPos, this.size, this.size);
  };
}

function Worm() {
  this.xPos;
  this.yPos;

  this.draw = function() {
    // keep worm on canvas
    this.yPos = constrain(this.yPos, 0, screen);
    image(worm, this.xPos, this.yPos, 20, 20);

    // restart worm if it goes offscreen
    if (yPos >= screen) {
      yPos = 0;
      for (var w = 0; w < worms.length; w++) {
        worms[w].xPos = Math.floor((Math.random() * screen) + 1);
      }
    }
  };
}

function Raindrop() {
  this.xPos;
  this.yPos;

  this.draw = function() {
    this.yPos = constrain(this.yPos, 0, screen);
    image(rain, this.xPos, this.yPos, 20, 20);

    // restart raindrops
    if (rainyPos >= screen) {
      rainyPos = 0;
      for (var r = 0; r < raindrops.length; r++) {
        raindrops[r].xPos = Math.floor((Math.random() * screen) + 1);
      }
    }
  };
}