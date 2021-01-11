
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var ground, rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1= new bob(300,650,30)
  bob2= new bob(350,650,30)
  bob3=new bob (400,650,30)
  bob4= new bob(450,650,30)
  bob5= new bob(500,650,30)
  ground= new Ground(400,100,800,20)
  rope1=new Rope(bob1.body,{x:300,y:100})
  rope2=new Rope(bob2.body,{x:350,y:100})
  rope3=new Rope(bob3.body,{x:400,y:100})
  rope4=new Rope(bob4.body,{x:450,y:100})
  rope5=new Rope(bob5.body,{x:500,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ground.display()
 bob1.display()
 bob2.display()
 
 
 rope1.displayShow()
 rope2.displayShow()
 bob3.display()
 rope3.displayShow()
 bob4.display()
 rope4.displayShow()
 bob5.display()
 rope5.displayShow()

}


function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}
