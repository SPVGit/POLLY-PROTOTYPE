
let introDiv = new IntroDiv ( //currentPg, nextPg, headerImg, subheaderImg,imgPath,list

'INTRO',

1,

"./IMAGES/ADVENTURES-OF-A-PENGUIN.png",

"./IMAGES/POLLY-FINDS-A-LOST-TREASURE.png",

"./IMAGES/0.IMG-INTRO.jpg",

`<li>The aim of this game is to find a lost <br>
treasure and finish with positive points.</li>
<li>Going forward earns you points.</li>
<li>Going backwards leads to negative points.</li>`

);

let P1 = new FirstPageDiv( //prevPg,currentPg,nextPg,imgPath,list

    `LOSE`,1,2,

    './IMAGES/1.IMG.jpg',

    `<li>The great march of the baby penguins had begun.</li>
    <li>Their parents had left them weeks ago to fend for themselves.</li>
    <li>It was time to head North. Unfortunately, Polly was a bit late to join them and was left behind! :(</li>
    <li>In their rush, the other penguins also failed to notice that Polly was missing! Should Polly stay behind, or A: head North to catch up with the other penguins?</li>`

);

let P2 = new TwoBtnDiv( //prevPg,currentPg,nextPg,secondPg,imgPath,list

    1,2,3,11,

    './IMAGES/2.IMG.jpg',

    `<li>Polly decided to follow the footsteps of the others. After a while, she looked around and found that the footsteps of her friends had vanished.</li>
    <li>There had been a blizzard overnight which had covered their tracks. Polly wondered what to do next.</li>
    <li>Should she head back to where she started from, A: continue to head north to catch up with her friends, or B: head towards a dark object in the distance to her west?</li>
`
);

let P3 = new OneBtnDiv( //prevPg,currentPg,nextPg,imgPath,list

    2,3,4,
    
    './IMAGES/3.IMG.jpg',
    
    `<li>Polly came up to an ice cave and decided to go in.</li>
    <li>After a mile of walking through the slippery tunnel, she found some markings on the wall. Yay! Her friends had not forgotten her after all and had left her a quiz to complete.</li>
    <li>Should she go back, or A: complete the quiz? </li>`

);

let P4 = new QuizDiv( //prevPg,currentPg,nextPg,imgPath,list,firstpara,secondpara,thirdpara, Qnum1,Qnum2,Qnum3, hidBtnForwardA,inp1Length, inp2Length, inp3Length
    
    3, 4, 5,

    null,

    `<li>Complete the quiz to activate the forward button. A crack appears on the wall upon completion. Should Polly head back or A: make her way through the crack?</li>`,

    `What is the name of the largest species of penguins on Earth?`,

    `Where are these penguins found?`,

    `How do penguins keep warm? They:`,

    1,2,3,

    "hiddenBtnP4A",

    7,10,6

);

let P5 = new OneBtnDiv( //prevPg,currentPg,nextPg,imgPath,list

    4,5,6,

    './IMAGES/5.IMG.jpg',

    `<li>When Polly emerged from the other side of the crack she found herself in a rocky cavern. Bits of penguin feathers on the floor made her realise that her friends had taken shelter here from the blizzard.</li>
    <li>She walked deeper into the cavern and found an underground river flowing at the end of it. "They must have swam out from here", Polly thought. Should she go back, or A: jump into the river?</li>
    <li>Note: If she jumps in, she will surely encounter predators!</li>`

);

let P6 = new CanvasDiv ( //prevPg,currentPg,nextPg,secondPg,imgPath,list,gameDivId,canvasId,cnvWinPara,cnvIntroPara,hidBtnForwardA,hidBtnForwardB 

    5,6,7,20,null,null,'P6gameDiv','my-canvas',

    `YOU MADE IT!!! Do you want Polly to A: continue on in search of her friends, or B: roam around aimlessly?`,

    `Click 'Swim' and tap anywhere on the game window aside from the buttons to help Polly get past dangerous predators and activate the next stage of the adventure! You can click 'Swim' again to restart the swim. If you reach the finishing line you get lots of extra points. Otherwise, you get negative points and you lose the game.`,

    "hiddenBtnP6A",
    
    "hiddenBtnP6B"

);


