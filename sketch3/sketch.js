let fonts = [];
let imgs = [];
let letters = [];
let hintText = 255;
let hintStartTime;


function preload() {
  fonts[0] = loadFont("Helvetica.ttf");
  imgs[0] = loadImage("yeethay.svg");
}

function setup() {
  createCanvas(windowWidth, 550);
  angleMode(DEGREES);
  hintStartTime = millis();
  
}

function draw() {
  background("#CFD7DA");
  let elapsed = millis() - hintStartTime;
if (elapsed < 4000) {
  if (elapsed > 3000) {
    hintText = map(elapsed, 3000, 2000, 255, 0);
  }
  textFont(fonts[0]);
  textSize(18);
  textAlign(CENTER, CENTER);
  fill(35, 39, 172, hintText);
  noStroke();
  text("hold and drag", width / 2, height / 2);
}

  for (let i=letters.length-1; i >= 0; i--) {
    letters[i].update();
    letters[i].display();
    
    if (letters[i].offScreen() == true) {
      letters.splice(i, 1);
    }
  }
  
}

function mouseDragged() {
  letters.push(new Letter(mouseX, mouseY));
}

// sources
// Interactive Floating Typography
// Coding Tutorial by Patt Vira
// https://youtu.be/-6v_AYyn49k
// claude was used to replace chinese characters with .svg because p5.js does not support chinese traditional fonts
// since p5.js does not support chinese images, i want to replace the characters "熱氣" in the letter array with the image "yeethay.svg"