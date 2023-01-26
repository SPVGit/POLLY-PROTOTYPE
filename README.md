
# POLLY-PROTOTYPE - WEB DEV GAME PROJECT BY SUBARNA PAUL VIGNARAJAH

## GAME DEVICE AVAILABILITY

This game has been developed to be available on mobile and tablet devices only. The two divs on HTML are designed to alert the player about this as well as to rotate their mobile/tablet to portrait mode.

## GAME PREMISE

This is an interactive choose your own adventure story prototype which is an MVP with the intention of expansion in future.
The aim of the game is help Polly the Penguin find a lost treasure. If she finds the treasure and ends with positive points, she wins the game. Negative points or not finding the treasure makes you lose the game.

The game involves reading the story and deciding which route Polly should take at the end of each page.
Moving forward earns one points, moving back makes one lose double points so making it harder to move back as one has to decide whether to sacrifice some points to move back and choose a different route. 

Some routes will have quizzes, canvas (and other games in future versions) to make it more interactive.
Successfully completing these games will allow player to move to the next page. Otherwise, depending on the game, one is either
forced to move back and lose points, or instantly lose the game with negative points.

## GAME STRUCTURE:

The main game has been created in a modular fashion using OOP in Javascript, which dynamically creates each div / page using DOM, so there are no 'game' divs in HTML. Styling of the divs was carried out by CSS. OOP has been used to create various pages, e.g. pages with one, two (or more in future versions) forward buttons as well as a back button. See ./JAVASCRIPT/OOP-CODE.js. Some pages only activate forward buttons on completion of a quiz or canvas game. There is also a win / lose page which does not allow the back feature but instead has an end button which leads to a page with placeholders for links to other games. All pages have a restart button to reload game, apart from the first page which has a start button. 

To create the different pages of the game, information such as the previous page, current page and forward page numbers as well as the story text are inserted into the various OOP super and subclasses. The data for these are all found under ./JAVASCRIPT/OOP-DATA.js. The idea is that the code will be reusable in future to create new stories by simply feeding in page numbers and story text without needing to create new code. 

Local storage also ensures, the present div / page can be restored if the window accidentally gets refreshed or closed.

## GAME OPERATION ALGORITHMS:

The code for button operation to open and close different pages are found under ./JAVASCRIPT/STORY-CODE.js. The code for the quiz games is found under ./JAVASCRIPT/QUIZ-CODE.js, and the canvas game code is found under ./JAVASCRIPT/CANVAS-CODE.js.

## NEXT STEPS:

- Ironing out any unseen issues

- Further modularization and optimization of OOP code, e.g., creating superclasses, subclasses and methods to control the functionality of various buttons, images and texts. 

- Creation of a JSON file. 

## RESOURCES:

The front page heading and subheading font images were obtained from: 
https://www.fontspace.com/sunny-spells-font-f68393

The heading font image was bent at: 
https://fontmeme.com/bend-images/

All the img-div images were obtained from: 
https://unsplash.com/

And cartoonized on:
https://goart.fotor.com/

All other images such as ticks,crosses and canvas game components were obtained from: 
http://clipart-library.com/ and https://pngtree.com/

Background music was from: 
https://pixabay.com/.

