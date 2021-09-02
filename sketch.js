var ball
function setup() {
  createCanvas(400,400);
ball=createSprite(200,200,15,15)

}

function draw() 
{
  
  background(30);
if(keyIsDown(RIGHT_KEY)){
ball.position.x=ball.position.x+5

}
if(keyIsDown(LEFT_KEY)){
  ball.position.x=ball.position.x-5
  
  }
drawSprites();
}