let P7 = new OneBtnDiv ( //prevPg,currentPg,nextPg,imgPath,list

    6,7,8,

    './IMAGES/7.IMG.jpg',

    `<li>"Phew!", thought Polly. That was a close call! She was lucky to be alive!</li>
    <li>The river carried her out of the underground system and into daylight. To her delight, she spotted her friends in the distance. She crawled out onto the icy bank and began to waddle towards her friends in the distance. But there was one more hurdle. </li>   
    <li>Has Polly had enough for the day? Should she head back and try a different route, or A: should she go ahead and face the next hurdle?</li>
`
);

let P8 = new QuizDiv( //prevPg,currentPg,nextPg,imgPath,list,firstpara,secondpara,thirdpara, Qnum1,Qnum2,Qnum3,hidBtnForwardA, inp1Length, inp2Length, inp3Length
    
    7,8,9, null,

    `<li>Surely its time for Polly to run back, or A: does she still want to brave it? </li>`,

    `Antarctic wolves are white in colour. What is the name given to the ability of animals to blend in with their surroundings?`,

    `Wolves are ancestors of what domestic animal?`,

    `Wolves travel in groups called:`,

    4,5,6,

    "hiddenBtnP8A",

    10,3,5

);

let P9 = new TwoBtnDiv ( //prevPg,currentPg,nextPg,secondPg,imgPath,list

    8,9,10,19,

    './IMAGES/9.IMG.jpg',

    `<li>Luckily, Mr Wolf was distracted by something and did not spot Polly.</li>
    <li>At long last Polly was able to join her friends and screeched in joy at seeing them alive and well.</li>
    <li>Polly did not find any gold or diamond on her dangerous adventure but she found the greatest treasure of all: her friends! :)... </li>
    <li>Does Polly still wish to go back the way she came, or A: join her friends on a new adventure, or B: wave her friends goodbye as they continue on their way?</li>
`
);

let P10 = new LastPageDiv( //prevPg,currentPg,nextPg,imgPath,list

    9, 10,'WIN',

    './IMAGES/10.IMG.jpg',

    `<li>It was time to finally take the plunge and swim out into the big and scary, but beautiful world beyond...</li>`

);

let P11 = new TwoBtnDiv (//prevPg,currentPg,nextPg,secondPg,imgPath,list

    2,11,12,15,

    './IMAGES/11.IMG.jpg',

    `<li>As Polly approached the dark object, she realised it was a large rock. Behind the rock was the entrance to a cave with a long tunnel.</li>
    <li>Opposite the cave, in the distance was a large glacier.</li>
    <li>Something appeared to be moving on the glacier.</li>
    <li>Should Polly head back to where she started from, A: continue through the tunnel, or B: head towards the glacier?</li>`

);

let P12 = new TwoBtnDiv (//prevPg,currentPg,nextPg,secondPg,imgPath,list

    11,12,13,14,

    './IMAGES/12.IMG.jpg',

    `<li>The tunnel forked into two. The fork on the left seemed to carry on forever into the darkness while the one on the right had a spot of light at the end, but very sharp stalactites hanging from the ceiling.</li>
    <li>Polly wondered what to do. Should she head back to where she started from, A: head into the dark tunnel, or B: make her way towards the light.</li>`

);

let P13 = new LastPageDiv( //prevPg,currentPg,nextPg,imgPath,list

    12, 13,'LOSE',

    './IMAGES/13.IMG.png',

   `<li>Oops! Turns out it was a dead end. Also, her approach had awakened another lone penguin which was asleep in the corner.</li>
   <li>The other penguin began to wrestle with Polly. It was not ready to share its territory with her. They fought to the bitter end and that was the end of that ... :( ...</li>`

);

let P14 = new LastPageDiv (//prevPg,currentPg,nextPg,imgPath,list

    13,14,'WIN',

    './IMAGES/10.IMG.jpg',

    `<li>Polly came out into the light and realised that she had accidentally managed to find a short cut to her 
    friends who were waiting for her at the waters edge. 
    They ran towards her and led her towards the ocean screeching in happiness. </li>
    <li>One by one, they dived into the water and swam out into the vast ocean beyond. Some day, they were going to
        return back to their home like their parents to lay eggs and start the great adventure all over again.
    </li>`

);
let P15 = new OneBtnDiv ( //prevPg,currentPg,nextPg,imgPath,list

    11,15,16,

    './IMAGES/15.IMG.jpg',

    `<li>Polly walked towards the glacier. She came across a flock of penguins and screeched in excitement, but soon realised that they were not her friends.</li>
    <li>It was a different group of penguins. They pointed Polly in towards a direction where they thought they had seen her friends go.</li>   
    <li>Has Polly tired out now? Should she head back and try a different route, or A: should she go ahead and look for her friends?</li>
`
);

