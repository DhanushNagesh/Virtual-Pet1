var dog,Dog,happyDog
var database
var foodS,foodStock
var food = 20
dogMode = 1

function preload()
{
  Dog=loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}




function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}
function readStock(data){
  foodS = data.val();
}
function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,30,30)
  dog.addImage(Dog)
  dog.scale = 0.2
  foodStock = database.ref('food')
  foodStock.on("value",readStock)
  
}


function draw() {  

  background(46, 139, 87);
  textSize(20)
  fill("white")
  text("food left: "+food, 50,200)
  fill("white")
  textSize(20)
  text("Press Up Arrow to Feed Your Dog! ", 100,100)
 
  if(keyWentDown(UP_ARROW)&&food>0&&dogMode === 1){
    dog.addImage(happyDog);
   // writeStock(foodS)
   food = food-1
   dogMode = 2
  }

  if(frameCount%120 === 0){
    dog.addImage(Dog)
    dogMode = 1
  }
  drawSprites();
  textSize(15)
  text("Note: Press Up Arrow to Feed the Dog!")

}




