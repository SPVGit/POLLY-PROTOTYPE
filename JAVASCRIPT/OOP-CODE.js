
//OOP USED TO CREATE A SUPER-CLASS AND SUB-CLASSES WHICH BUILD THE VARIOUS DIVS. 
//DATA INPUT INTO THE CLASSES CAN BE FOUND IN THE OOP-DATA.JS FILE

//SUPER CLASS---------------------------------------------------------------------------

class OneBtnDiv { 

    constructor(prevPg,currentPg,nextPg,imgPath,list) {

        this.prevPg=prevPg;
        this.currentPg=currentPg;
        this.nextPg=nextPg;
        this.imgPath=imgPath;
        this.list=list;

        let body = document.getElementsByTagName('body')[0];

        let div = document.createElement('div');
        div.setAttribute('id',`P-${this.currentPg}`); //add current page number
        div.classList.add('story');
        this.div=div;
        
    
        let imgDiv = document.createElement('div');
        imgDiv.classList.add('img-Div');
        this.imgDiv = imgDiv;
    
        if(this.imgPath) {
            let imgTag = document.createElement('img');
            imgTag.classList.add('penguin');
            imgTag.setAttribute('src',`${this.imgPath}`); //add image path
            this.imgTag=imgTag;

            imgDiv.appendChild(imgTag);
        }
                        
        let pointsDiv = document.createElement('div');
        pointsDiv.classList.add('points-div');
        this.pointsDiv=pointsDiv;

        let strong = document.createElement('strong');
        strong.innerHTML = 'Points:';
        this.strong=strong;

        let span = document.createElement('span');
        span.innerHTML = 0;
    
        strong.appendChild(span);
        pointsDiv.appendChild(strong);
    
        let textDiv = document.createElement('div');
        textDiv.classList.add('story-text');
        this.textDiv=textDiv;

        let para = document.createElement('p');
        para.classList.add('bullet-points');
        this.para=para;

        let ol = document.createElement('ol');
        ol.innerHTML = `${this.list}`; // add the story here in list tags
        this.ol=ol;
    
        para.appendChild(ol);
        textDiv.appendChild(para);
    
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button-div');
        this.buttonDiv=buttonDiv;
    
        let backBtn = document.createElement('button');
        backBtn.classList.add('btn-style', `P-${this.prevPg}`); //add previous page number
        backBtn.innerHTML='Back';
        this.backBtn=backBtn;
    
        let forwardBtnA = document.createElement('button');
        forwardBtnA.classList.add('btn-style', `P-${this.nextPg}`); //add following page number
        forwardBtnA.innerHTML='A';
        this.forwardBtnA=forwardBtnA;
    
        let restartBtn = document.createElement('button');
        restartBtn.classList.add('btn-style','P-INTRO');
        restartBtn.innerHTML='Restart';
        this.restartBtn=restartBtn;
    
        buttonDiv.appendChild(backBtn);
        buttonDiv.appendChild(restartBtn);
        buttonDiv.appendChild(forwardBtnA);
        
    
        div.appendChild(imgDiv);
        div.appendChild(pointsDiv);
        div.appendChild(textDiv);
        div.appendChild(buttonDiv);
    
        body.appendChild(div);

    };

};

//SUBCLASSES------------------------------------------------------------------------------------

class NoBackOneBtnDiv extends OneBtnDiv{

    constructor(prevPg,currentPg,nextPg,imgPath,list){
        
        super(prevPg,currentPg,nextPg,imgPath,list)

        this.buttonDiv.removeChild(this.backBtn);

    };
    
};

//------------------------------------------------------------------------------------

class IntroDiv extends OneBtnDiv{ 

