const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof
var bob1,bob2,bob3,bob4,bob5
var chain1,chain2,chain3,chain4

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/4,width/7,20)

	bobDiameter = 40

	bob1 = new paper(275,500,70)
	bob2 = new paper(350,500,70)
	bob3 = new paper(425,500,70)
	bob4 = new paper(500,500,70)

	chain1 = new Chain(bob1.body,roof.body,-bobDiameter*2,0)
	chain2 = new Chain(bob2.body,roof.body,-bobDiameter*1,0)
	chain3 = new Chain(bob3.body,roof.body,0,0)
	chain4 = new Chain(bob4.body,roof.body,bobDiameter*1,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

  roof.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()

  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  
  drawSprites();
  keyPressed()
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-85});
  
	}
}
