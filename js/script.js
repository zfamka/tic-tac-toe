import { draw } from './modules/draw.js';
import { removeClass } from './modules/removeClass.js';
import { resetBtnFunc } from './modules/resetBtn.js';
import { clearBtnFunc } from './modules/clearBtn.js';

export const appState = {
  move: 0,
  countX: 0,
  countO: 0,
}

export const ui = {

}

ui.countFirstPlayer = document.querySelector('.scoreX');
ui.countSecondPlayer = document.querySelector('.scoreO');
ui.area = document.querySelector('.area');
ui.boxes = document.querySelectorAll('.box');

clearBtnFunc();
resetBtnFunc();

document.querySelector('.area').addEventListener('click', (elem) => {
  if (elem.target.innerHTML) return;

  if (appState.move % 2 == 0) {
    elem.target.classList.add('countX_X');
    elem.target.innerHTML = 'X';
  } else {
    elem.target.classList.add('countO_O');
    elem.target.innerHTML = 'O';
  }

  appState.move++;
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
    if (ui.boxes[arr[i][0]].innerHTML == 'X' && ui.boxes[arr[i][1]].innerHTML == 'X' && ui.boxes[arr[i][2]].innerHTML == 'X') {
      appState.countX++;
      ui.countFirstPlayer.innerHTML = appState.countX;
      ui.area.style = 'pointer-events: none;'
      setTimeout(() => {
        ui.boxes.forEach((elem) => {
          if (appState.move >= 0) {
            ui.area.style = 'pointer-events: auto;'
            removeClass(elem);
            elem.innerHTML = '';
          }
        })
      }, 500);
      appState.move = 0;
    } else if (ui.boxes[arr[i][0]].innerHTML == 'O' && ui.boxes[arr[i][1]].innerHTML == 'O' && ui.boxes[arr[i][2]].innerHTML == 'O') {
      appState.countO++
      ui.countSecondPlayer.innerHTML = appState.countO;
      ui.area.style = 'pointer-events: none;'
      setTimeout(() => {
        ui.boxes.forEach((elem) => {
          if (appState.move >= 0) {
            ui.area.style = 'pointer-events: auto;'
            removeClass(elem);
            elem.innerHTML = '';
          }
        })
      }, 500)
      appState.move = 0;
    }
  }
}