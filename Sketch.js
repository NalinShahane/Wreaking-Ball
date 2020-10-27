const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var Box1 , Box2 , Box3 , Box4;
var ball;
var Ropee;
function setup()
{
    createCanvas(1000,400);
   engine = Engine.create();
   world = engine.world;

   ground = new Ground (500,380,1000,20);

   Box1 = new Box (700,300,60,100);
   Box2 = new Box (700,310,60,100);
   Box3 = new Box (700,310,60,100);
   Box4 = new Box (700,310,60,100);

   ball = new Ball (200 , 200 , 50);
  Ropee = new Rope(ball.body ,{x:100 , y:100} );


}

function draw () 
{
    background("black");
    Engine.update(engine);

    ground.display();
    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    ball.display();
    Ropee.display();

}

function mouseDragged() {
    Matter.Body.setPosition(ball.body , {x:mouseX , y:mouseY } );
}