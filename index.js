var isUp=false;
var isDown=false;
var speed = 1;
var moving = false;
var score1 = 0;
var score2 = 0;



function setup() {
  createCanvas(400, 400);
  Paddle1 = new Paddle(0, 40, 100, 87, 83)
  Paddle2 = new Paddle(389, 40, 100, 38, 40)
	Ball1 = new Ball(width/2,height/2,30, 2, 2)


}

function draw() {
  background(0);
  textSize(20);
  text('Score: ' + score1, 60,20)
  text('Score: ' + score2, width-60,20)
  stroke(180)
  line(width/2,0,width/2,height)
  if (Paddle1.isUp){
  	Paddle1.y-=5
    if (Paddle1.y <0){
      Paddle1.y+=5
    }
  }
  if(Paddle1.isDown){
  	Paddle1.y+=5
    if (Paddle1.y > height - Paddle1.size){
      Paddle1.y-=5
    }
  }
  if(Paddle2.isUp){
  	Paddle2.y-=5
    if (Paddle2.y <0){
      Paddle2.y+=5
    }
  }
  if (Paddle2.isDown){
  	Paddle2.y+=5
    if (Paddle2.y > height - Paddle2.size){
      Paddle2.y-=5
    }
  }
  Ball1.drawBall()
  if (moving){
  	Ball1.moveBall()
    
  }
  else if (!moving){
  	fill(255,0,0)
    textAlign(CENTER)
    textSize(50)
    text('PAUSED',width/2,height/4)
  }
  Paddle1.drawPaddle()
  Paddle2.drawPaddle()
  
}

class Ball {
  
  constructor(x, y, size, velX, velY){
  this.x = x;
  this.y = y;
  this.size = size;
    this.velX = velX;
    this.velY = velY;
  }
  
  drawBall(){
    fill(255)
    ellipse(this.x,this.y,this.size,this.size)
    
  }
  
  moveBall(){
    this.x += this.velX;
    this.y += this.velY;
 //top wall bounce   
    if (this.y < 0){
     this.velY = -this.velY; 
    }
  //bottom wall bounce
    if (this.y > height -this.size/2){
      this.velY = -this.velY;
    }
    //bounce off paddle
    if (this.x==10 && this.y>Paddle1.y && this.y<Paddle1.y+Paddle2.size){
    	this.velX= -this.velX
    }
    if (this.x==width-10 && this.y>Paddle2.y && this.y<Paddle2.y+Paddle2.size){
    	this.velX= -this.velX
    }
    if (this.x > width+this.size/2 || this.x <0 - this.size/2){
      if (this.x>width+this.size/2){
    	score1++;
    }
    if (this.x<0-this.size/2){
    	score2++;
    }
    this.x = width/2;
      this.y = height/2;
      moving = !moving;
    }
    
  }
}


class Paddle {
  constructor(x, y, size, up, down) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.up = up;
    this.down = down;
    this.isUP=false;
    this.isDown=false;
  }
  drawPaddle() {
    fill(255)
    rect(this.x, this.y, 10, this.size)

  }

}
function setMove(k,b,up1,down1,up2,down2){
    	if(k==up1){
        Paddle1.isUp=b;}
    if (k==up2){
    	Paddle2.isUp=b;
    }
      if(k==down1){
      	Paddle1.isDown=b;
      }
    	if (k==down2){
      	Paddle2.isDown=b;
      }
    }
function keyPressed(){
    	setMove(keyCode,true,Paddle1.up,Paddle1.down,Paddle2.up,Paddle2.down);
    }
function keyReleased(){
    	setMove(keyCode,false,Paddle1.up,Paddle1.down,Paddle2.up,Paddle2.down);
    }
function mousePressed(){
	
  moving= !moving
}
