
//INITIALIZATION--------------------------------------------------------------------------------------------------------

let canvasIntro = document.getElementById('canvas-intro')
let canvasWin = document.getElementById('canvas-win')
let startBtn = document.getElementById("start-button")
let restartBtn=document.getElementById('restart-btn')
let gameClick =document.getElementById('game-click')
let hiddenBtnA = document.getElementById("hiddenBtnP6A")
let hiddenBtnB = document.getElementById("hiddenBtnP6B")
let PLOSE = document.getElementById("P-LOSE")
let canvasDiv = document.getElementById('cnv-and-btn-div')
let canvasBtnDiv=document.getElementById('canvas-btns')
let gameResult = '';
// let isGameOn = false

//-----------------------------------------------------------------------------------------------------------------------

const img = new Image();
img.src = './IMAGES/6. UNDER-ICE.png';

const img2 = new Image();
img2.src = './IMAGES/6b. killer-whale-transparent-9.png'

const img3 = new Image();
img3.src = './IMAGES/6c. EXPLOSION.png'

let img4= new Image();
img4.src=''

//-----------------------------------------------------------------------------------------------------------------------

const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

//BACKGROUND ANIMATION----------------------------------------------------------------------------------------------------

const backgroundImage = {
  img: img,
  x: 0,
  y:0,
  speed: +1,
  move: function() {
    this.x -= this.speed;
   this.x %= canvas.width
  },
  drawImg: function() {
    ctx.drawImage(this.img, this.x, this.y, canvas.width,canvas.height);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x - canvas.width,0);
    } else {
      ctx.drawImage(this.img, this.x + canvas.width, 0 );
    }
  },
  clearImg:function(){
    ctx.drawImage(img4,this.x,this.y,canvas.width,canvas.height)
  }
};

//BIRD AND OBSTACLE CONSTRUCTOR-----------------------------------------------------------------------------------------------

const img1 = new Image();
img1.src = './IMAGES/6a. Penguin.png';

class Component {
  constructor(width, height, fill, x, y, speedX, speedY, gravity, gravitySpeed) {
    this.width = width;
    this.height = height;
    this.fill = fill;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.gravity=gravity;
    this.gravitySpeed=gravitySpeed;
  }
  move(){
    this.gravitySpeed += this.gravity;
    this.x+=this.speedX;
    this.y+=this.speedY+this.gravitySpeed;
  }
  newPos(){
    this.x+=this.speedX;
    this.y+=this.speedY;
  }
  drawImg(){
    ctx.drawImage(this.fill, this.x, this.y, this.width, this.height); 
  }
  updateDrawing(){
    ctx.fillStyle=this.fill
    ctx.fillRect(this.x, this.y, this.width, this.height)  
  }
  clearImg(){
    ctx.drawImage(img4,this.x,this.y,this.width,this.height)
  } 
  clearDrawing(){
    ctx.clearRect(this.x,this.y,this.width,this.height)
  }
  left() {
      return this.x;
  }
  right() { 
      return this.x + this.width; 
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }  
  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top()+10 || 
    this.top() > obstacle.bottom()-40 || 
    this.right() < obstacle.left()+10 || 
    this.left() > obstacle.right()-10);
    }
  hitBottom(){
    let rockbottom = canvas.height - this.width;
      if (this.y > rockbottom) {
        this.y = rockbottom;
      }
  }
}

//-----------------------------------------------------------------------------------------------------------------------

const newBird = new Component(60, 60, img1,50, 100, 0, 0, 0.04, 0);

//-----------------------------------------------------------------------------------------------------------------------

let obsWidth, obsHeight, obsPosX, obsPosY, obsSpeedX, obsSpeedY

obsWidth = 120  
obsHeight = 80
obsPosX=canvas.width
obsPosY=Math.floor(Math.random()*canvas.height)
obsSpeedX=-1.2
obsSpeedY=-0.2   

//-----------------------------------------------------------------------------------------------------------------------

let topObstacleArr = []

for (let i=0;i<5;i++){ 
  topObstacleArr.push(
  new Component(obsWidth, obsHeight, img2, obsPosX+(i*400), 0, obsSpeedX, obsSpeedY*-1.2, 0, 0)
  )
  topObstacleArr.push(
    new Component(obsWidth, obsHeight, img2, obsPosX+((i*400)+2000), 0, obsSpeedX+0.4, obsSpeedY*-1.4, 0, 0)
  )
  
}

//-----------------------------------------------------------------------------------------------------------------------

let bottomObstacleArr=[]

for (let i=0;i<5;i++){

  bottomObstacleArr.push(
   new Component (obsWidth, obsHeight, img2, obsPosX+(i*400), canvas.height, obsSpeedX, obsSpeedY, 0, 0)
  )
  bottomObstacleArr.push(
   new Component (obsWidth, obsHeight, img2, obsPosX+((i*400)+2000), canvas.height, obsSpeedX+0.8, obsSpeedY*0.8, 0, 0)
  )
 
}

//-----------------------------------------------------------------------------------------------------------------------

let finishingLine = new Component (30, canvas.height, "grey", 2500, 0, obsSpeedX, 0, 0, 0)

//FUNCTIONS---------------------------------------------------------------------------------------------------------------

function updateCanvas() {

  backgroundImage.move();
  backgroundImage.drawImg();
  requestAnimationFrame(updateCanvas);

}
    
//-----------------------------------------------------------------------------------------------------------------------

function updateNewBird(){

  newBird.move()  
  newBird.drawImg()
  requestAnimationFrame(updateNewBird)

}

//-----------------------------------------------------------------------------------------------------------------------

