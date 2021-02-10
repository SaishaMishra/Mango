
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


var treeObj, stone1,groundObject, launcherObject;
var mango1;
var world,boy;
var slingshot1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1050,130,30);
	mango2=new mango(1000,120,30);
	mango3=new mango(980,150,30);
	mango4=new mango(1110,75,30);
	mango5=new mango(1150,155,30);
	stone1=new stone(300,450, 40);
	slingshot1=new SlingShot(stone1.body,{x:290,y:430});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
//	Engine.run(engine);

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
  Render.run(render);
}

function draw() {

  background(230);
  
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  slingshot1.display();

  groundObject.display();

  detectcollision(stone1, mango1);
  detectcollision(stone1, mango2);
  detectcollision(stone1, mango3);
  detectcollision(stone1, mango4);
  detectcollision(stone1, mango5);
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	slingshot1.fly();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}

	
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position 
	
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
	console.log(dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y));
    if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}