
//ELEMENT INITIALIZATION--------------------------------------------------------------------------------------------------------

let canvasIntro = document.getElementById('canvas-intro')
let canvasWin = document.getElementById('canvas-win')
let startBtn = document.getElementById("start-button")
let restartBtn=document.getElementById('restart-btn')
let gameClick =document.getElementById('game-click')
let hiddenBtnA = document.getElementById("hiddenBtnP6A")
let hiddenBtnB = document.getElementById("hiddenBtnP6B")
let hiddenBtnBack = document.getElementById('hiddenBtnP6Back')
let p6 = document.getElementById('P-6')
let pLose = document.getElementById("P-LOSE")
let canvasDiv = document.getElementById('cnv-and-btn-div')
let canvasBtnDiv=document.getElementById('canvas-btns')
let p6gameDiv=document.getElementById('P6gameDiv')
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');


//IMAGE INITIALIZATION-----------------------------------------------------------------------------------------------------------------------

const img = new Image();
img.src = './IMAGES/6. UNDER-ICE.png';

const img1 = new Image();
img1.src = './IMAGES/6a. Penguin.png';

const img2 = new Image();
img2.src = './IMAGES/6b. killer-whale-transparent-9.png'

const img3 = new Image();
img3.src = './IMAGES/6c. EXPLOSION.png'


//BACKGROUND, BIRD AND OBSTACLE CONSTRUCTOR-----------------------------------------------------------------------------

class Component {

