var randomColor = ["#4ECDA4", "#FEFE03", "#2327AC"];
var phrase = ["加油", "加油", "加油", "ga jau", "ga jau", "ga you", "ga you", "add oil", "add oil", "add oil", "you can do it!", "keep going!", " ★", "go for it!", "i'm rooting for you!", " ★", "let's go!", "don't give up!", " ★"]; 
// evolves from chinese character -> english translation
var index = 0;

function preload() {
  soundFormats('mp3');
  stamp = loadSound("rubberstamp.mp3"); // new rubber stamp sound effect
}

function setup() {
  createCanvas(windowWidth, 550);
  background("#CFD7DA");
  textSize(75);
  textAlign(CENTER);
  frameRate(50);
  stamp.setVolume(0.05);
}

function mousePressed() {
  rColor = randomColor[floor(random(randomColor.length))];
  var angle = random(-0.2, 0.2); // rotate the text slightly, to give stamp effect
  push();
  translate(mouseX, mouseY);
  rotate(angle);
  fill(rColor);
  textSize(65)
  text(phrase[index], 0, 0);
  pop();
  stamp.play();
  index = (index + 1) % phrase.length; // go to the next word                                             the array
}



//sources
// project 4 - sketch 1
// by miacruz
// https://editor.p5js.org/miacruz/sketches/BRF18yQfd