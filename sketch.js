var canvas;
var music;
var rect1, rect2, rect3, rect4, box;
var edge1, edge2,edge3,edge4;

function preload(){
music = loadSound("music.mp3");
}


function setup(){
canvas = createCanvas(600,600);

rect1 = createSprite(30,580,40,50);
rect1.shapeColor = ("red");

rect2 = createSprite(150,590,150,20);
rect2.shapeColor = ("blue");

rect3 = createSprite(280,580, 30,70);
rect3.shapeColor = ("green");

rect4 = createSprite(430,590,200,30);
rect4.shapeColor = ("yellow");

box = createSprite(430,20,20,20);
box.shapeColor = ("white");
box.velocityX = 4;
box.velocityY = 4;
box.x = (random(20,750));

}

function draw() {
background(rgb(169,169,169));

edge1 = createSprite(600,20,10,1500);
box.bounceOff(edge1);

edge2 = createSprite(1,20,10,1500);
box.bounceOff(edge2);

edge3 = createSprite(10,3,1200,10);
box.bounceOff(edge3);

edge4 = createSprite(10,600,1200,10);
box.bounceOff(edge4);


if(box.isTouching(rect1)){
box.collide(rect1);
box.velocityX=0;
box.velocityY=0;
box.shapeColor = ("red");
music.play();
}

if(box.isTouching(rect2)){
box.collide(rect2);
box.velocityX=0;
box.velocityY=0;
box.shapeColor = ("blue");
music.play();
}

if(box.isTouching(rect3)){
box.collide(rect3);
box.velocityX=0;
box.velocityY=0;
box.shapeColor = ("green");
music.play();
}

if(box.isTouching(rect4)){
box.collide(rect4);
box.velocityX=0;
box.velocityY=0;
box.shapeColor = ("yellow");
music.play();
}




    drawSprites();
}
