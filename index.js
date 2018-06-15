function setup() {
  createCanvas(400, 400);
  Paddle1 = new Paddle(0, 40, 50,119,115)
  Paddle2 = new Paddle(390,40,50,38,40)
  Ball1 = new Ball(width/2,height/2,30)


}

function draw() {
  background(0)
  stroke(180)
  line(width/2, 0, width/2, height)
  Ball1.drawBall()
  Paddle1.drawPaddle()
  Paddle1.motion()
  Paddle2.drawPaddle()
  Paddle2.motion()
}

class Ball{
constructor (x, y, size){
this.x = x;
this.y = y;
this.size = size;}
drawBall(){
  fill(255)
  ellipse(this.x,this.y,this.size,this.size)
  }
}


class Paddle {
  constructor(x, y, size,up,down) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.up = up;
    this.down = down;
  }
  drawPaddle() {
    fill(255)
    rect(this.x, this.y, 10, this.size)

  }
  motion() {// Doesn't move two paddles individually
    console.log(keyCode)
    if (keyIsPressed === true) {
      console.log(keyCode)
      
    
      if (keyCode == this.up) {
        this.y-=5
        if (this.y <= 0){
        	this.y+=5
        }
      } else if (keyCode == this.down) {
        this.y+=5
        if (this.y>= height-this.size){
        	this.y-=5
        }
      }
    }

  }
}
