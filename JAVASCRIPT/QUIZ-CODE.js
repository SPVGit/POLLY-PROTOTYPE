// QUIZ LOGIC---------------------------------------------------------------------------------

let correctAns = 0

function quizPlay(quesNum,word,button){
    
    let inputField = document.getElementById(`input${quesNum}`)
    let tickPic = document.getElementById(`tick${quesNum}`)
    let crossPic = document.getElementById(`cross${quesNum}`)
    let buttonToShow = document.getElementById(`${button}`)
      
    inputField.oninput = function(){
       
        if(inputField.value.toUpperCase()===word){
            inputField.readOnly= true
            tickPic.style.display='flex'
            crossPic.style.display='none'
            correctAns+=1

            if(correctAns===3){
                successSound.play()
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

//QUIZ P-4-------------------------------------------------------------------------------------

quizPlay(1,"EMPEROR",'hiddenBtnP4A')
quizPlay(2,"ANTARCTICA",'hiddenBtnP4A')
quizPlay(3,"HUDDLE",'hiddenBtnP4A')

//QUIZ P-5-------------------------------------------------------------------------------------

quizPlay(4,'CAMOUFLAGE','hiddenBtnP8A')
quizPlay(5,'DOG','hiddenBtnP8A')
quizPlay(6,'PACKS','hiddenBtnP8A')
    
quizPlay(7,'DOLPHIN','hiddenBtnP24A')
quizPlay(8,'ORCA','hiddenBtnP24A')
quizPlay(9,'FALSE','hiddenBtnP24A')   

