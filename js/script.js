import { draw } from './modules/draw.js';
import { removeClass } from './modules/removeClass.js';
import { resetBtnFunc } from './modules/resetBtn.js';
import { clearBtnFunc } from './modules/clearBtn.js';

let countFirstPlayer = document.querySelector('.scoreX');
let countSecondPlayer = document.querySelector('.scoreO');
const boxes = document.querySelectorAll('.box');
const area = document.querySelector('.area');
export const variables = {
  move: 0,
  countX: 0,
  countO: 0,
  boxes,
  countFirstPlayer,
  countSecondPlayer,
  area
}

resetBtnFunc();
clearBtnFunc();


document.querySelector('.area').addEventListener('click', (elem) => {
  if (elem.target.innerHTML) return;

  if (variables.move % 2 == 0) {
    elem.target.classList.add('countX_X');
    elem.target.innerHTML = 'X';
  } else {
    elem.target.classList.add('countO_O');
    elem.target.innerHTML = 'O';
  }

  variables.move++;
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
    if (variables.boxes[arr[i][0]].innerHTML == 'X' && variables.boxes[arr[i][1]].innerHTML == 'X' && variables.boxes[arr[i][2]].innerHTML == 'X') {
      variables.countX++;
      variables.countFirstPlayer.innerHTML = variables.countX;
      variables.area.style = 'pointer-events: none;'
      setTimeout(() => {
        variables.boxes.forEach((elem) => {
          if (variables.move >= 0) {
            variables.area.style = 'pointer-events: auto;'
            removeClass(elem);
            elem.innerHTML = '';
          }
        })
      }, 500);
      variables.move = 0;
    } else if (variables.boxes[arr[i][0]].innerHTML == 'O' && variables.boxes[arr[i][1]].innerHTML == 'O' && variables.boxes[arr[i][2]].innerHTML == 'O') {
      variables.countO++
      variables.countSecondPlayer.innerHTML = countO;
      variables.area.style = 'pointer-events: none;'
      setTimeout(() => {
        variables.boxes.forEach((elem) => {
          if (variables.move >= 0) {
            variables.area.style = 'pointer-events: auto;'
            removeClass(elem);
            elem.innerHTML = '';
          }
        })
      }, 500)
      variables.move = 0;
    }
  }
}