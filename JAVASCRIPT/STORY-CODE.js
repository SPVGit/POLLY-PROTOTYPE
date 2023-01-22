
// MAIN GAME LOGIC---------------------------------------------------------------------------------------------
 
//localStorage.setItem('currentItem', element.id);
//localStorage.removeItem('myCat');
/*if(item.classList.contains("P-INTRO")){
    pointsArray.forEach(span=>span.innerHTML=0)
    stopAudio(backgroundAudio)
   
    location.reload();*/

//LOCAL STORAGE------------------------------------------------------------------------------------------------

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
 
   // localStorage.getItem('currentItem')
    //console.log(localStorage.getItem('currentItem'));
    


  });

//DIVS, BUTTONS AND POINTS ARRAYS------------------------------------------------------------------------------

let pagesArray = []

let buttonsArray = [...document.getElementsByClassName('btn-style')]

let pointsArray = [...document.getElementsByTagName('span')]

//CREATING DIV OBJECTS------------------------------------------------------------------------------------------

class Page {
    constructor(pageNumber){
        this.div = document.getElementById(`P-${pageNumber}`)
    }
}

for (let i = 1; i<15; i++){
 pagesArray.push(new Page(i))
}

pagesArray.unshift(new Page("INTRO"))
pagesArray.push(new Page (`WIN`))
pagesArray.push(new Page (`LOSE`))
pagesArray.push(new Page(`END`))

//CREATING AUDIO OBJECTS---------------------------------------------------------------------------------------

let backgroundAudio = new Audio('PRICE-OF-FREEDOM.mp3')
let bubbleSounds = new Audio("BUBBLE-SOUNDS.mp3")

//FUNCTIONS-----------------------------------------------------------------------------------------------------

function openAndClosePage(btn,pg){

    btn.parentNode.parentNode.style.display="none"
    pg.div.style.display='flex'

}

function playAudio(audio,btn) {

    if(btn.id==="P-1btn")
    audio.play();
    audio.volume = 0.1;
   
}

function stopAudio(audio){

    audio.pause();
    audio.currentTime = 0;
    audio.src = ""
    
}

function pointsCalculator(btn,pg){

    if (parseFloat(btn.parentNode.parentNode.id.substring(2,9))<parseFloat(pg.div.id.substring(2,9))){
        pointsArray.forEach(span=>span.innerHTML=parseFloat(span.innerHTML)+5)
    }

    else if(parseFloat(btn.parentNode.parentNode.id.substring(2,9))>parseFloat(pg.div.id.substring(2,9))){
        pointsArray.forEach((span)=>{
        span.innerHTML=parseFloat(span.innerHTML)-10
        winOrLose(span.innerHTML,pg)})
    }

}

function winOrLose(score,pg){

    if(score<0){ 
        if(pg.div.style.display==='flex'){
            pg.div.style.display='none'
            pagesArray[pagesArray.length-2].div.style.display='flex'
        }             
    }   

}

function restart(btn){

    if(btn.classList.contains("P-INTRO")){
        pointsArray.forEach(span=>span.innerHTML=0)
        stopAudio(backgroundAudio)
        location.reload();
    }
    
}

function onGameStart(btnArr, pgsArr){

    for (let btn of btnArr){        
        for(let pg of pgsArr){          
            if (btn.classList.contains(pg.div.id)){   

                btn.onclick=function(){

                    openAndClosePage(btn,pg)
                    pointsCalculator(btn,pg)
                    playAudio(backgroundAudio,btn)
                    restart(btn)                   

                }                                       
            }            
        }
    }      

}   
    
onGameStart(buttonsArray,pagesArray)


