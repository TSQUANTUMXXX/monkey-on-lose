
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivaltime;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  FoodGroup = new Group();
  obstacleGroup = new Group();
 
}


 
function setup() {
  createCanvas(800,600);
monkey = createSprite(80,345,20,20);
 monkey.addAnimation("running", monkey_running); 
monkey.scale = 0.1;
 
  ground = createSprite(400,350,1000,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  score = 0;
  survivaltime = 0;
}


function draw() {
background("white");
   monkey.velocityY = 5;
  if(ground.x<300){
    ground.x = 400;
  }
  if (keyDown("space") && monkey.y>300) {
   monkey.velocityY = -225;
  }
    monkey.collide(ground)
  spawnfruits();
  spawnobstacles();
  stroke("white");
  textSize(20);
  fill("blue");
  text("score:" + score,500,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivaltime,100,50);
  drawSprites();
  
}





function spawnfruits(){
  if(World.frameCount %80 === 0){
    banana = createSprite(700,60,20,20)
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.y = Math.round(random(120,200))
  banana.velocityX = -4;
  banana.lifetime = 180;
  FoodGroup.add(banana);
  }
}
function spawnobstacles(){
  if(World.frameCount %300 === 0){
    rock = createSprite(700,315,50,50)
    rock.addImage(obstacleImage);
    rock.scale = 0.2;
    rock.velocityX = -6;
    rock.liftime = 120;
    obstacleGroup.add(rock);
  
  }
    
}
