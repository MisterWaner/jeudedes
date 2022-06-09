const btn5 = document.querySelector('#btn5');
const malcomAudio = document.querySelector('#malcomAudio');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

const sectionOne = document.querySelector('.sectionOne')
const sectionTwo = document.querySelector('.sectionTwo')

//Launch a music when the last button is clicked
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

//Inscription Interface
function btn1Clicked() {
  if (btn1.clicked = true) {
    sectionOne.style.display = 'none';
    sectionTwo.style.display = 'block';
  } 
}

const btnP1 = document.querySelector('#btnP1');
const btnP2 = document.querySelector('#btnP2');





