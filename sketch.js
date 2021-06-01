var cat, cat1, cat2, cat3
var mouse, mouse1, mouse2, mouse3
var bg

function preload() {
    //load the images here
    cat1=loadImage("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadAnimation("images/cat4.png")

    mouse1=loadImage("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse3=loadAnimation("images/mouse3.png");

    bg=loadImage("images/garden.png")
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat =createSprite(870, 600, 20, 20)
  cat.addAnimation("cat",cat1);
  cat.scale=0.2;

  mouse =createSprite(200, 600, 20, 20)
  mouse.addAnimation("mouse",mouse1);
  mouse.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("cat",cat3)
    cat.changeAnimation("cat",cat3)

    mouse.addAnimation("mouse",mouse3)
    mouse.changeAnimation("mouse",mouse3)
    }

    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouse",mouse2)
    mouse.changeAnimation("mouse",mouse2)

    cat.addAnimation("cat",cat2)
    cat.changeAnimation("cat",cat2)
    cat.velocityX=-5
}

}
