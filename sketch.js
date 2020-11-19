const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,paperObject,groundObject,dustbinObject;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600,900);
   rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    
	dustbinObject=new Bin(950,510,200,200);
	paperObject=new Paper(200,450,70);
	groundObject=new ground(width/2,620,width,20);
	//bin1=createSprite(1050,500,20,200);
	//bin2=createSprite(870,500,20,200);
	//bin3=createSprite(960,600,200,20);
	
	

	Engine.run(engine);
  
}


function draw() {
	background('white');
	rectMode(CENTER);
	groundObject.display();
  paperObject.display();
  dustbinObject.display();
  
  //bin1.display();
  //bin2.display();
  //bin3.display();
  
  
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-185})
	}
}