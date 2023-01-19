class OneBtnDiv {

    constructor(prevPg,currentPg,nextPg,imgPath,list) {

        this.prevPg=prevPg;
        this.currentPg=currentPg;
        this.nextPg=nextPg;
        this.imgPath=imgPath;
        this.list=list

        let body = document.getElementsByTagName('body')[0]

        let div = document.createElement('div');
        div.setAttribute('id',`P-${this.currentPg}`); //add current page number
        div.classList.add('story');
        this.div=div
        
    
            let imgDiv = document.createElement('div');
            imgDiv.classList.add('img-Div');
            this.imgDiv = imgDiv
    
                if(this.imgPath) {
                    let imgTag = document.createElement('img');
                    imgTag.classList.add('penguin');
                    imgTag.setAttribute('src',`${this.imgPath}`); //add image path
                    this.imgTag=imgTag

                    imgDiv.appendChild(imgTag);
                }
                
                
            let pointsDiv = document.createElement('div');
            pointsDiv.classList.add('points-div');
            this.pointsDiv=pointsDiv

                let strong = document.createElement('strong');
                strong.innerHTML = 'Points:';

                    let span = document.createElement('span');
                    span.innerHTML = 0;
    
                        strong.appendChild(span)
                        pointsDiv.appendChild(strong)
    
            let textDiv = document.createElement('div')
            textDiv.classList.add('story-text')
            this.textDiv=textDiv

                let para = document.createElement('p')
                para.classList.add('bullet-points')
                this.para=para

                    let ol = document.createElement('ol')
                    ol.innerHTML = `${this.list}` // add the story here in list tags
                    this.ol=ol
    
                        para.appendChild(ol)
                        textDiv.appendChild(para)
    
            let buttonDiv = document.createElement('div')
            buttonDiv.classList.add('button-div')
            this.buttonDiv=buttonDiv
    
                let backBtn = document.createElement('button')
                backBtn.classList.add('btn-style', `P-${this.prevPg}`) //add previous page number
                backBtn.innerHTML='Back'
                this.backBtn=backBtn;
    
                let forwardBtnA = document.createElement('button')
                forwardBtnA.classList.add('btn-style', `P-${this.nextPg}`) //add following page number
                forwardBtnA.innerHTML='A'
                this.forwardBtnA=forwardBtnA;
    
                let restartBtn = document.createElement('button')
                restartBtn.classList.add('btn-style','P-INTRO')
                restartBtn.innerHTML='Restart'
                this.restartBtn=restartBtn
    
                    buttonDiv.appendChild(backBtn)
                    buttonDiv.appendChild(forwardBtnA)
                    buttonDiv.appendChild(restartBtn)
    
            div.appendChild(imgDiv)
            div.appendChild(pointsDiv)
            div.appendChild(textDiv)
            div.appendChild(buttonDiv)
    
        body.appendChild(div)

    }
}

class IntroDiv extends OneBtnDiv{

    constructor(currentPg, nextPg, headerImg, subheaderImg,imgPath,list){

        super(currentPg,nextPg,imgPath,list)

        this.headerImg = headerImg;
        this.subheaderImg=subheaderImg;
        this.nextPg=nextPg
        this.list=list
        this.imgPath=imgPath
        let header = document.createElement('header')
      

            let headerImg1 = document.createElement('img')
            headerImg1.setAttribute('id','heading')
            headerImg1.setAttribute('src',`${this.headerImg}`) //add header image
            let subheaderImg1 = document.createElement('img')
            subheaderImg1.setAttribute('id','sub-heading')
            subheaderImg1.setAttribute('src',`${this.subheaderImg}`) //add subheader image

                header.appendChild(headerImg1)
                header.appendChild(subheaderImg1)

        this.imgDiv.classList.add('intro-img-div')
        this.imgTag.setAttribute('id','intro-penguin')
        this.imgTag.src=`${imgPath}`

        this.textDiv.setAttribute('id','text-div')
        this.textDiv.classList.remove('story-text')
        this.para.classList.remove('bullet-points')
        let rulesPara = document.createElement('p')

            let rulesHeader = document.createElement('h2')
            rulesHeader.innerHTML='RULES OF THE GAME'

                rulesPara.appendChild(rulesHeader)
                this.textDiv.insertBefore(rulesPara,this.para)

        this.ol.innerHTML=`${this.list}`
        let startBtn = document.createElement('button')
        startBtn.setAttribute('id','P-1btn')
        startBtn.classList.add(`P-${this.nextPg}`,'btn-style')
        startBtn.innerHTML=`Start`

            this.buttonDiv.removeChild(this.backBtn)
            this.buttonDiv.removeChild(this.forwardBtnA)
            this.buttonDiv.removeChild(this.restartBtn)
            this.buttonDiv.appendChild(startBtn)
        
        this.div.classList.remove('story')
        this.div.setAttribute('id', 'P-INTRO')
        this.div.removeChild(this.pointsDiv)
        this.div.insertBefore(header,this.imgDiv)
        
    }

}

