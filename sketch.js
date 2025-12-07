let images = [];
let currentImage;
let numImages = 23; 

function preload() {
  
  for (let i = 1; i <= numImages; i++) {
    images.push(loadImage("images/" + i + '.png'));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
 
  currentImage = random(images);
}

function draw() {
  background(220);
  if (currentImage) {
    image(currentImage, width/2, height/2, currentImage.width/2, currentImage.height/2);
  }
}

function mousePressed() {
  
  currentImage = random(images);
}