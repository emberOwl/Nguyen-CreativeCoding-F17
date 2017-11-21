var bubbles = [];
var maxBubble = 0;
var gameOver = false;
 
function setup() {
	maxBubble = (displayHeight > displayWidth) ? displayHeight : displayWidth;
    createCanvas(displayWidth,displayHeight);
    for (var i = 0; i < 20; i++) {
        bubbles.push(new Bubble(color(random(255), random(255), random(255)), random(10, 30)));
    }
}
 
function draw() {
    background(244, 66, 140);
    if (gameOver) {
    	textSize(60);
    	fill(255, 0, 0);
    	textAlign(CENTER);
		text("You lose!", displayWidth/2, displayHeight/2);
	}
	else {
	    for (var i = 0; i < bubbles.length; i++) {
	        bubbles[i].show();
	        if(bubbles[i].bubbleSize >= maxBubble) {
	        	gameOver = true;
	        }
	    }
	    bubbles.push(new Bubble(color(random(255), random(255), random(255)), random(10, 30)));
	}
}
 
function mousePressed() {
    for (var i = 0; i < bubbles.length; i++) {
        if (bubbles[i].bubbleHover == true) {
            bubbles[i].locked = true;
        } 
        else {
            bubbles[i].locked = false;
        }
        bubbles[i].xOffset = mouseX - bubbles[i].xPos;
        bubbles[i].yOffset = mouseY - bubbles[i].yPos;
    }
    return false;
}
 
function mouseDragged() {
    for (var i = 0; i < bubbles.length; i++) {
        if (bubbles[i].locked) {
            bubbles[i].xPos = mouseX - bubbles[i].xOffset;
            bubbles[i].yPos = mouseY - bubbles[i].yOffset;
        }
    }
}
 
function mouseReleased() {
    // if any bubbles overlap, combine
    for (var i = 0; i < bubbles.length; i++) {
    	for (var j = 0; j < bubbles.length; j++) {
    		if ((bubbles[i].xPos > bubbles[j].xPos - bubbles[j].xOffset) && (bubbles[i].xPos < bubbles[j].xPos + bubbles[j].xOffset) &&
    		   (bubbles[i].yPos > bubbles[j].yPos - bubbles[j].yOffset) && (bubbles[i].yPos < bubbles[j].yPos + bubbles[j].yOffset)) {
    		   	// create new size
    		   	var newSize = bubbles[i].bubbleSize + bubbles[j].bubbleSize;
    			// remove both objects
    			bubbles.splice(i,1);
    			bubbles.splice(j,1);
    			// insert new bigger object at mouse
    			bubbles.push(new Bubble(color(random(255), random(255), random(255)), newSize, mouseX, mouseY));
    		}
    	}
    }

    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].locked = false;
    }
}
 
function Bubble(bubbleColor, bubbleSize, xPos=random(width), yPos=random(height)) {
    this.bubbleColor = bubbleColor;
    this.bubbleSize = bubbleSize;

    // let them become default positions if not set
    this.xPos = xPos;
    this.yPos = yPos;
   
    this.bubbleHover = false;
    this.locked = false;
    this.xOffset = 0;
    this.yOffset = 0;
 
    this.show = function() {
    	noStroke();
 
        if ((mouseX > this.xPos - this.bubbleSize) && (mouseX < this.xPos + this.bubbleSize) &&
            (mouseY > this.yPos - this.bubbleSize) && (mouseY < this.yPos + this.bubbleSize)) {
            this.bubbleHover = true;
        } 
        else {
            this.bubbleHover = false;
        }
        fill(this.bubbleColor);
        ellipse(this.xPos, this.yPos, this.bubbleSize, this.bubbleSize, 7);
    };
}