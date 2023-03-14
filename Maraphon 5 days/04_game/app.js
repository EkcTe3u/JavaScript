const board = document.querySelector('#board');
const color = ['red', 'blue', 'green', 'yellow', 'purple'];
const SQUARES_NUMBER = 500;

const colors = ['red', 'blue', 'yellow', 'green'];
for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(elem) {
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
  elem.style.background = '#1d1d1d';
  elem.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
  const index = Math.floor(Math.random() * color.length);
  return colors[index];
}
