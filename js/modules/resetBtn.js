import { removeClass } from './removeClass.js';

let countFirstPlayer = document.querySelector('.scoreX');
let countSecondPlayer = document.querySelector('.scoreO');

export function resetBtnFunc() {
  let countX = 0;
  let countO = 0;
  const boxes = document.querySelectorAll('.box');
  const resetBtn = document.querySelector('.resetScore');
  resetBtn.addEventListener('click', () => {
    countX = 0;
    countO = 0;
    countFirstPlayer.innerHTML = 0;
    countSecondPlayer.innerHTML = 0;

    boxes.forEach((elem) => {
      removeClass(elem);
      elem.innerHTML = '';
    })
    move = 0;
  })
};
