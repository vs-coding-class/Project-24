var paper,wastebinSide1,wastebinSide2,wastebinBottom;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new paperBall();
	wastebinSide1 = new wastebin(665,650,10,100);
	wastebinSide2 = new wastebin(735,650,10,100);
	wasterbinBottom = new wastebin(700,690,20,50);

	paper.display();
	wastebinSide1.display();
	wastebinSide2.display();
	wastebinBottom.display();

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect(ground.position.x,ground.position.y,width,10);
  
  drawSprites();
}

function launch(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



