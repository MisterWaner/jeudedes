//////////Affectation of DOM elements
//1st interface
const html = document.querySelector('html')
const body = document.querySelectorAll('body')
const btn5 = document.querySelector('#btn5');
const malcomAudio = document.querySelector('#malcomAudio');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const sectionOne = document.querySelector('.sectionOne');

//2nd interface
const sectionGame = document.querySelector('.sectionGame');
const newGameBtn = document.querySelector("#newGameBtn");
let player1 = document.querySelector('.gamerOne').innerHTML;
let player2 = document.querySelector('.gamerTwo').innerHTML;
const rollDice = document.querySelector('#rollBtn');
const holdScoreBtn = document.querySelector('#holdscoreButton');
const currentScore1 = document.querySelector('#currentScoreP1');
const currentScore2 = document.querySelector('#currentScoreP2');
const globalScore1 = document.querySelector('#score1');
const globalScore2 = document.querySelector('#score2');
const dice = document.querySelector('.dice')
const collectSound = document.querySelector('#collect');
const collectSound2 = document.querySelector('#collect2');
const winnerSound = document.querySelector('#winner');
const bipLoseSound = document.querySelector('#bipLose');


//Launch a music when btn 5 is clicked
btn1.addEventListener('click', () => {
  malcomAudio.pause();
  btn1Clicked();
});

btn2.addEventListener('click', () => {
  malcomAudio.pause();
  btn2Clicked();
});

btn3.addEventListener('click', () => {
  malcomAudio.pause();
});

btn4.addEventListener('click', () => {
  malcomAudio.pause();
});

btn5.addEventListener('click', () => {
  malcomAudio.play();
});

function btn2Clicked () {
  if (btn2.clicked = true) {
    btn2.innerHTML = "Mauvaise réponse, tant pis pour toi";
    btn2.style.background = "red";
  }
}

function mouseOutbtn2() {
  btn2.innerHTML = "NO";
  btn2.style.background = "none";
}

//When btn1 is clicked, the interface of the game appeared
function btn1Clicked() {
  if (btn1.clicked = true) {
    sectionOne.style.display = 'none';
    sectionGame.style.display = 'block';
    html.style.backgroundImage = 'none';
  } 
}



///////////////////Functions of the game

//Function to edit the names when players want to start a new game and player 1 begin
let canPlay = true;
const canPlay1 = document.querySelector('.puce1');
const canPlay2 = document.querySelector('.puce2');

function editNames() {
  

  document.querySelector('p.gamerOne').innerHTML = player1;
  document.querySelector('p.gamerTwo').innerHTML = player2;
}

//Affectation of dices
let dice1 = '<img src="./images/dice1.png" height="75px" width="75px alt="face 1">';
let dice2 = '<img src="./images/dice2.png" height="75px" width="75px alt="face 2">';
let dice3 = '<img src="./images/dice3.png" height="75px" width="75px alt="face 3">';
let dice4 = '<img src="./images/dice4.png" height="75px" width="75px alt="face 4">';
let dice5 = '<img src="./images/dice5.png" height="75px" width="75px alt="face 5">';
let dice6 = '<img src="./images/dice6.png" height="75px" width="75px alt="face 6">';

const dices = ['', dice1, dice2, dice3, dice4, dice5, dice6];



//Give a random Number between 1 and 6 include
function rollTheDice() {
  return Math.floor(Math.random() * (7 - 1) + 1);
}

//function to stock the score
function Player (roundScore, globalScore) {
  this.roundScore = roundScore;
  this.globalScore = globalScore
}

//object Joueur1 and Joueur2 
let joueur1 = new Player(0, 0, true);
let joueur2 = new Player(0, 0, false);

//initial score at starting game
let score = 0
let postRollTheDice;

//function called when click on "lancez le dé"

const startPlaying = () => {
  if (canPlay == true) {
    let play = rollTheDice();

    if (play == 1) { //player 1 is playing
      currentScore1.textContent = "0";
      canPlay1.style.display = 'none'; //player1 loses the hand 
      canPlay2.style.display = 'block';//player2 takes the hand
      play = 0;
      postRollTheDice = 1;
      joueur1.roundScore = 0;
      canPlay = false;
      bipLoseSound.play(); //sound when dice value is 1
    } else {
      postRollTheDice = play;
    }
    joueur1.roundScore = joueur1.roundScore + play; // current score is added
    dice.innerHTML = dices[play] //we can see the dice value with images
    currentScore1.textContent = joueur1.roundScore; //current score is shown in current score box
  }
  else {
    let play2 = rollTheDice()
    
    if (play2 == 1) {//same code but player2 is playing
      currentScore2.textContent = "0";
      canPlay1.style.display = 'block';//player1 takes the hand
      canPlay2.style.display = 'none';//player2 loses the hand
      canPlay = true;
      play2 = 0;
      postRollTheDice = 1;
      joueur2.roundScore = 0;
      bipLoseSound.play();
    } else {
      postRollTheDice = play2;
    }
    joueur2.roundScore = joueur2.roundScore + play2;//current score is added
    dice.innerHTML = dices[play2];//we can see the dice value with images
    currentScore2.textContent = joueur2.roundScore;//current score is shown in current score box
  }
}

//function called when click on "Enregistrez le score"

const saveScore = () => {
  

  if (canPlay == true) {
    currentScore1.innerHTML = "0";//current score for player 1 become 0 
    joueur1.globalScore = joueur1.globalScore + joueur1.roundScore;//currend score value is added to global score for player1
    collectSound.play();

    if (joueur1.globalScore < 100) {//if global score is under 100, player1 lose the hand and player2 takes it back
      globalScore1.textContent = joueur1.globalScore;
      joueur1.roundScore = 0;
      canPlay = false;
      canPlay1.style.display = 'none';
      canPlay2.style.display = 'block';
      dice.innerHTML = dices[0];
    } else if (joueur1.globalScore > 100) {//if global score is over 100, player1 wins the game
      alert(player1 + ' a gagné ! ');
      winnerSound.play();
    }
  } 
  else {//same code but for player 2
    currentScore2.innerHTML = "0";
    joueur2.globalScore = joueur2.globalScore + joueur2.roundScore;
    collectSound2.play();

    if (joueur2.globalScore < 100) {
      globalScore2.textContent = joueur2.globalScore;
      joueur2.roundScore = 0;
      canPlay = true;
      canPlay1.style.display = 'block';
      canPlay2.style.display = 'none';
      dice.innerHTML = dices[0];
    } else if (joueur2.globalScore > 100) {
      alert(player2 + ' a gagné ! ');
      winnerSound.play();
    }
  }
}

//Function to reinitiate and start a new game

const newGame = () => {
  
  //reinitiate the game in program
  joueur1.roundScore = 0;
  joueur1.globalScore = 0;
  joueur2.roundScore = 0;
  joueur2.globalScore = 0;

  //reinitiate in DOM
  globalScore1.textContent = "0";
  globalScore2.textContent = "0";
  currentScore1.textContent = "0";
  currentScore2.textContent = "0";
  dice.innerHTML = dices[0];
  canPlay1.style.display = 'block';
  canPlay2.style.display = 'none';
  player1 = prompt(player1 + " Choisissez un pseudo");
  player2 = prompt(player2 + " Choisissez un pseudo");
  document.querySelector('p.gamerOne').innerHTML = player1;
  document.querySelector('p.gamerTwo').innerHTML = player2;
}

newGameBtn.addEventListener('click', newGame);
rollDice.addEventListener('click', startPlaying);
holdScoreBtn.addEventListener('click', saveScore);

























