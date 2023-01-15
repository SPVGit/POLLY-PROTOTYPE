
//INITIALIZE CODE------------------------------------------------------------------------------

let backgroundAudio = new Audio('PRICE-OF-FREEDOM.mp3')

function playAudio() {
    backgroundAudio.play();
  }

function stopAudio(){
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0;
    backgroundAudio.src = ""
}

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


let pagesArray = [PINTRO,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10]
//let buttonsArray = [P1btn, P2btn, P3btn, P4btn, P5btn, P6btn, P7btn, P8btn, P9btn, P10btn]

let buttonsArray = [...document.getElementsByClassName('btn-style')]



let points = [...document.getElementsByTagName('span')]



function openNewCard(btnArray, pgsArray){

    for (let item of btnArray){
        
        
        for(let element of pgsArray){
           
            if (item.classList.contains(element.id)){
            
                item.onclick=function(){
                    item.parentNode.parentNode.style.display="none"
                    element.style.display='flex'
                    if(item.id==="P-1btn"){
                        playAudio()
                    }
                    else if(item.classList.contains("P-INTRO")){
                        points.forEach(span=>span.innerHTML=0)
                        stopAudio()
                        location.reload();
                    }
                    else{
                        if (parseFloat(item.parentNode.parentNode.id.substring(2,9))<parseFloat(element.id.substring(2,9))){
                            points.forEach(span=>span.innerHTML=parseFloat(span.innerHTML)+1)
                        }
                        else if(parseFloat(item.parentNode.parentNode.id.substring(2,9))>parseFloat(element.id.substring(2,9))){
                            points.forEach(span=>span.innerHTML=parseFloat(span.innerHTML)-1)
                        }
                    }
                    
                   
                }
            
            }
        }
        
    }
    
}

openNewCard(buttonsArray,pagesArray)




 