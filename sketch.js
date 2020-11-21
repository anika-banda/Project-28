
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stoneObj;
var mango1, mango2,mango3,mango4,mango5,mangoIMG;
var treeObj,treeIMG;
var boyIMG,boy;
var launcherObj;
function preload()
{
	mangoIMG = loadImage("mango.png");
	treeIMG = loadImage("tree.png");
	boyIMG = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
	stoneObj = new Stone(235,420,30);
	treeObj = new tree(200,300,400,50);
	mango1  = new mango(200,450,40);
	mango2 = new mango(250,350,40);
	mango3 = new mango(230,400,50);
	mango4 = new mango(340,500,50);
	mango5 = new mango(320,400,50);
	boy = createSprite(200,300,stone.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

   detectcollision(stoneObj,mango1);
   detectcollision(stoneObj,mango2);
   detectcollision(stoneObj,mango3);
   detectcollision(stoneObj,mango4);
   detectcollision(stoneObj,mango5);

  stoneObj.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.body.setPosition(stone.body,{x:mouseX,y:mouseY})
}


function mouseReleased(){
    stone.fly();

}
function keyPressed(){
	if(keyCode ===32){
		Matter.Body.setPosition(stoneObj.body,{x:235, y:420})
		launcherObject.attache(stoneObj.body);
	}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r*lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
}