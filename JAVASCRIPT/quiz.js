// QUIZ LOGIC-----------------------------------------------------------------------------------

let correctAns = 0

function quizPlay(x,word,button){
    
    let inputField = document.getElementById(`input${x}`)
    let tickPic = document.getElementById(`tick${x}`)
    let crossPic = document.getElementById(`cross${x}`)
    let buttonToShow = document.getElementById(`${button}`)
      
    inputField.oninput = function(){
       
        if(inputField.value.toUpperCase()===word){
            inputField.readOnly= true
            tickPic.style.display='flex'
            crossPic.style.display='none'
            correctAns+=1

            if(correctAns===3){
                buttonToShow.classList.toggle('hidden-btn')
                correctAns=0
            }  
            pointsArray.forEach(span=>span.innerHTML=parseFloat(span.innerHTML)+5)
        }
        else{
            tickPic.style.display='none'
            crossPic.style.display='flex'
        }
    }

}


//QUIZ P-4-------------------------------------------------------

quizPlay(1,"EMPEROR",'hiddenBtnP4A')
quizPlay(2,"ANTARCTICA",'hiddenBtnP4A')
quizPlay(3,"HUDDLE",'hiddenBtnP4A')


quizPlay(4,'CAMOUFLAGE','hiddenBtnP8A')
quizPlay(5,'DOG','hiddenBtnP8A')
quizPlay(6,'PACKS','hiddenBtnP8A')
    
    

