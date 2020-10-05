var personIMG
var drop, dropGroup
var  thunderIMG
var  ground
//const Bodies = Matter.Bodies;
//const World = Matter.World;


function preload(){
   personIMG = loadImage( "walking_1.png");
   
    thunderIMG = loadImage("1.png")
    thunderIMG2 = loadImage("2.png")
    thunderIMG3 = loadImage("3.png")
    thunderIMG4 = loadImage("4.png");


    }

function setup(){
    createCanvas(900,800)

    person = createSprite(500,630,50,50);
    person.addImage(personIMG);
    person.scale = 0.5
  
    ground = createSprite(500,805,1200,25);
    ground.shapeColor = "purple";
    ground.scale = 0.9;

   
    


    
   
    
}

function draw(){
    rectMode(CENTER);
    background(0);

    spawnThunder();
    spawnDrop();
    

 
    drawSprites();
    
}   

function spawnThunder(){
    if(frameCount % 60 === 0){
        thunder1 = createSprite(400,50,100,100);
        thunder1.addImage(thunderIMG);
        thunder1.lifetime = 25;
         }
       if(frameCount % 120 === 60){
        thunder2 = createSprite(400,50,100,100);
        thunder2.addImage(thunderIMG2);
        thunder1.visible = false;
        thunder2.lifetime = 25;
        if(frameCount % 180 === 0){
            thunder3 = createSprite(400,50,100,100);
            thunder3.addImage(thunderIMG3);
            thunder3.lifetime = 25;
        }
           
       }  

   
    


    }


function spawnDrop(){
    if(frameCount % 0.5 === 0){
        
        drop = createSprite(15,25,5,5);
        drop.shapeColor = "white"
        drop.velocityY = 15;
        drop.scale = 0.5;
        drop.y = random(10-20);
        drop.x = random(10,800);
        drop.lifetime = 300;
        console.log(drop.x);
        //dropGroup.add(drop);
        
    }
}