    constructor(currentPg, nextPg, headerImg, subheaderImg,imgPath,list){

        super(currentPg,nextPg,imgPath,list)

        this.headerImg = headerImg;
        this.subheaderImg=subheaderImg;
        this.nextPg=nextPg;
        this.list=list;
        this.imgPath=imgPath;

        let header = document.createElement('header');
        let headerImg1 = document.createElement('img');
        headerImg1.setAttribute('id','heading');
        headerImg1.setAttribute('src',`${this.headerImg}`); //add header image
        let subheaderImg1 = document.createElement('img');
        subheaderImg1.setAttribute('id','sub-heading');
        subheaderImg1.setAttribute('src',`${this.subheaderImg}`); //add subheader image

        header.appendChild(headerImg1);
        header.appendChild(subheaderImg1);

        this.imgDiv.classList.add('intro-img-div');
        this.imgTag.setAttribute('id','intro-penguin');
        this.imgTag.src=`${imgPath}`;

        this.textDiv.setAttribute('id','text-div');
        this.textDiv.classList.remove('story-text');
        this.para.classList.remove('bullet-points');
        let rulesPara = document.createElement('p');

        let rulesHeader = document.createElement('h2');
        rulesHeader.innerHTML='RULES OF THE GAME';

        rulesPara.appendChild(rulesHeader);
        this.textDiv.insertBefore(rulesPara,this.para);

        this.ol.innerHTML=`${this.list}`;
        let startBtn = document.createElement('button');
        startBtn.setAttribute('id','P-1btn');
        startBtn.classList.add(`P-${this.nextPg}`,'btn-style');
        startBtn.innerHTML=`Start`;

        this.buttonDiv.removeChild(this.backBtn);
        this.buttonDiv.removeChild(this.forwardBtnA);
        this.buttonDiv.removeChild(this.restartBtn);
        this.buttonDiv.appendChild(startBtn);
        
        this.div.classList.remove('story');
        this.div.setAttribute('id', 'P-INTRO');
        this.div.removeChild(this.pointsDiv);
        this.div.insertBefore(header,this.imgDiv);
        
    };

};

//------------------------------------------------------------------------------------

class FirstPageDiv extends OneBtnDiv{

    constructor(prevPg,currentPg,nextPg,imgPath,list){

        super(prevPg,currentPg,nextPg,imgPath,list)

        this.backBtn.innerHTML='Stay';
    };

};

//------------------------------------------------------------------------------------

class TwoBtnDiv extends OneBtnDiv{

    constructor(prevPg,currentPg,nextPg,secondPg,imgPath,list){

        super(prevPg,currentPg,nextPg,imgPath,list)

        this.secondPg=secondPg;

        let forwardBtnB = document.createElement('Button');
        forwardBtnB.classList.add('btn-style',`P-${secondPg}`);
        forwardBtnB.innerHTML='B';
        this.forwardBtnB=forwardBtnB;

        this.buttonDiv.appendChild(this.forwardBtnB);
    };

};

//------------------------------------------------------------------------------------

class NoBackTwoBtnDiv extends TwoBtnDiv{

    constructor(prevPg,currentPg,nextPg,secondPg,imgPath,list){
        
        super(prevPg,currentPg,nextPg,secondPg,imgPath,list)

        this.buttonDiv.removeChild(this.backBtn);

    };
    
};


//---------------------------------------------------------------------------------------

class QuizDiv extends OneBtnDiv{

