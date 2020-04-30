const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    castle1 = new CastleFront(280,380,50,50);
    castle2 = new CastleFront(280,370,50,50);
    castle3 = new CastleFront(170,380,50,50);
    castle4 = new CastleFront(180,370,50,50);
    castle5 = new Supports(260,310,110,-PI/7);
    castle6 = new Supports(200,310,110,PI/7);
    castle7 = new Supports(160,380,100,PI/7);
    castle8 = new Supports(310,380,110,-PI/7);
    ground = new Ground(200,390,400,10)
}
function draw(){
    background(0);
    Engine.update(engine);

    castle1.display();
    castle2.display();
    castle3.display();
    castle4.display();
    castle5.display();
    castle6.display();
    castle7.display();
    castle8.display();
    
    ground.display();
}
