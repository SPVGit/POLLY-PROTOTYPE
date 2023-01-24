
//CANVAS LOGIC------------------------------------------------------------------------------------------------------------------

//ELEMENT INITIALIZATION--------------------------------------------------------------------------------------------------------

let canvasIntro = document.getElementById('canvas-intro');
let canvasWin = document.getElementById('canvas-win');
let startBtn = document.getElementById("start-button");
let restartBtn=document.getElementById('restart-btn');
let hiddenBtnA = document.getElementById("hiddenBtnP6A");
let hiddenBtnB = document.getElementById("hiddenBtnP6B");
let hiddenBtnBack = document.getElementById('hiddenBtnP6Back');
let p6 = document.getElementById('P-6');
let pLose = document.getElementById("P-LOSE");
let p6gameDiv=document.getElementById('P6gameDiv');
let canvas = document.getElementById('my-canvas');
let ctx = canvas.getContext('2d');

  
//IMAGE INITIALIZATION-----------------------------------------------------------------------------------------------------------------------

const img = new Image();
img.src = './IMAGES/6.UNDER-ICE.png';

const img1 = new Image();
img1.src = './IMAGES/6a.PENGUIN.png';

const img2 = new Image();
img2.src = './IMAGES/6b.KILLER-WHALE.png';

const img3 = new Image();
img3.src = './IMAGES/6c.EXPLOSION.png';


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
    
  };
  left() {
    return this.x;
  };
  right() { 
      return this.x + this.width; 
  };
  top() {
    return this.y;
  };
  bottom() {
    return this.y + this.height;
  };  
  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top()+40 || 
    this.top() > obstacle.bottom()-40 || 
    this.right() < obstacle.left()+10 ||  
    this.left() > obstacle.right()-10);
    };
  hitBottom(){
    let rockbottom = canvas.height - this.width;
      if (this.y > rockbottom) {
        this.y = rockbottom;
      };
  };

};

//extra margins added/removed 'crashWith' function to compensate for transparent backgrounds of png files.

//-----------------------------------------------------------------------------------------------------------------------

class BackgroundImg extends Component{

  constructor(width,height,fill,x,y,speedX,speedY){
    super(width,height,fill,x,y,speedX,speedY)  
  };

  move(){
    this.x -= this.speedX;
    this.x %= canvas.width;
  };
  drawImg(){
    ctx.drawImage(this.fill, this.x, this.y, canvas.width,canvas.height);
    if (this.speedX > 0) {
      ctx.drawImage(this.fill, this.x + canvas.width,0,canvas.width,canvas.height);
    }
    else {
      ctx.drawImage(this.fill, this.x - canvas.width, 0,canvas.width,canvas.height );
    };
  };
  
};
//-----------------------------------------------------------------------------------------------------------------------

class ObstaclesImg extends Component {

  constructor(width,height,fill,x,y,speedX,speedY){
    super(width,height,fill,x,y,speedX,speedY)  
  };

  newPos(){
    this.x+=this.speedX;
    this.y+=this.speedY;
  };
  drawImg(){
    ctx.drawImage(this.fill, this.x, this.y, this.width, this.height); 
  };

};

//-----------------------------------------------------------------------------------------------------------------------

class FinishingLine extends Component {

  constructor(width,height,fill,x,y,speedX,speedY){
    super(width,height,fill,x,y,speedX,speedY)  
  };

  newPos(){
    this.x+=this.speedX;
    this.y+=this.speedY;
  };
  updateDrawing(){
    ctx.fillStyle=this.fill;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

};

//-----------------------------------------------------------------------------------------------------------------------

class Bird extends Component {

  constructor (width, height, fill, x, y, speedX, speedY, gravity, gravitySpeed){
    super(width, height, fill, x, y, speedX, speedY)
    this.gravity=gravity;
    this.gravitySpeed=gravitySpeed;
  };

