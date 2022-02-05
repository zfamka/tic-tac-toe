import { draw } from './modules/draw.js';
import { removeClass } from './modules/removeClass.js';
import { resetBtnFunc } from './modules/resetBtn.js';
import { clearBtnFunc } from './modules/clearBtn.js';

window.move = 0;
let countFirstPlayer = document.querySelector('.scoreX');
let countSecondPlayer = document.querySelector('.scoreO');
let countX = 0;
let countO = 0;
const boxes = document.querySelectorAll('.box');
const area = document.querySelector('.area');

resetBtnFunc();
clearBtnFunc();


document.querySelector('.area').addEventListener('click', (elem) => {
  if (elem.target.innerHTML) return;

  if (move % 2 == 0) {
    elem.target.classList.add('countX_X');
    elem.target.innerHTML = 'X';
  } else {
    elem.target.classList.add('countO_O');
    elem.target.innerHTML = 'O';
  }

  move++;
  check();
  setTimeout(() => {
    draw();
  }, 500);
})

function check() {
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
  ];
  for (let i = 0; i < arr.length; i++) {
    if (boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
      countX++;
      countFirstPlayer.innerHTML = countX;
      area.style = 'pointer-events: none;'
      setTimeout(() => {
        boxes.forEach((elem) => {
          if (move >= 0) {
            area.style = 'pointer-events: auto;'
            removeClass(elem);
            elem.innerHTML = '';
          }
        })
      }, 500);
      move = 0;
    } else if (boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O') {
      countO++
      countSecondPlayer.innerHTML = countO;
      area.style = 'pointer-events: none;'
      setTimeout(() => {
        boxes.forEach((elem) => {
          if (move >= 0) {
            area.style = 'pointer-events: auto;'
            removeClass(elem);
            elem.innerHTML = '';
          }
        })
      }, 500)
      move = 0;
    }
  }
}