  constructor(width, height, fill, x, y, speedX, speedY) {

    this.width = width;
    this.height = height;
    this.fill = fill;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    
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
    return !(this.bottom() < obstacle.top()+40 || 
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

class BackgroundImg extends Component{

  constructor(width,height,fill,x,y,speedX,speedY){
    super(width,height,fill,x,y,speedX,speedY)  
  }

  move(){
    this.x -= this.speedX;
    this.x %= canvas.width;
  }
  drawImg(){
    ctx.drawImage(this.fill, this.x, this.y, canvas.width,canvas.height);
    if (this.speedX > 0) {
      ctx.drawImage(this.fill, this.x + canvas.width,0,canvas.width,canvas.height);
    } else {
      ctx.drawImage(this.fill, this.x - canvas.width, 0,canvas.width,canvas.height );
    }
  }

  
}
//-----------------------------------------------------------------------------------------------------------------------

class ObstaclesImg extends Component {

  constructor(width,height,fill,x,y,speedX,speedY){
    super(width,height,fill,x,y,speedX,speedY)  
  }

  newPos(){
    this.x+=this.speedX;
    this.y+=this.speedY;
  }
  drawImg(){
    ctx.drawImage(this.fill, this.x, this.y, this.width, this.height); 
  }

}

//-----------------------------------------------------------------------------------------------------------------------

class FinishingLine extends Component {

  constructor(width,height,fill,x,y,speedX,speedY){
    super(width,height,fill,x,y,speedX,speedY)  
  }

  newPos(){
    this.x+=this.speedX;
    this.y+=this.speedY;
  }
  updateDrawing(){
    ctx.fillStyle=this.fill
    ctx.fillRect(this.x, this.y, this.width, this.height)  
  }

}

//-----------------------------------------------------------------------------------------------------------------------

class Bird extends Component {

  constructor (width, height, fill, x, y, speedX, speedY, gravity, gravitySpeed){
    super(width, height, fill, x, y, speedX, speedY)
    this.gravity=gravity;
    this.gravitySpeed=gravitySpeed;
  }

  move(){
    this.gravitySpeed += this.gravity;
    this.x+=this.speedX;
    this.y+=this.speedY+this.gravitySpeed;
  }
  drawImg(){
    ctx.drawImage(this.fill, this.x, this.y, this.width, this.height); 
  }
  
}

//extra margins added/removed 'crashWith' function to compensate for transparent backgrounds of png files.

//-----------------------------------------------------------------------------------------------------------------------

const backgroundImg =  new BackgroundImg (canvas.width, canvas.height, img, 0, 0, 1, 0)

//-----------------------------------------------------------------------------------------------------------------------

const newBird = new Bird (canvas.width/7, canvas.height/7, img1,50, 100, 0.05, 0, 0.05, 0);

//-----------------------------------------------------------------------------------------------------------------------

let obsWidth, obsHeight, obsPosX, obsPosY, obsSpeedX, obsSpeedY

obsWidth = canvas.width/3
obsHeight = canvas.height/5
obsPosX=canvas.width
obsPosY=Math.floor(Math.random()*canvas.height)
obsSpeedX=-canvas.width/260
obsSpeedY=-canvas.height/1750   

//-----------------------------------------------------------------------------------------------------------------------

let topObstacleArr = []

for (let i=0;i<5;i++){ 
  topObstacleArr.push(
    new ObstaclesImg (obsWidth, obsHeight, img2, obsPosX+(i*500), 0, obsSpeedX, obsSpeedY*-1)
  )
  setTimeout(function(){
    topObstacleArr.push(
      new ObstaclesImg (obsWidth, obsHeight, img2, obsPosX+(i*500), 0, obsSpeedX, obsSpeedY*-1)
    )
  },34000)
  
}

//-----------------------------------------------------------------------------------------------------------------------

let bottomObstacleArr=[]

for (let i=0;i<5;i++){

  bottomObstacleArr.push(
    new ObstaclesImg (obsWidth, obsHeight, img2, obsPosX+(i*500), canvas.height, obsSpeedX, obsSpeedY)
  )
  setTimeout(function(){
    bottomObstacleArr.push(
      new ObstaclesImg (obsWidth, obsHeight, img2, obsPosX+(i*500), canvas.height, obsSpeedX, obsSpeedY)
    )
  },34000)

}

//-----------------------------------------------------------------------------------------------------------------------

const finishingLine = new FinishingLine (30, canvas.height, "yellow", 5000, 0, obsSpeedX, 0, 0, 0)

//FUNCTIONS---------------------------------------------------------------------------------------------------------------

function updateCanvas() {

  backgroundImg.move();
  backgroundImg.drawImg();
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

function restartGame(){
  topObstacleArr=[]
        bottomObstacleArr=[]

        newBird.x=50
        newBird.y=50
        newBird.gravity=0.04
        finishingLine.x=2500

        for (let i=0;i<5;i++){ 
          topObstacleArr.push(
          new ObstaclesImg(obsWidth, obsHeight, img2, obsPosX+(i*400), 0, obsSpeedX, obsSpeedY*-1, 0, 0)
          )

        }

        for (let i=0;i<5;i++){
          bottomObstacleArr.push(
           new ObstaclesImg(obsWidth, obsHeight, img2, obsPosX+(i*400), canvas.height, obsSpeedX, obsSpeedY, 0, 0)
          )
      
        }  

}

//-----------------------------------------------------------------------------------------------------------------------

function stopGame(){

  backgroundImg.speedX=0
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

    if ((newBird.y+newBird.height>=canvas.height) || newBird.y<0) {  //colliding against sides of canvas
        newBird.hitBottom()
        newBird.fill= img3
        stopGame()
        setTimeout(function(){
            updateScore("side",currentScore)
            p6.style.display='none'
            pLose.style.display='flex'
        },500)
    }

    else if ((newBird.y+newBird.height<canvas.height) || newBird.y>0) { //colliding against obstacles
        for(let item of topObstacleArr){
            let itemNumber = topObstacleArr.indexOf(item);
            for(let element of bottomObstacleArr){
                let elementNumber = bottomObstacleArr.indexOf(item);

                if(newBird.crashWith(item) ||(newBird.crashWith(element))){ 
                    newBird.fill= img3
                    updateScore(itemNumber,currentScore)
                    updateScore(elementNumber,currentScore)
                    stopGame()
                    setTimeout(function(){  
                        p6.style.display='none'
                        pLose.style.display='flex'
                    },500)  
                } 

                else if(newBird.crashWith(finishingLine)){ //colliding against finishing line
                    
                    setTimeout(function(){
                      disableKeys()
                      stopGame()
                      updateScore("finishingLine",currentScore)
                      onWinCanvas()
                    },800)  
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

    p6gameDiv.onclick=(()=>{ //for tapping on mobile screen
      newBird.speedY-=canvas.height/250
      bubbleSounds.play()
    })

    document.onkeydown = function (e) {  //space bar function for larger screens
      if (e.keyCode == 32) {
        e.preventDefault();
          newBird.speedY-=canvas.height/250
          bubbleSounds.play()
      }
    }

}

function disableKeys(){

  p6gameDiv.onclick=null

  document.onkeydown = function (e) {  //space bar function for larger screens
    if (e.keyCode == 32) {
       return false
    }
  }
}


//-----------------------------------------------------------------------------------------------------------------------

function onloadCanvas(){  

    canvas.style.display="none"
    canvasIntro.style.display="flex"
    canvasWin.style.display="none"
    restartBtn.style.display="none"
    gameResult="" 

}

//-----------------------------------------------------------------------------------------------------------------------

function duringCanvasGame(){

    canvas.style.display="flex"
    canvasWin.style.display="none"
    canvasIntro.style.display="none"
    startBtn.style.display="none"
    restartBtn.style.display="flex"
    hiddenBtnBack.style.display='none'
}

//-----------------------------------------------------------------------------------------------------------------------

function onWinCanvas(){

  hiddenBtnA.style.display='flex'
  hiddenBtnB.style.display='flex'
  hiddenBtnBack.style.display='flex'
  canvas.style.display="none"
  canvasWin.style.display="flex"
  restartBtn.style.display="none"
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
        
        restartGame()

    }
}
//-----------------------------------------------------------------------------------------------------------------------
 