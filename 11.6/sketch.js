var restaurant_array = ["McDonald's", "Wendy's", "Burger King", "Chipotle", "Dunkin Donuts", "White Castle", "KFC", "Taco Bell", "IHOP"];
var url;
var counter = 0;
var page = 0;
var color_num = 0;
var mail;
var font;

function preload() {
	mail = loadSound("assets/youGotMail.mp3");
	font = loadFont("assets/Georgia.ttf");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0, 0, 0, 90);
	url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=b1c9c65cf6254a6ab3789628d0870491&fq=headline:(\"";
	setInterval(loadData, 1500);
}

function draw() {
}

function loadData() {
	page = Math.floor(counter / restaurant_array.length) % 100;
	loadJSON(url + restaurant_array[counter % restaurant_array.length] + "\")" + "&page=" + page, displayData);
	console.log(url + restaurant_array[counter % restaurant_array.length] + "\")" + "&page=" + page);
	counter += 1;
}

function displayData(data) {
	
	for (var i = 0; i < data['response']['docs'].length; i++) {
		textSize(Math.floor((Math.random() * 50) + 1));
		fill((255 - color_num) % 256, (255 - color_num) % 256, (255 - color_num) % 256, 240);
		textFont(font);
		text(data['response']['docs'][i]['headline']['main'], Math.floor((Math.random() * windowWidth) + 1), Math.floor((Math.random() * windowHeight) + 1));
	}
	mail.play();
	color_num += 30;
	background(color_num % 256, color_num % 256, color_num % 256, 90);
}