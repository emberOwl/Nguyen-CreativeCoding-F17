// Where is the circle
var asteroids_array = [];

function preload() {
  // Request
  var url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-11-08&end_date=2017-11-13&api_key=8XOf6TrZrMyuGNbxvNM5K43yKr6ETKVWzsiVfWwW';
  asteroids = loadJSON(url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("assets/earth.png");
  var count = 0;
	for (var i = 0; i < Object.keys(asteroids.near_earth_objects).length; i++) {
		var date = Object.keys(asteroids.near_earth_objects)[i];

		for (var j = 0; j < asteroids.near_earth_objects[date].length; j ++) {
			asteroids_array[count] = new Asteroid(asteroids.near_earth_objects[date][j]['name'], asteroids.near_earth_objects[date][j]['is_potentially_hazardous_asteroid'], asteroids.near_earth_objects[date][j]['estimated_diameter']['kilometers']['estimated_diameter_max'], date, asteroids.near_earth_objects[date][j]['absolute_magnitude_h']);
			count += 1;
		}
	}
}

function draw() {
	background(6, 33, 76);
	image(img, -img.width/4, 0, img.width/2, img.height/2);
	for (var a = 0; a < asteroids_array.length; a++) {
	  	asteroids_array[a].animate();
	  	asteroids_array[a].display();
	}
}


function Asteroid(name, danger, diameter, date, distance) {
	// api data
	this.name = name;
	this.dangerous = danger;
	this.size = diameter;
	this.date = date;
	this.x = windowWidth - (distance * 20);
	// created
	this.color = color(40, 40, 40);
	this.velocity = 0.05;
	this.y = Math.floor((Math.random() * windowHeight) + 1);;

	// created data
	if (this.dangerous == true) {
		this.color = color(255, 0, 0);
	}

	this.animate = function() {
		// Jiggling 
		this.y = this.y + random(-1, 1);
		// Moving 
		this.x = this.x - this.velocity;
		//console.log(this.x);
		// Reset 
		if (this.x < 0) {
			this.x = windowWidth;
		}
	}

	this.display = function() {
		textSize(8);
		fill(255, 255, 255);
		text(this.name, this.x - this.size/2, this.y - (this.size * 20) - 2);
		fill(this.color);
		ellipse(this.x, this.y, this.size * 20, this.size * 20);
	}
}