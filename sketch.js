
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	bob3 = new bob (350,575,40)
	bob4 = new bob (370,575,40)
	bob5 = new bob (380,575,40)
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope (bob3.body,roofObject.body,-90,0)
	rope4=new rope (bob4.body,roofObject.body,-69,0)
	rope5=new rope (bob5.body,roofObject.body,-50,0)
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();

  bob1.display();
  bob2.display();
  
  
 
}

function keyPressed(){
if (keyCode === UP_ARROW){

	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
}
}
 
if (keyCode === DOWN_ARROW){

	Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-55,y:-50});
}

if (keyCode === LEFT_ARROW){

	Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-60,y:-55});

}

if (keyCode === RIGHT_ARROW){

	Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:-65,y:-60});
}