  move(){
    this.gravitySpeed += this.gravity;
    this.x+=this.speedX;
    this.y+=this.speedY+this.gravitySpeed;
  };
  drawImg(){
    ctx.drawImage(this.fill, this.x, this.y, this.width, this.height); 
  };
  
};

//-----------------------------------------------------------------------------------------------------------------------

const backgroundImg =  new BackgroundImg (canvas.width, canvas.height, img, 0, 0, 1, 0);

//-----------------------------------------------------------------------------------------------------------------------

const newBird = new Bird (canvas.width/7, canvas.height/7, img1,50, 100, canvas.width/6750, 0, canvas.height/8000, 0);

//-----------------------------------------------------------------------------------------------------------------------

let obsWidth, obsHeight, obsPosX, obsPosY, obsSpeedX, obsSpeedY;

obsWidth = canvas.width/3;
obsHeight = canvas.height/5;
obsPosX=canvas.width;
obsPosY=canvas.height;
obsSpeedX=-1;
obsSpeedY=-0.25;   

//-----------------------------------------------------------------------------------------------------------------------

let topObstacleArr = [];
let bottomObstacleArr=[];
let timeoutTime = canvas.width*60.78

function createObstaclesArray(){

  for (let i=0;i<5;i++) {
   
    topObstacleArr.push(
      new ObstaclesImg (obsWidth, obsHeight, img2, obsPosX+(i*canvas.width*0.72), obsPosY*0, obsSpeedX, obsSpeedY*-1)
    )
    bottomObstacleArr.push(
      new ObstaclesImg (obsWidth, obsHeight, img2, obsPosX+(i*canvas.width*0.72), obsPosY, obsSpeedX, obsSpeedY)
    )
  }

};

//-----------------------------------------------------------------------------------------------------------------------

const finishingLine = new FinishingLine (30, canvas.height, "yellow", canvas.width*8, 0, obsSpeedX, 0);

//FUNCTIONS---------------------------------------------------------------------------------------------------------------

function updateCanvas() {

  backgroundImg.move();
  backgroundImg.drawImg();
  requestAnimationFrame(updateCanvas);

};
    
//-----------------------------------------------------------------------------------------------------------------------

function updateNewBird(){

  newBird.move();  
  newBird.drawImg();
  requestAnimationFrame(updateNewBird);

};

//-----------------------------------------------------------------------------------------------------------------------

function updateNewObstacles(){

    finishingLine.newPos();
    finishingLine.updateDrawing();

    for(let item of topObstacleArr){
        item.newPos();
        item.drawImg();
    }
    for(let item of bottomObstacleArr){
        item.newPos();
        item.drawImg(); 
    }

    checkGameOver();  
  requestAnimationFrame(updateNewObstacles);

};

//-----------------------------------------------------------------------------------------------------------------------

function startGame() { 
    
  updateCanvas();
  updateNewBird();
  updateNewObstacles();

};

//-----------------------------------------------------------------------------------------------------------------------

function restartGame(){
       
    newBird.x=50;
    newBird.y=50;
    newBird.gravity=canvas.height/8000;
    finishingLine.x=canvas.width*8;
    topObstacleArr=[];
    bottomObstacleArr=[];

};

//-----------------------------------------------------------------------------------------------------------------------

function stopGame(){

  backgroundImg.speedX=0;
  finishingLine.speedX=0;
  newBird.speedY=0;
  newBird.gravity=0;
  newBird.gravitySpeed=0;

  for(let element of topObstacleArr){
    element.speedX=0;
    element.speedY=0;
  };
  for(let element of bottomObstacleArr){
    element.speedX=0;
    element.speedY=0;
    
  };

};  




//-----------------------------------------------------------------------------------------------------------------------

function checkGameOver(){ 
  
    if ((newBird.y+newBird.height>=canvas.height) || newBird.y<0) {  //colliding against sides of canvas
      
        newBird.hitBottom();
        newBird.fill= img3;
        updateScore("side",currentScore);
        disableKeys();
        stopGame();

    }

    else if ((newBird.y+newBird.height<canvas.height) || newBird.y>0) { 

        let allObstacleArr = topObstacleArr.concat(bottomObstacleArr)
        
        for(let item of allObstacleArr){

            if(newBird.crashWith(item)){ //colliding against obstacles
              newBird.fill= img3;
              updateScore("obstacle",currentScore);
              disableKeys();
              stopGame();

            } 
        }

        if(newBird.crashWith(finishingLine)){ //colliding against finishing line
                    
            
                    
            setTimeout(function(){

              stopGame();
              disableKeys();
              updateScore("finishingLine",currentScore);
              onWinCanvas();

            },800);  
        };  
    };  
};

//-----------------------------------------------------------------------------------------------------------------------

function updateScore(obstacle,score){
    
  if(obstacle==="side"||obstacle ==="obstacle"){
      pointsArray.forEach((span)=>{
        span.innerHTML=-5

        setTimeout(function(){                        
          winOrLose(span.innerHTML,p6)
        },300);  

      }); 
  }

  else if (obstacle==="finishingLine") {
    pointsArray.forEach(span=>span.innerHTML=score+20);
  };

}; 

//-----------------------------------------------------------------------------------------------------------------------

function keyOperation(){ 

    p6gameDiv.onclick=(()=>{ //for tapping on mobile screen
      newBird.speedY-=canvas.height/400;
      bubbleSounds.play();
      bubbleSounds.volume = 0.2;
    })

    document.onkeydown = function (e) {  //space bar function for larger screens
      if (e.keyCode == 32) {
        e.preventDefault();
          newBird.speedY-=canvas.height/400;
          bubbleSounds.play();
          bubbleSounds.volume = 0.2;
      };
    };

};

function disableKeys(){

  p6gameDiv.onclick=null;  //tapping diabled for mobiles

  document.onkeydown = function (e) {  //space bar diabled for larger screens
    if (e.keyCode == 32) {
       return false
    };
  };

};

//-----------------------------------------------------------------------------------------------------------------------

function onloadCanvas(){  

    canvas.style.display="none";
    canvasIntro.style.display="flex";
    canvasWin.style.display="none";
    restartBtn.style.display="none";
    gameResult="" ;

};

//-----------------------------------------------------------------------------------------------------------------------

function duringCanvasGame(){

    canvas.style.display="flex";
    canvasWin.style.display="none";
    canvasIntro.style.display="none";
    startBtn.style.display="none";
    restartBtn.style.display="flex";
    hiddenBtnBack.style.display='none';
    
};

//-----------------------------------------------------------------------------------------------------------------------

function onWinCanvas(){

  hiddenBtnA.style.display='flex';
  hiddenBtnB.style.display='flex';
  hiddenBtnBack.style.display='flex';
  canvas.style.display="none";
  canvasWin.style.display="flex";
  restartBtn.style.display="none";
  startBtn.style.display="none";
  
};

//-----------------------------------------------------------------------------------------------------------------------
let currentScore= 0;

window.onload = function() {

      onloadCanvas();
      
      startBtn.onclick = function() {

        currentScore= parseFloat(pointsArray[0].innerHTML);
        keyOperation();
        duringCanvasGame();
        createObstaclesArray();

        obstacleTimeOut = setTimeout(function(){
          createObstaclesArray();
        },timeoutTime);

        startGame();
       
      };

      restartBtn.onclick=function(){

        clearTimeout(obstacleTimeOut);

        restartGame();
        createObstaclesArray();

        obstacleTimeOut = setTimeout(function(){
          createObstaclesArray();
        },timeoutTime);

    };

};
  
//-----------------------------------------------------------------------------------------------------------------------

window.addEventListener("resize", canvasResize);

function canvasResize(){

  let w = document.documentElement.clientWidth
  let h = document.documentElement.clientHeight
  canvas.width = w*0.9
  canvas.height=h*0.6
  backgroundImg.width=canvas.width
  backgroundImg.height=canvas.height
  newBird.width=canvas.width/7
  newBird.height=canvas.width/7
  newBird.speedX=canvas.width/6750,
  newBird.gravitySpeed=canvas.height/8000
  obsWidth = canvas.width/3;
  obsHeight = canvas.height/5;
  obsPosX=canvas.width;
  obsPosY=canvas.height;    
  finishingLine.width=30
  finishingLine.height=canvas.height
  finishingLine.x=canvas.width*8
  timeoutTime = canvas.width*60.78

}

