var randomColor = ["#4ECDA4", "#FEFE03", "#2327AC"];
class Letter {
  constructor(x, y) {
    this.alphabets = ["__img__", "__img__", "__img__", "yit hei","yeet hay", "hot air", "heatiness", "imbalance", "spicy", "greasy", "fried"];
    this.letter = random(this.alphabets);
    this.f = random(fonts);
    this.size = random(10, 30);
    
    this.x = x;
    this.y = y
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.color = random(randomColor); 
    this.angle = random(360);
    this.angleV = random(1, 3);
  
  }
  
  update() {
    this.x += this.dx;
    this.y += this.dy;
    
    this.angle += this.angleV;
    
  }
  
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    if (this.letter === "__img__") {
      if (this.letter === "__img__") {
  let aspectRatio = imgs[0].width / imgs[0].height;
  let imgH = this.size * 3;
  let imgW = imgH * aspectRatio;
  imageMode(CENTER);
  tint(this.color);
  image(imgs[0], 0, 0, imgW, imgH);
  noTint();
}
    } else {
      textFont(this.f);
      textSize(this.size);
      fill(this.color);
      text(this.letter, 0, 0);
    }
    pop();
  }
  
  offScreen() {
    let margin = this.size * 2;
    if (this.x > width + margin  || this.x < 0 - margin || this.y > height + margin || this.y < 0 - margin) {
      return true;
    } else {
      return false;
    }
  }
}