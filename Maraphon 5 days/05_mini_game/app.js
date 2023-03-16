const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
let time = 0;
let score = 0;
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const color = [
  '#fff',
  '#CD5C5C',
  '#CD5C5C',
  '#F08080',
  '#00FF00',
  '#FFDAB9',
  '#8A2BE2',
  '#C0C0C0',
  '#00FF00',
];

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.remove();
  board.innerHTML = `<h1>Score: <span class='primary'>${score}</h1></span>`;
}

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const { height, width } = board.getBoundingClientRect();

  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  setColor(circle);
  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function setColor(elem) {
  const color = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  elem.style.background = `linear-gradient(90deg, ${color} 0%, ${color2} 35%, ${color3} 100%)`;
  return elem;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * color.length);
  return color[index];
}