    constructor(prevPg,currentPg,nextPg,imgPath,list,firstpara,secondpara,thirdpara, Qnum1,Qnum2,Qnum3, hidBtnForwardA, inp1Length, inp2Length, inp3Length){

        super(prevPg,currentPg,nextPg,imgPath,list)

        this.firstpara=firstpara;
        this.secondpara=secondpara;
        this.thirdpara=thirdpara;

        this.div.removeChild(this.imgDiv);
        
        let quizDiv = document.createElement('div');
        quizDiv.setAttribute('id','div-puzzle1');

        let para1 = document.createElement('p');
        para1.classList.add('quiz-p');
        para1.innerHTML=firstpara;

        let input1 = document.createElement('input');
        input1.classList.add('quiz-input');
        input1.setAttribute('id',`input${Qnum1}`);
        input1.setAttribute('type','text');
        input1.setAttribute('placeholder','Type here');
        input1.setAttribute('maxlength',`${inp1Length}`);

        let para2 = document.createElement('p');
        para2.classList.add('quiz-p');
        para2.innerHTML=secondpara;

        let input2 = document.createElement('input');
        input2.classList.add('quiz-input');
        input2.setAttribute('id',`input${Qnum2}`);
        input2.setAttribute('type','text');
        input2.setAttribute('placeholder','Type here');
        input2.setAttribute('maxlength',`${inp2Length}`);

        let para3 = document.createElement('p');
        para3.classList.add('quiz-p');
        para3.innerHTML=thirdpara;

        let input3 = document.createElement('input');
        input3.classList.add('quiz-input');
        input3.setAttribute('id',`input${Qnum3}`);
        input3.setAttribute('type','text');
        input3.setAttribute('placeholder','Type here');
        input3.setAttribute('maxlength',`${inp3Length}`);

        let tickImg = new Image();
        tickImg.src='./IMAGES/TICK.png';
        
        let crossImg = new Image();
        crossImg.src='';

        let tick1 = document.createElement('img');
        tick1.classList.add('hidden-elem', 'tickncross');
        tick1.setAttribute('id',`tick${Qnum1}`);
        tick1.src="./IMAGES/TICK.png";
        

        let tick2 = document.createElement('img');
        tick2.classList.add('hidden-elem', 'tickncross');
        tick2.setAttribute('id',`tick${Qnum2}`);
        tick2.src="./IMAGES/TICK.png";


        let tick3 = document.createElement('img');
        tick3.classList.add('hidden-elem', 'tickncross');
        tick3.setAttribute('id',`tick${Qnum3}`);
        tick3.src="./IMAGES/TICK.png";


        let cross1 = document.createElement('img');
        cross1.classList.add('shown-elem', 'tickncross');
        cross1.setAttribute('id',`cross${Qnum1}`);
        cross1.src="./IMAGES/CROSS.png";

        let cross2 = document.createElement('img');
        cross2.classList.add('shown-elem', 'tickncross');
        cross2.setAttribute('id',`cross${Qnum2}`);
        cross2.src="./IMAGES/CROSS.png";

        let cross3 = document.createElement('img');
        cross3.classList.add('shown-elem', 'tickncross');
        cross3.setAttribute('id',`cross${Qnum3}`);
        cross3.src="./IMAGES/CROSS.png";
    
        quizDiv.appendChild(para1);
        quizDiv.appendChild(input1);
        quizDiv.appendChild(cross1);
        quizDiv.appendChild(tick1);

        quizDiv.appendChild(para2);
        quizDiv.appendChild(input2);
        quizDiv.appendChild(cross2);
        quizDiv.appendChild(tick2);

        quizDiv.appendChild(para3);
        quizDiv.appendChild(input3);
        quizDiv.appendChild(cross3);
        quizDiv.appendChild(tick3);

        this.div.insertBefore(quizDiv,this.pointsDiv);

        this.forwardBtnA.setAttribute('id',`${hidBtnForwardA}`);
        this.forwardBtnA.classList.add('hidden-btn');
        
    };

};

//---------------------------------------------------------------------------------------

class CanvasDiv extends NoBackTwoBtnDiv {

