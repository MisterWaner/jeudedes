//Affectation of DOM elements

const html = document.querySelector('html')
const body = document.querySelectorAll('body')
const btn5 = document.querySelector('#btn5');
const malcomAudio = document.querySelector('#malcomAudio');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

const sectionOne = document.querySelector('.sectionOne');
const sectionGame = document.querySelector('.sectionGame');
const newGameBtn = document.querySelector("#newGameBtn");
let player1 = document.querySelector('.gamerOne').innerHTML;
let player2 = document.querySelector('.gamerTwo').innerHTML;

//Affectation of dice
let dice1 = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-dice-1" viewbox="0 0 16 16">' +
'<circle cx="8" cy="8" r="1.5"/>' +
'<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>' +
'</svg>';

let dice2 = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="dice bi bi-dice-2" viewbox="0 0 16 16">' +
'<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>' +
'<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>' +
'</svg>';

let dice3 = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="dice bi bi-dice-3" viewbox="0 0 16 16">' +
'<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>' +
'<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>' +
'</svg>';

let dice4 = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="dice bi bi-dice-4" viewbox="0 0 16 16">' +
'<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>' +
'<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>' +
'</svg>';

let dice5 = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="dice bi bi-dice-5" viewbox="0 0 16 16">' +
'<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>' +
'<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>' +
'</svg>';

let dice6 = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="dice bi bi-dice-6" viewbox="0 0 16 16">' +
'<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>' +
'<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>' +
'</svg>';

const dices = ['', dice1, dice2, dice3, dice4, dice5, dice6];


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


//Function to edit the names when players want to start a new game

newGameBtn.addEventListener('click', () => {
editNames();
});

function editNames() {
  player1 = prompt(player1 + " Choisissez un pseudo");
  player2 = prompt(player2 + " Choisissez un pseudo");

 document.querySelector('p.gamerOne').innerHTML = player1;
 document.querySelector('p.gamerTwo').innerHTML = player2;
}





