function updateNewObstacles(){

    finishingLine.newPos()
    finishingLine.updateDrawing()

    for(let item of topObstacleArr){
        item.newPos()
        item.drawImg()
        
    }
    for(let item of bottomObstacleArr){
        item.newPos()
        item.drawImg()
        
    }
    checkGameOver()
  requestAnimationFrame(updateNewObstacles);

}

//-----------------------------------------------------------------------------------------------------------------------

function startGame() { 
    
  updateCanvas()
  updateNewBird()
  updateNewObstacles()
  checkGameOver()

}

//-----------------------------------------------------------------------------------------------------------------------

function stopGame(){

  backgroundImage.speed=0
  finishingLine.speedX=0
  newBird.speedY=0
  newBird.gravity=0
  newBird.gravitySpeed=0

  for(let element of topObstacleArr){
    element.speedX=0
    element.speedY=0
  }
  for(let element of bottomObstacleArr){
    element.speedX=0
    element.speedY=0
  }
  
}  

//-----------------------------------------------------------------------------------------------------------------------

function checkGameOver(){ 

  let currentScore= parseFloat(pointsArray[0].innerHTML)

    if ((newBird.y+newBird.height>=canvas.height) || newBird.y<0) {
        newBird.hitBottom()
        newBird.fill= img3
        gameResult='lose'
        stopGame()
        setTimeout(function(){
            updateScore("side",currentScore)
            P6.style.display='none'
            PLOSE.style.display='flex'
        },500)
    }

    else if ((newBird.y+newBird.height<canvas.height) || newBird.y>0) {
        for(let item of topObstacleArr){
            let itemNumber = topObstacleArr.indexOf(item);
            for(let element of bottomObstacleArr){
                let elementNumber = bottomObstacleArr.indexOf(item);

                if((newBird.crashWith(item) && item.fill===img2)||(newBird.crashWith(element) && element.fill===img2)){ 
                    newBird.fill= img3
                    gameResult='lose'
                    updateScore(itemNumber,currentScore)
                    updateScore(elementNumber,currentScore)
                    stopGame()
                    setTimeout(function(){  
                        P6.style.display='none'
                        PLOSE.style.display='flex'
                    },500)  
                } 

                else if(newBird.crashWith(finishingLine)&&finishingLine.fill==='grey'){
                    gameResult='win'
                    setTimeout(function(){
                      stopGame()
                      updateScore("finishingLine",currentScore)
                      onWinCanvas()
                    },1500)  
                }  
            }   
        }
    }
    
}

//-----------------------------------------------------------------------------------------------------------------------

function updateScore(obstacle,score){
    
  if(obstacle==="side"){
      pointsArray.forEach(span=>span.innerHTML=-5) 
  }
  else if(obstacle <= topObstacleArr.length){
      pointsArray.forEach(span=>span.innerHTML=-5);   
  }
  else if (obstacle==="finishingLine") {
    
    pointsArray.forEach(span=>span.innerHTML=score+20)
  }

} 

//-----------------------------------------------------------------------------------------------------------------------

function keyOperation(){ 

    gameClick.onclick=(()=>{
      newBird.speedY-=2.5
      bubbleSounds.play()
    })

    document.onkeydown = function (e) {
      if (e.keyCode == 32) {
        e.preventDefault();
          newBird.speedY-=2.5
          bubbleSounds.play()
      }
    }

}

//-----------------------------------------------------------------------------------------------------------------------

function onloadCanvas(){  

    canvas.style.display="none"
    canvasIntro.style.display="flex"
    canvasWin.style.display="none"
    restartBtn.style.display="none"
    gameClick.style.display="none"
    gameResult="" 

}

//-----------------------------------------------------------------------------------------------------------------------

function duringCanvasGame(){

    canvas.style.display="flex"
    canvasWin.style.display="none"
    canvasIntro.style.display="none"
    startBtn.style.display="none"
    restartBtn.style.display="flex"
    gameClick.style.display="flex"
    
}

//-----------------------------------------------------------------------------------------------------------------------

function onWinCanvas(){

  hiddenBtnA.style.visibility='visible'
  hiddenBtnB.style.visibility='visible'
  canvas.style.display="none"
  canvasWin.style.display="flex"
  restartBtn.style.display="none"
  gameClick.style.display="none"
  startBtn.style.display="none"

}

//-----------------------------------------------------------------------------------------------------------------------

window.onload = function() {

      onloadCanvas()

      startBtn.onclick = function() {
        
        keyOperation()
        duringCanvasGame();
        startGame();
        
      };

      restartBtn.onclick=function(){
        
        topObstacleArr=[]
        bottomObstacleArr=[]

        newBird.x=50
        newBird.y=100
        newBird.gravity=0.04
        finishingLine.x=2500

        for (let i=0;i<5;i++){ 
          topObstacleArr.push(
          new Component(obsWidth, obsHeight, img2, obsPosX+(i*400), 0, obsSpeedX, obsSpeedY*-1.2, 0, 0)
          )
          topObstacleArr.push(
            new Component(obsWidth, obsHeight, img2, obsPosX+((i*400)+2000), 0, obsSpeedX+0.4, obsSpeedY*-1.4, 0, 0)
          )  
        }

        for (let i=0;i<5;i++){
          bottomObstacleArr.push(
           new Component (obsWidth, obsHeight, img2, obsPosX+(i*400), canvas.height, obsSpeedX, obsSpeedY, 0, 0)
          )
          bottomObstacleArr.push(
           new Component (obsWidth, obsHeight, img2, obsPosX+((i*400)+2000), canvas.height, obsSpeedX+0.8, obsSpeedY*0.8, 0, 0)
          )        
        }  
    }
}
//-----------------------------------------------------------------------------------------------------------------------
 