class FirstPageDiv extends OneBtnDiv{

    constructor(prevPg,currentPg,nextPg,imgPath,list){

        super(prevPg,currentPg,nextPg,imgPath,list)

        this.backBtn.innerHTML='Stay'
    }

}

class TwoBtnDiv extends OneBtnDiv{

    constructor(prevPg,currentPg,nextPg,secondPg,imgPath,list){

        super(prevPg,currentPg,nextPg,imgPath,list)

        this.secondPg=secondPg

        let forwardBtnB = document.createElement('Button')
        forwardBtnB.classList.add('btn-style',`P-${secondPg}`)
        forwardBtnB.innerHTML='B'
        this.forwardBtnB=forwardBtnB

        this.buttonDiv.insertBefore(forwardBtnB,this.restartBtn)
    }

}


class LastPageDiv extends OneBtnDiv{  //currentPg, nextPg, headerImg, subheaderImg,imgPath,list

    constructor(prevPg, currentPg,nextPg,imgPath,list){

        super(prevPg,currentPg,nextPg,imgPath,list)

    

        this.buttonDiv.removeChild(this.backBtn)
        this.buttonDiv.removeChild(this.restartBtn)
        this.buttonDiv.insertBefore(this.restartBtn,this.forwardBtnA)

        this.forwardBtnA.innerHTML='Next'

    }
}


class LoseorWinDiv extends LastPageDiv{

    constructor(prevPg, currentPg,nextPg,imgPath,list){

        super(prevPg,currentPg,nextPg,imgPath,list)

        this.imgTag.classList.add('face')
        this.forwardBtnA.innerHTML='End'
    }

}


class QuizDiv extends OneBtnDiv{

    constructor(prevPg,currentPg,nextPg,imgPath,list,firstpara,secondpara,thirdpara){

        super(prevPg,currentPg,nextPg,imgPath,list)

        
        this.firstpara=firstpara
        this.secondpara=secondpara
        this.thirdpara=thirdpara

        this.div.removeChild(this.imgDiv)
        
            let quizDiv = document.createElement('div')
            quizDiv.setAttribute('id','div-puzzle1')

                let para1 = document.createElement('p')
                para1.classList.add('quiz-p')
                para1.innerHTML=firstpara

                let input1 = document.createElement('input')
                input1.classList.add('quiz-input')
                input1.setAttribute('type','text')
                input1.setAttribute('placeholder','Type here')

                let para2 = document.createElement('p')
                para2.classList.add('quiz-p')
                para2.innerHTML=secondpara

                let input2 = document.createElement('input')
                input2.classList.add('quiz-input')
                input2.setAttribute('type','text')
                input2.setAttribute('placeholder','Type here')

                let para3 = document.createElement('p')
                para3.classList.add('quiz-p')
                para3.innerHTML=thirdpara

                let input3 = document.createElement('input')
                input3.classList.add('quiz-input')
                input3.setAttribute('type','text')
                input3.setAttribute('placeholder','Type here')

            quizDiv.appendChild(para1)
            quizDiv.appendChild(input1)
            quizDiv.appendChild(para2)
            quizDiv.appendChild(input2)
            quizDiv.appendChild(para3)
            quizDiv.appendChild(input3)

        this.div.insertBefore(quizDiv,this.pointsDiv)

    }

}



