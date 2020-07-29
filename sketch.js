const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var piggy1,piggy2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,500,70,70);
    box2 = new Box(1000,500,70,70);
    ground = new Ground(600,height,1200,20);
    piggy1 = new Piggy(900,500);
    log1 = new Log(900,450,300,PI/2);
    box3 = new Box(800,400,70,70);
    box4 = new Box(1000,400,70,70);
    piggy2 = new Piggy(900,400);
    log2 = new Log(900,350,300,PI/2);
    box5 = new Box(900,300,70,70);
    log3 = new Log(850,300,150,PI/4);
    log4 = new Log(940,300,150,-PI/3);
    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    piggy1.display();
    piggy2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();    
    bird.display();
}