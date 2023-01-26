// MAIN GAME LOGIC----------------------------------------------------------------------------------------------------------------

//LOCAL STORAGE ON LOAD EVENT LISTENER--------------------------------------------------------------------------------------------

window.addEventListener("load", (event) => {

    myLoad() //Local storage execution

});

//DIVS, BUTTONS AND POINTS ARRAYS-------------------------------------------------------------------------------------------------

let pagesArray = [];

let buttonsArray = [...document.getElementsByClassName('btn-style')];

let pointsArray = [...document.getElementsByTagName('span')];

//CREATING DIV OBJECTS------------------------------------------------------------------------------------------------------------

class Page {

    constructor(pageNumber){

        this.div = document.getElementById(`P-${pageNumber}`);
    };

};

for (let i = 1; i<28; i++){

 pagesArray.push(new Page(i));

};

pagesArray.unshift(new Page("INTRO"));
pagesArray.push(new Page(`5.11`));
pagesArray.push(new Page(`9.11`));
pagesArray.push(new Page (`WIN`));
pagesArray.push(new Page (`LOSE`));
pagesArray.push(new Page(`END`));

//AUDIO OBJECTS AND FUNCTIONS------------------------------------------------------------------------------------------------------

let backgroundAudio = new Audio('Z-PRICE-OF-FREEDOM.mp3');
let bubbleSounds = new Audio("Z-BUBBLE-SOUNDS.mp3");
let successSound = new Audio ("Z-SUCCESS.mp3");
let pageTurn = new Audio ("Z-PAGE-TURN.mp3");
let loseSound = new Audio("Z-LOSE.mp3")

function playMainAudio(audio,btn) {

    if(btn.id==="P-1btn");
    audio.play();
    audio.volume = 0.5;

};
function stopAudio(audio){

    audio.pause();
    audio.currentTime = 0;
    audio.src = "";
    
};
function winAudio(audio, btn){

    if(btn.classList.contains("P-WIN")){
        audio.play();
        
    };

};

function turnPageAudio(audio, btn){

    if(!btn.classList.contains("P-WIN")||!btn.classList.contains("P-LOSE")){

        audio.play();
        audio.volume=0.5;

    };

};

//LOCAL STORAGE FUNCTIONS---------------------------------------------------------------------------------------------------------

let setData = {};

function mySave(dataObj) { //Local Storage get Item

    let dataKey = (JSON.stringify(dataObj));
    localStorage.setItem(`dataKey`, dataKey);  

};

function myLoad() { //Local Storage set Item

    let storedObj = localStorage.getItem('dataKey');

    if(storedObj && (JSON.parse(storedObj).pageId!==`P-INTRO`)){ 
        
        document.getElementById(`${JSON.parse(storedObj).pageId}`).style.display='flex';
        document.getElementById(`${JSON.parse(storedObj).pageId}`).onclick = function(){

            backgroundAudio.play();
            backgroundAudio.volume = 0.2;

        };

        if(JSON.parse(storedObj).btnPgId){

            document.getElementById(`${JSON.parse(storedObj).btnPgId}`).style.display='none';

        };

        document.getElementById(`P-INTRO`).style.display='none';
        pointsArray.forEach(span=>span.innerHTML=parseFloat(JSON.parse(storedObj).points));

    };  

     return storedObj;

};

//MAIN GAME FUNCTIONALITY--------------------------------------------------------------------------------------------------------

function openAndClosePage(btn,pg){

    btn.parentNode.parentNode.style.display="none";
    pg.div.style.display='flex';

    if(pg.div.id==="P-LOSE" && pg.div.style.display==='flex'){

        loseSound.play();
        loseSound.volume = 0.8;

    }

    setData.points=pointsArray[0].innerHTML;
    setData.btnPgId=btn.parentNode.parentNode.id;
    setData.pageId=pg.div.id;
    mySave(setData);  

}

function pointsCalculator(btn,page){
    
    if (parseFloat(btn.parentNode.parentNode.id.substring(2,9))<parseFloat(page.id.substring(2,9))){ 
        
        pointsArray.forEach(span=>{

            span.innerHTML=parseFloat(span.innerHTML)+5;

            setData.points=pointsArray[0].innerHTML;
            mySave(setData);  

        })
       
    }

    else if(parseFloat(btn.parentNode.parentNode.id.substring(2,9))>parseFloat(page.id.substring(2,9))){
        
        pointsArray.forEach((span)=>{

        span.innerHTML=parseFloat(span.innerHTML)-10;

        setData.points=pointsArray[0].innerHTML;
        mySave(setData);

        loseLogic(span.innerHTML,page)
        
        });

    }
    
}

function loseLogic(score,page){

    if(score<0){ 

        if(page.style.display==='flex'){

            page.style.display='none';
            pagesArray[pagesArray.length-2].div.style.display='flex';

            loseSound.play();
            loseSound.volume = 0.8;

            setData.pageId=pagesArray[pagesArray.length-2].div.id;
            mySave(setData);

        }
    }   

}

function restart(btn){

    if(btn.classList.contains("P-INTRO")){

        location.reload();
        pointsArray.forEach(span=>span.innerHTML=0);

        setData.btnPgId="";
        setData.pageId="P-INTRO";
        setData.points=0;
        mySave(setData);

        stopAudio(backgroundAudio);
    }
}

function onGameStart(btnArr, pgsArr){

    for (let btn of btnArr){        
        for(let pg of pgsArr){          
            if (btn.classList.contains(pg.div.id)){   

                btn.onclick=function(){

                    openAndClosePage(btn,pg);
                    playMainAudio(backgroundAudio,btn);
                    turnPageAudio(pageTurn, btn);
                    winAudio(successSound, btn);
                    pointsCalculator(btn,pg.div);
                    restart(btn);                 

                }                                       
            }            
        }
    }      

}   
    
onGameStart(buttonsArray,pagesArray);