    constructor(prevPg,currentPg,nextPg,secondPg,imgPath,list, gameDivId, canvasId, cnvWinPara,cnvIntroPara, /*hidBtnBack,*/ hidBtnForwardA, hidBtnForwardB){

        super(prevPg,currentPg,nextPg,secondPg,imgPath,list)
        
        this.cnvWinPara=cnvWinPara;
        this.cnvIntroPara=cnvIntroPara;

        this.div.removeChild(this.imgDiv);  
        this.div.removeChild(this.textDiv);

        let gameDiv = document.createElement('div');
        gameDiv.setAttribute('id',`${gameDivId}`);
        this.gameDiv=gameDiv;

        let cnvBtnDiv = document.createElement('div');
        cnvBtnDiv.setAttribute('id','cnv-and-btn-div');
        this.cnvBtnDiv=cnvBtnDiv;

        let cnvWin = document.createElement('div');
        cnvWin.setAttribute('id','canvas-win');
        this.cnvWin=cnvWin;

        let cnvPara1 = document.createElement('p');
        cnvWin.appendChild(cnvPara1);
        cnvPara1.innerHTML=`${this.cnvWinPara}`; //insert on-canvas-win para

        let cnvIntro = document.createElement('div');
        cnvIntro.setAttribute('id','canvas-intro');
        this.cnvIntro = cnvIntro;

        let cnvPara2 = document.createElement('p');
        cnvIntro.appendChild(cnvPara2);
        cnvPara2.innerHTML=`${this.cnvIntroPara}`; //intro para before canvas game

        
        let cnv = document.createElement('canvas');
        cnv.setAttribute('id',`${canvasId}`);
        cnv.width = window.innerWidth * 0.9;
        cnv.height= window.innerHeight * 0.6;
        this.cnv=cnv;

        this.gameDiv.appendChild(this.cnvBtnDiv);
        this.gameDiv.appendChild(this.cnvWin);
        this.gameDiv.appendChild(this.cnvIntro);
        this.gameDiv.appendChild(this.cnv);
        this.gameDiv.appendChild(this.pointsDiv);

        this.div.insertBefore(this.gameDiv,this.buttonDiv);

        this.buttonDiv.setAttribute('id', 'cnv-pg-btns');
        this.buttonDiv.classList.add('canvas-div');

        let swimStart = document.createElement('button');
        swimStart.setAttribute('id','start-button');
        swimStart.classList.add('btn-style', 'btn-cnv');
        swimStart.innerHTML='Swim';
        this.swimStart = swimStart;

        let swimRestart = document.createElement('button');
        swimRestart.setAttribute('id','restart-btn');
        swimRestart.classList.add('btn-style', 'btn-cnv');
        swimRestart.innerHTML='Swim';
        this.swimRestart=swimRestart;

        this.forwardBtnA.setAttribute('id', `${hidBtnForwardA}`);//hiddenBtnP6A
        this.forwardBtnA.classList.add('hidden-btn');
        this.forwardBtnB.setAttribute('id',`${hidBtnForwardB}`);//hiddenBtnP6B
        this.forwardBtnB.classList.add('hidden-btn');

        this.buttonDiv.insertBefore(this.swimStart,this.forwardBtnA);
        this.buttonDiv.appendChild(this.swimRestart);

    };

};

//---------------------------------------------------------------------------------------

class LastPageDiv extends OneBtnDiv{  //currentPg, nextPg, headerImg, subheaderImg,imgPath,list

    constructor(prevPg, currentPg,nextPg,imgPath,list){

        super(prevPg,currentPg,nextPg,imgPath,list)

        this.buttonDiv.removeChild(this.backBtn);
        this.forwardBtnA.innerHTML='Next';

    };

};

//---------------------------------------------------------------------------------------


class LoseorWinDiv extends LastPageDiv{

    constructor(prevPg, currentPg,nextPg,imgPath,list){

        super(prevPg,currentPg,nextPg,imgPath,list)

        this.imgTag.classList.add('face');
        this.forwardBtnA.innerHTML='End';
    };

};

//---------------------------------------------------------------------------------------


class EndDiv extends OneBtnDiv{//prevPg,currentPg,nextPg,imgPath,imgPath2,list

       constructor(prevPg,currentPg,nextPg,imgPath,imgPath2, imgPath3, list){

            super(prevPg,currentPg,nextPg,imgPath,list)

            this.div.setAttribute('id', `P-${currentPg}`);

            this.div.removeChild(this.pointsDiv);
            this.div.removeChild(this.textDiv);
            this.buttonDiv.removeChild(this.forwardBtnA);
            this.buttonDiv.removeChild(this.backBtn);

            this.div.insertBefore(this.textDiv,this.imgDiv);

            this.imgDiv.classList.add('space-between');
            this.imgTag.classList.add('end-Image');
      
            let imgTag2 = document.createElement('img');
            imgTag2.classList.add('penguin', 'end-Image');
            imgTag2.src=`${imgPath2}`;
            this.imgTag2=imgTag2;

            this.imgDiv.appendChild(this.imgTag2);

            let imgTag3 = document.createElement('img');
            imgTag3.classList.add('penguin', 'end-Image');
            imgTag3.src=`${imgPath3}`;
            this.imgTag3=imgTag3;

            this.imgDiv.appendChild(this.imgTag3);
       };

};



//---------------------------------------------------------------------------------------