class CanvasDiv extends TwoBtnDiv {

    constructor(prevPg,currentPg,nextPg,secondPg,imgPath,list, cnvWinPara,cnvIntroPara){

        super(prevPg,currentPg,nextPg,secondPg,imgPath,list,)
        
        this.cnvWinPara=cnvWinPara
        this.cnvIntroPara=cnvIntroPara

        this.div.removeChild(this.imgDiv)   
        this.div.removeChild(this.textDiv) 

            let gameDiv = document.createElement('div')
            gameDiv.setAttribute('id','P6gameDiv')
            this.gameDiv=gameDiv

                let cnvBtnDiv = document.createElement('div')
                cnvBtnDiv.setAttribute('id','cnv-and-btn-div')
                this.cnvBtnDiv=cnvBtnDiv

                let cnvWin = document.createElement('div')
                cnvWin.setAttribute('id','canvas-win')
                this.cnvWin=cnvWin

                    let cnvPara1 = document.createElement('p')
                    cnvWin.appendChild(cnvPara1)
                    cnvPara1.innerHTML=`${this.cnvWinPara}` //insert on-canvas-win para

                let cnvIntro = document.createElement('div')
                cnvIntro.setAttribute('id','canvas-intro')
                this.cnvIntro = cnvIntro

                    let cnvPara2 = document.createElement('p')
                    cnvIntro.appendChild(cnvPara2)
                    cnvPara2.innerHTML=`${this.cnvIntroPara}` //intro para before canvas game

                let cnv = document.createElement('canvas')
                cnv.setAttribute('id','my-canvas')
                cnv.width = '340'
                cnv.height= '350'
                this.cnv=cnv

            this.gameDiv.appendChild(this.cnvBtnDiv)
            this.gameDiv.appendChild(this.cnvWin)
            this.gameDiv.appendChild(this.cnvIntro)
            this.gameDiv.appendChild(this.cnv)

        this.div.insertBefore(this.gameDiv,this.pointsDiv)

        this.buttonDiv.setAttribute('id', 'cnv-pg-btns')
        this.buttonDiv.classList.add('canvas-div')

            let swimStart = document.createElement('button')
            swimStart.setAttribute('id','start-button')
            swimStart.classList.add('btn-style', 'btn-cnv')
            swimStart.innerHTML='Swim'
            this.swimStart = swimStart

            let swimRestart = document.createElement('button')
            swimRestart.setAttribute('id','restart-btn')
            swimRestart.classList.add('btn-style', 'btn-cnv')
            swimRestart.innerHTML='Swim'
            this.swimRestart=swimRestart

            this.backBtn.setAttribute('id','hiddenBtnP6Back')
            this.forwardBtnA.setAttribute('id', 'hiddenBtnP6A')
            this.forwardBtnA.classList.add('hidden-btn')
            this.forwardBtnB.setAttribute('id','hiddenBtnP6B')
            this.forwardBtnB.classList.add('hidden-btn')

        this.buttonDiv.insertBefore(this.swimStart,this.forwardBtnA)
        this.buttonDiv.insertBefore(this.swimRestart,this.restartBtn)

    }

}











class EndDiv extends OneBtnDiv{

}


let introDiv = new IntroDiv ( //currentPg, nextPg, headerImg, subheaderImg,imgPath,list

    'INTRO',

    1,

    "./IMAGES/ADVENTURES-OF-A-PENGUIN.png",

    "./IMAGES/POLLY-FINDS-A-LOST-TREASURE.png",

    "./IMAGES/0.IMG-INTRO.jpg",

    `<li>The aim of this game is to find a lost <br>
    treasure and finish with positive points</li>
    <li>Going forward earns you points</li>
    <li>Going backwards leads to negative points</li>`

)

