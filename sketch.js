var ball,ground,log;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800,400);

	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

    //Create a Ground
	ground = new Ground(400,380,900,20);

	dustbin1=new Dustbin(595,300,20,140);

	dustbin2=new Dustbin(655,362,100,18);

	dustbin3=new Dustbin(715,300,20,140);



	ball=new Ball(80,200);

	slingshot=new SlingShot(ball.body,{x:80,y:200});

	Engine.run(engine);
  }


function draw() {
   background("grey");
	ball.display();
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	slingshot.display();
}

function mouseDragged(){
	// if (gameState!=="launched"){
		 Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
	 //}
 }
 
 
 function mouseReleased(){
	 slingshot.fly();
	 gameState = "launched";
 }
