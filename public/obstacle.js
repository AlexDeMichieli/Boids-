class Obstacle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.r = 50;
    }
  
    show() {
        fill(0);
        stroke(255);
        ellipse(this.x,this.y,this.r)
    }
    
    setPosition(x, y) {
     this.x = x;
      this.y = y;
    }
  }