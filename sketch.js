const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var heroBody,heroImg1,heroImg2,heroObj
var box1, box2, box3,box4,box5,box6,box7,box8;
var hero,monster,rope,ground;

function preload() {
  var rand=Math.round(random(1,2))
  console.log(rand)
  switch(rand){
    case 1:bg=loadImage("gamingbackground1.jpg")
    break;
    case 2:bg=loadImage("gamingbackground2.png")
    break;
    defaultBreak();
  }
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;


 
 

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(890, 100, 70, 70);
  box3 = new Box(740, 100, 70, 70);
  box4 = new Box(600, 100, 70, 70);
  box5 = new Box(890, 100, 70, 70);
  box6 = new Box(740, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(890, 100, 70, 70);
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
 
  hero.display();
  // hero.image();
  rope.display();
  monster.display();
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.fly()

}
