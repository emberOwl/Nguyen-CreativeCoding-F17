var phases = ["denial", "anger", "bargaining", "guilt", "acceptance"]
var background_colors; 
var font_colors;
var counter = 0;
var api = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5bf4d57afb3bf6371b541ce0380fe0f3&safe_search=2&content_type=4&format=json&nojsoncallback=1&per_page=80&tags=";

var urls = [];

var foo = new p5.Speech();

function preload() {
frameRate(20);
}
 
function setup() {
	background_colors = [color(204, 204, 0), color(255, 0, 0), color(102, 102, 153), color(51, 102, 255), color(102, 255, 102)];
	font_colors = [color(102, 51, 0), color(128, 0, 0), color(51, 51, 153), color(0, 51, 153), color(0, 51, 0)];
	createCanvas(displayWidth, displayHeight);
	
  getTweets();
}

function draw() {
  for (var u = 0; u < urls.length; u++) {
    image(urls[u], Math.floor((Math.random() * displayWidth) + 1),  Math.floor((Math.random() * displayHeight) + 1), 80, 80);
  }

}

function getTweets() {
  console.log("tweet:", phases[counter % phases.length]);
  loadJSON(/tweets/ + phases[counter % phases.length], gotTweets);
  loadJSON(api + phases[counter % phases.length], gotImages);
  background(background_colors[counter % background_colors.length]); 
}

function gotTweets(tweets) {
  for (var i = 0; i < tweets.length; i++) {
    foo.setVoice("Fiona");
    foo.speak(tweets[i].text);
    console.log(tweets[i].text);
  }
}

function gotImages(images) {
  console.log(images.photos.photo.length);
  for (var i = 0; i < images.photos.photo.length; i++) {
    var url = "https://farm"
    url += images.photos.photo[i].farm;
    url += ".staticflickr.com/";
    url += images.photos.photo[i].server;
    url += "/";
    url += images.photos.photo[i].id;
    url += "_"; 
    url += images.photos.photo[i].secret;
    url += ".jpg";
    urls[i] = loadImage(url);
  }
}

function mouseClicked() {
  // next phase
  counter += 1;
  getTweets();
}