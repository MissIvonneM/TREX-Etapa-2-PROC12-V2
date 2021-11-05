
// Actividad Completa TREX Etapa 3
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudImage, cloudGroup;   
 

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage=loadImage("cloud.png");       
}


function setup() {

  createCanvas(600,200)
  
  //crea el sprite del Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crea el sprite del suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.velocityX = -4;
  
  //crea el suelo invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
             
  
}

function draw() {
  //establece el color del fondo
  background(150);
                
  //console.log(trex.y);                      

  
  //salta cuando se presiona la barra espaciadora
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //evita que el Trex caiga
  trex.collide(invisibleGround);

  
  //aparecen las nubes
  spawnClouds();                          
  
  drawSprites();
  
}

function spawnClouds(){                  
  //escribe el código ára que aparezcan las nubes
  if(frameCount %60 === 0){                
    cloud=createSprite(600,100,40,10);     
    cloud.addImage(cloudImage);           
    cloud.y=Math.round(random(10,100));     
    cloud.scale = 0.5;                     
    cloud.velocityX=-3;                    
    
    //ajustar la profundidad de las nubes          
    cloud.depth=trex.depth;              
    trex.depth=trex.depth+1;             
    
  }  
}


