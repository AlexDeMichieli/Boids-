class Obstacle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.r = valueSliders.radius;
    }
  
    show() {
        fill(0);
        ellipse(this.x,this.y,this.r)
    }
    
    setPosition(x, y) {
     this.x = x;
      this.y = y;
    }
  }