let P16 = new TwoBtnDiv (//prevPg,currentPg,nextPg,secondPg,imgPath,list

    15,16,18,17,

    './IMAGES/16.IMG.jpg',

    `<li>Polly came across an opening to an ice cave. There also appeared to be a hole on the floor on of the glacier. Polly wondered if the penguins she had met had referred to one of these.</li>
    <li>Should she go back and try another route, A: head into the cave, or B: climb down the hole?</li>`

);
let P17 = new LastPageDiv (//prevPg,currentPg,nextPg,imgPath,list

    16,17,'LOSE',

    './IMAGES/17.IMG.jpg',

    `<li>Polly decided to go down the hole.</li>
    <li>Unfortunately, this was a big mistake. </li>
    <li>She fell through the hole, got lost in a maze of underground tunnels and was never ever found again... :( ...</li>`

);

let P18 = new OneBtnDiv(//prevPg,currentPg,nextPg,imgPath,list

    16,18,5.11,

    './IMAGES/18.IMG.jpg',

    `<li>Polly entered the cave and started to walk down a tunnel which inclined downwards. It carried on for a long while and she started to get worried. </li>
    <li>Luckily, she came across a crack on the wall, just big enough for her to squeeze through. Should Polly head back, or A: be curious and check out whats on the other side of the crack?</li>`

);

let P19 = new LastPageDiv( //prevPg,currentPg,nextPg,imgPath,list

    9, 19,'LOSE',

    './IMAGES/19.IMG.jpg',

    `<li>Oops! Wrong move, that's not really the way to go about it! You can't just abandon your friends again, just when you've found them...</li>`

);

let P20 = new TwoBtnDiv(//prevPg,currentPg,nextPg,secondPg,imgPath,list

    6,20,24,21,

    './IMAGES/20.IMG.jpg',

    `<li>The killer whales bobbed up and down in river eyeing Polly hungrily as she waddled as far away from them as possible.</li>
    <li>Polly's random adventure was not in vain though. She soon came across something moving in the snow. Should Polly try to head back,  A: find out what it was, or B: continue to wander aimlessly? </li>`

);

let P21 = new TwoBtnDiv(//prevPg,currentPg,nextPg,secondPg,imgPath,list

    20, 21, 22, 23,

    './IMAGES/21.IMG.jpg',

    `<li>Sometimes the best things in life are encountered when we least expect them. Looks like Polly's curiousity paid off! A baby seal was rolling in the mud. Like Polly, he had been left behind by his parents and friends. He was super pleased to have found a new friend. Should Polly head back, A: stay with the seal, or B: wander around with him aimlessly?</li>`

);

let P22 = new LastPageDiv(//prevPg,currentPg,nextPg,imgPath,list

21,22,'WIN',

'./IMAGES/22.IMG.png',

`<li>Polly and the baby seal became best of friends.</li>
<li>When they were finally ready, they swam out into the sea in search of wild new adventures.</li>`

);

let P23 = new LastPageDiv (//prevPg,currentPg,nextPg,imgPath,list

21,23,'LOSE',

'./IMAGES/23.IMG.jpg',

`<li>Not all risks taken in life end successfully. Unfortunately, as Polly and the seal wandered around, the sky started to get very dark.</li>
<li>A blizzard came upon them. They tried to find a shelter but visibility was poor and they kept walking further into the icy desert without realising. Unfortunately, they lost each other and also got lost themselves, never to be seen again.</li>`

);

let P24 = new QuizDiv( //prevPg,currentPg,nextPg,imgPath,list,firstpara,secondpara,thirdpara, Qnum1,Qnum2,Qnum3, hidBtnForwardA,inp1Length, inp2Length, inp3Length

20, 24, 25,

null,

"Should Polly head back go to the killer whales, or A: continue to move forward?",

'Killer Whales are not whales They are actually a type of:',

'Another name for Killer Whale is:',

'Killer Whales are a type of fish. True/False',

7, 8, 9,

"hiddenBtnP24A",

7, 4, 5

);

