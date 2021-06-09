const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Constraint = Matter.Constraint;

var bg, kidImg, dogImg1, snow1Img, snow2Img;
var kid, dog;
var snow = [];
var maxSnow = 10;
var snowSpr, snowBody;

function preload()
{
   bg = loadImage("snow3.jpg");

   kidImg = loadImage("kid.png");
   dogImg1 = loadImage("doggy.png");

   snow1Img = loadImage("snow4.webp");
   snow2Img = loadImage("snow5.webp");

}

function setup() 
{
  createCanvas(1200,650);
  

  engine = Engine.create();
  world = engine.world;

  dog = createSprite(780, 550, 50, 50);
  dog.addImage("k", dogImg1);
  dog.scale = 0.18;

  kid = createSprite(600, 470, 50,50);
  kid.addImage("j", kidImg);
  kid.scale = 0.25;

  if(frameCount%180 === 0)
  {
      for(var i=0; i<maxSnow; i++)
      {
        snow.push(snowBody = new Snow(random(0,1200), random(-50, 600)));
      } 
  }  
  

  

  Engine.run(engine);
  
}

function draw() 
{
  background(bg); 
  Engine.update(engine);
  textSize(60)
  stroke("yellow")
  fill("yellow")
  text("Press left & right arrow key",100,100)
  
  
  

    if(keyWentDown("right_arrow"))
    {
      kid.velocityX = 5;
      dog.velocityX = 5
    }else if(keyWentUp("right_arrow"))
    {
      kid.velocityX = 0;
      dog.velocityX = 0;
    }

    if(keyWentDown("left_arrow"))
    {
      kid.velocityX = -5;
      dog.velocityX = -5;
    }else if(keyWentUp("left_arrow"))
    {
      kid.velocityX = 0;
      dog.velocityX = 0;
    }

    
    
      for(var i=0; i<maxSnow; i++)
      {
        snow[i].display();
        snow[i].repeat();
      }
    
  
      if(frameCount%180 === 0)
      {
        for(var i=0; i<maxSnow; i++)
        {
          snow[i].repeat();
        }
      }

   

  drawSprites();
}

function snowfall()
{
  if(frameCount%5===0)
  {
    snowSpr = createSprite(random(0,1200), random(-10, 0));
    snowSpr.addImage("k", snow1Img);
    snowSpr.velocityY = 3;
    snowSpr.scale = 0.1;

    if(snowSpr.y > 650)
    {
      snowSpr.y = random(0,650);
    }
  }

}


