
//INITIALIZE CODE------------------------------------------------------------------------------
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
   // localStorage.getItem('currentItem')
    //console.log(localStorage.getItem('currentItem'));
    
  });

let PINTRO, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P10END


PINTRO = document.getElementById('P-INTRO')
P1 = document.getElementById('P-1')
P2 = document.getElementById('P-2')
P3 = document.getElementById('P-3')
P4 = document.getElementById('P-4')
P5 = document.getElementById('P-5')
P6 = document.getElementById('P-6')
P7 = document.getElementById('P-7')
P8 = document.getElementById('P-8')
P9 = document.getElementById('P-9')
P10 = document.getElementById('P-10')
P10END = document.getElementById('P-10-THE-END')

let backgroundAudio = new Audio('PRICE-OF-FREEDOM.mp3')
let bubbleSounds = new Audio("BUBBLE-SOUNDS.mp3")

function playAudio(audio) {
    audio.play();
  }

function stopAudio(audio){
    audio.pause();
    audio.currentTime = 0;
    audio.src = ""
}




let pagesArray = [PINTRO,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10]


let buttonsArray = [...document.getElementsByClassName('btn-style')]



let pointsArray = [...document.getElementsByTagName('span')]




function openNewCard(btnArr, pgsArr){
    for (let item of btnArr){        
        for(let element of pgsArr){          
            if (item.classList.contains(element.id)){            
                item.onclick=function(){
                    item.parentNode.parentNode.style.display="none"
                    element.style.display='flex'
                    //localStorage.setItem('currentItem', element.id);
                    if(item.id==="P-1btn"){
                        playAudio(backgroundAudio)
                    }
                    else if(item.classList.contains("P-INTRO")){
                        pointsArray.forEach(span=>span.innerHTML=0)
                        stopAudio(backgroundAudio)
                        //localStorage.removeItem('myCat');
                        location.reload();
                    }
                    else{
                        if (parseFloat(item.parentNode.parentNode.id.substring(2,9))<parseFloat(element.id.substring(2,9))){
                            pointsArray.forEach(span=>span.innerHTML=parseFloat(span.innerHTML)+5)
                        }
                        else if(parseFloat(item.parentNode.parentNode.id.substring(2,9))>parseFloat(element.id.substring(2,9))){
                            pointsArray.forEach((span)=>{
                                span.innerHTML=parseFloat(span.innerHTML)-10
                                winOrLose(span.innerHTML)}
                            )
                        }
                    }                                       
                }            
            }
        }       
    }   
}

openNewCard(buttonsArray,pagesArray)

function winOrLose(score){
    
        if(score<0){
            for (let item of pagesArray){
                if(item.style.display==='flex'){
                    item.style.display='none'
                    PLOSE.style.display='flex'
                }
              
            }
        }
    
}


 