let P25 = new OneBtnDiv( //prevPg,currentPg,nextPg,imgPath,list

24, 25, 26,

"./IMAGES/25.IMG.jpg",

`<li>A sudden screeching from behind made Polly whirl around sharply.</li>
<li>All hope was not lost in the end. One of her friends had actually made the effort to come back and look for Polly. They both hugged and then started to make their way to the other penguins who were still quite a distance away. Should Polly head back, or A: carry on forward with her friend?</li>`

);

let P26 = new OneBtnDiv( //prevPg,currentPg,nextPg,imgPath,list

25, 26, 27,

"./IMAGES/23.IMG.jpg",

`<li>A blizzard began, but fortunately there was a large icy rock nearby with a ledge where Polly and her friend could take shelter from the harsh winds.</li>
<li>They stayed there overnight, huddling together to keep warm. Eventually, the storm passed and the two penguins were on the move again.</li>`

);

let P27 = new OneBtnDiv( //prevPg,currentPg,nextPg,imgPath,list

26, 27, 9.11,

"./IMAGES/27.IMG.jpg",

`<li>It was steep climb down the rocky ledge.</li>
<li>In distance they could see their friends waiting for them at the waters edge.</li>`

);


let P511 = new NoBackOneBtnDiv( //prevPg,currentPg,nextPg,imgPath,list

null, 5.11, 6,

'./IMAGES/5.IMG.jpg',

`<li>Unfortunately, Polly slipped through the crack and fell, losing 10 points ... :( ...</li>
<li>She panicked and tried to climb back out but it was too high up for her. She could only move forward now. Polly found an underground river flowing nearby. You need to help her to swim down the river. </li>
<li>Note, she is sure to encounter predators in the water!</li>`


);

let P911 = new NoBackOneBtnDiv(//prevPg,currentPg,nextPg,imgPath,list

27, 9.11, 10,

"./IMAGES/9.IMG.jpg",

`<li>Unfortunately, Polly tripped over a small rock and fell causing her to lose 10 points ... :( ... Luckily, she was still okay.</li>
<li>At long last Polly was able to join her friends who screeched in joy at seeing their friend alive and well. Polly did not find any gold or diamond on her dangerous adventure but she found the greatest treasure of all: her friends.`

);

let win = new LoseorWinDiv(//prevPg, currentPg,nextPg,imgPath,list

    null,'WIN','END',

    './IMAGES/SMILEY-FACE.png',

    `<li>Yay! You are a winner!</li>
    <li>If you would like to play again and choose other paths for Polly, just click on the 'Restart' button below.</li>
    <li>If you wish to play other similar games, click on the 'End' button below which will link you to new games.</li>`

);

let lose = new LoseorWinDiv(//prevPg, currentPg,nextPg,imgPath,list

    null,'LOSE','END',

    './IMAGES/SAD-FACE.png',

    `<li>Unfortunately, you have lost the game. </li>           
    <li>Click on 'Restart' to go back to the beginning, or 'End' if you want to try out a different adventure!</li>`

);

let end = new EndDiv(//prevPg, currentPg,nextPg,imgPath,list

    null, 'END', null, 

    './IMAGES/ZLADYBUG.jpg','./IMAGES/ZELEPHANT.jpg','./IMAGES/ZMONKEY.jpg' , 
    
    `<li>Thank you for playing! :) ...</li>
    <li>Polly the Penguin may have had a rather lonely adventure on her very icy continent, but she does have many friends around the world in faaaaaaaar off places.</li>
    <li>There's Mintu the Monkey who needs your help to hide a bunch of tasty bananas from other rogue monkeys. Elinah the Elephant who needs to travel a long distance to find her baby who went missing and Leila the Ladybug who needs to capture as many aphids as she can find on a lettuce farm.</li>
    <li>Why not click on one of the links below to get to know these wonderful friends and go on wild adventures with them?</li>
    <li>If you would like to play Polly the Penguin again and try one of the other icy routes, just click on the 'Restart' button ... :) ... </li>`

);