let P1 = new FirstPageDiv( //prevPg,currentPg,nextPg,imgPath,list

    `LOSE`,1,2,

    './IMAGES/1.IMG.jpg',

    `<li>The great march of the baby penguins had begun.</li>
    <li>Their parents had left them weeks ago to fend for themselves.</li>
    <li>It was time to head North.</li>
    <li>Unfortunately, Polly was a bit late to join them and was left behind! :(</li>
    <li>In their rush, the other penguins also failed to notice that Polly was missing!</li>
    <li>Should Polly stay behind, or A: head North to catch up with the other penguins?</li>`


)

let P2 = new TwoBtnDiv( //prevPg,currentPg,nextPg,secondPg,imgPath,list

    1,2,3,11,

    './IMAGES/2.IMG.jpg',

    `<li>Polly decided to follow the footsteps of the others</li>
    <li>After a while, she looked around and found that the footsteps of her friends had vanished</li>
    <li>There had been a blizzard overnight which had covered their tracks.</li>
    <li>Polly wondered what to do next</li>
    <li>Should she head back to where she started from, A: continue to head north to catch up with her friends, or B: head towards a dark object in the distance to her west.</li>
`
)

let P3 = new OneBtnDiv( //prevPg,currentPg,nextPg,imgPath,list

    2,3,4,
    
    './IMAGES/3.IMG.jpg',
    
    `<li>Polly came up to an ice cave and decided to go in.</li>
    <li>After a mile of walking through the slippery tunnel, she found some markings on the wall</li>
    <li>Yay! Her friends had not forgotten her after all and had left her a quiz to complete.</li>
    <li>Should she go back to the start, or A: complete the quiz? </li>`

)

let P4 = new QuizDiv( //prevPg,currentPg,nextPg,imgPath,list,firstpara,secondpara,thirdpara
    
    3, 4, 5,

    null,

    `<li>Having completed the quiz, a crack appears on the wall next to the quiz. Should Polly head back the way she came or A: try to make her way through the crack?</li>`,

    `What is the name of the largest species of penguins on Earth?`,

    `Where are these penguins found?`,

    `How do penguins keep warm? They:`

)

let P5 = new OneBtnDiv( //prevPg,currentPg,nextPg,imgPath,list

    4,5,6,

    './IMAGES/5.IMG.jpg',

    `<li>When Polly emerged from the other side of the crack she found herself in a rocky cavern.</li>
    <li>Bits of penguin feathers on the floor made her realise that her friends had taken shelter here from the blizzard.</li>
    <li>She walked deeper into the cavern and found an underground river flowing at the end of it.</li>
    <li>"They must have swam out through here", Polly thought. Should she go back the way she came, or A: jump into the river?</li>
    <li>Note: If she jumps in, she will surely encounter predators.</li>`

)

let P6 = new CanvasDiv ( //prevPg,currentPg,nextPg,secondPg, imgPath,list,cnvWinPara,cnvIntroPara 

    5,6,7,37,null,null,

    `YOU MADE IT!!! Do you still want Polly to go back the way she came?
    Or A: continue on in search of her friends, or B: roam around aimlessly?`,

    `Click 'Swim' and tap anywhere on the game window to help Polly get past dangerous predators and activate the next stage of the adventure! <br>
    You can click 'Swim' again to take Polly to the start. If you reach the finishing line you get 20 points. <br>Otherwise, you get negative points and you lose the game.`



)

let P7 = new OneBtnDiv ( //prevPg,currentPg,nextPg,imgPath,list

    6,7,8,

    './IMAGES/7.IMG.jpg',

    `<li>"Phew!", thought Polly. That was a close call! She was lucky to be alive!</li>
    <li>The river carried her out of the underground system and into daylight. To her delight, she spotted her friends in the distance. She crawled out onto the icy bank and began to waddle towards her friends in the distance.But there was one more hurdle to overcome. </li>   
    <li>Has Polly had enough for the day? Should she head back and try a different route, or A: should she go ahead and face the next hurdle?</li>
`
)

