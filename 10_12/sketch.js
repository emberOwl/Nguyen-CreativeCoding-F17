var myImage;
function preload() {
	myImage = loadImage("bird.jpg");
}

function setup() {
	// create greyish 800 by 800 canvas
  	createCanvas(800, 800);
  	//background(230, 230, 230);
  	noStroke();
  	//image(myImage, 40, 40);
}

function draw() {
	// change background per frame to 'erase' old drawings
	//background(230, 230, 230);
	for(var i = 0; i < myImage.width; i+=5) {
		for(var j = 0; j < myImage.height; j+=5) {
			var myColor = myImage.get(i, j);
			fill(myColor);
			ellipse(i, j, 10, 10);
		}
	}

	


}