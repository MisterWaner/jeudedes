const btn5 = document.querySelector('#btn5');
const malcomAudio = document.querySelector('#malcomAudio');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

//Launch a music when the last button is clicked
btn1.addEventListener('click', () => {
  malcomAudio.pause();
});

btn2.addEventListener('click', () => {
  malcomAudio.pause();
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