let P8 = new QuizDiv( //prevPg,currentPg,nextPg, imgPath, list,firstpara,secondpara,thirdpara

    7,8,9, null,

    `<li>Surely its time for Polly to run back, or A: does she still want to brave it? </li>`,

    `Antarctic wolves are white in colour. What is the name given to the ability of animals to blend in with their surroundings?`,

    `Wolves are ancestors of:`,

    `Wolves travel in groups called:`

)

let P9 = new TwoBtnDiv ( //prevPg,currentPg,nextPg,secondPg,imgPath,list

    8,9,10,27,

    './IMAGES/9.IMG.jpg',

    `<li>Luckily, Mr Wolf was distracted by something and did not spot Polly sneaking past it</li>
    <li>At long last Polly was able to join her friends who screeched in joy at seeing their friend alive and well.</li>
    <li>Polly did not find any gold or diamond on her dangerous adventure but she found the greatest treasure of all: her friends. </li>
    <li>Does Polly still wish to go back the way she came, or A: join her friends on a new adventure, or B: wave her friends goodbye as they continue on their way.></li>
`
)

let P10 = new LastPageDiv( //prevPg,currentPg,nextPg,imgPath,list

    9, 10,'WIN',

    './IMAGES/10.IMG.jpg',

    `<li>It was time to finally take the plunge and swim out into the big and scary but beautiful world beyond...</li>`

)



let P11 = new TwoBtnDiv (//prevPg,currentPg,nextPg,secondPg,imgPath,list

    2,11,12,15,

    null,

    `<li>As Polly approached the dark object, she realised it was a large rock.</li>
    <li>Behind the rock was the entrance to a cave with a long tunnel</li>
    <li>Opposite the cave, in the distance was a large glacier.</li>
    <li>Something appeared to be moving on the glacier</li>
    <li>Should Polly head back to where she started from, A: continue through the tunnel, or B: head towards the glacier.</li>`

)

let P12 = new TwoBtnDiv (//prevPg,currentPg,nextPg,secondPg,imgPath,list

    11,12,13,14,

    null,

    `<li>The tunnel forked into two.</li>
    <li>The fork on the left seemed to carry on forever into the darkness while the one on the right had a spot of light at the end.</li>
    <li>Polly wondered what to do.</li>
    <li>Should she head back to where she started from, A: head into the dark tunnel, or B: make her way towards the light.</li>`

)

let P13 = new LastPageDiv( //prevPg,currentPg,nextPg,imgPath,list

    12, 13,'LOSE',

    null,

   `<li>Oops! Turns out it was a dead end. Also her entrance into the cave had awakened another lone penguin which was asleep in the corner</li>
   <li>The other penguin began to wrestle with Polly. It was not ready to share its territory with her. They fought to the bitter end and that was the end of that.</li>`

)

let P14 = new LastPageDiv (//prevPg,currentPg,nextPg,imgPath,list

    13,14,'WIN',

    null,

    `<li>Polly came out into the light and realised that she had accidentally managed to find a short cut to her 
    friends who were waiting for her at the waters edge. 
    </li>
    <li>They ran towards and lead her towards the ocean screeching in happiness. </li>
    <li>One by one, they dived into the water and swam out into the vast ocean beyond. Some day they were going to
        return back to their home like their parents to lay eggs and start the great adventure all over again.
    </li>`

)


let win = new LoseorWinDiv(//prevPg, currentPg,nextPg,imgPath,list

    null,'WIN','',

    './IMAGES/smiley-face-png-transparent-5.png',

    `<li>Yay! You are a winner!</li>
    <li>If you would like to play again and choose other paths for Polly, just click on the 'Start Again' button below.</li>
    <li>If you with to play other similar games, click on the 'End' button below which will calculate your final score as well as give you links to new games.</li>`

)

let lose = new LoseorWinDiv(//prevPg, currentPg,nextPg,imgPath,list

    null,'LOSE', '',

    './IMAGES/sad-face-transparent-background-2.png',

    `<li>Unfortunately, you have lost the game. </li>           
    <li>Click on 'Restart' to go back to the beginning, or 'New Games' if you want to try out a different adventure!</li>`


)