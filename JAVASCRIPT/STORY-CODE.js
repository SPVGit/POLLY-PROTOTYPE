
// MAIN GAME LOGIC---------------------------------------------------------------------------------------------

//LOCAL STORAGE------------------------------------------------------------------------------------------------

window.addEventListener("load", (event) => {

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

for (let i = 1; i<19; i++){
 pagesArray.push(new Page(i))
}

pagesArray.unshift(new Page("INTRO"))
pagesArray.push(new Page(`5.11`))
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

    console.log(btn.parentNode.parentNode);
    console.log(pg.div);
    
    

}

function playAudio(audio,btn) {

    if(btn.id==="P-1btn")
    audio.play();
    audio.volume = 0.2;
   
}

function stopAudio(audio){

    audio.pause();
    audio.currentTime = 0;
    audio.src = ""
    
}

function pointsCalculator(btn,pg){

    if (parseFloat(btn.parentNode.parentNode.id.substring(2,9))<parseFloat(pg.div.id.substring(2,9))){

        pointsArray.forEach(span=>{
            span.innerHTML=parseFloat(span.innerHTML)+5  
        })
        
    }

    else if(parseFloat(btn.parentNode.parentNode.id.substring(2,9))>parseFloat(pg.div.id.substring(2,9))){

        pointsArray.forEach((span)=>{
        span.innerHTML=parseFloat(span.innerHTML)-10
        winOrLose(span.innerHTML,pg.div)})
    }
        
}

function winOrLose(score,page){

    if(score<0){ 
        if(page.style.display==='flex'){
            page.style.display='none'
            pagesArray[pagesArray.length-2].div.style.display='flex'

        }
    }   

}

function restart(btn){

    if(btn.classList.contains("P-INTRO")){

        location.reload();
        pointsArray.forEach(span=>span.innerHTML=0)
        stopAudio(backgroundAudio)
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


//LOCAL STORAGE FEATURE - TO BE COMPLETED LATER--------------------------------------------------------------------------------

//setData.pageId=pg.div.id
// setData.btnPgId=btn.parentNode.parentNode.id
//setData.points=pointsArray[0].innerHTML // Stores pageId as P-INTRO and points as zero on restart
//setData.canvasWidth = canvas.width
//setData.canvasHeight = canvas.height
// mySave(setData)
   
//setData{}

//function mySave(dataObj) {

    //let dataKey = (JSON.stringify(dataObj))
    //localStorage.setItem(`dataKey`, dataKey)  

//}

// function myLoad() {

//     let storedObj = localStorage.getItem('dataKey')

//     if(storedObj && (JSON.parse(storedObj).pageId!==`P-INTRO`)){ //shows any open page apart from intro page
//         document.getElementById(`${JSON.parse(storedObj).pageId}`).style.display='flex'
//         document.getElementById(`${JSON.parse(storedObj).pageId}`).onclick = function(){
//             backgroundAudio.play()
//             backgroundAudio.volume = 0.2;
//         }

//        //document.getElementById(`${JSON.parse(storedObj).btnPgId}`).style.display='none'
//         document.getElementById(`P-INTRO`).style.display='none'
//         pointsArray.forEach(span=>span.innerHTML=parseFloat(JSON.parse(storedObj).points))

//     }  

//     return storedObj

// }