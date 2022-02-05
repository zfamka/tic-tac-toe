import { removeClass } from './removeClass.js';
import { variables } from "../script.js";


export function resetBtnFunc() {
  const resetBtn = document.querySelector('.resetScore');
  resetBtn.addEventListener('click', () => {
    variables.countX = 0;
    variables.countO = 0;
    variables.countFirstPlayer.innerHTML = 0;
    variables.countSecondPlayer.innerHTML = 0;

    variables.boxes.forEach((elem) => {
      removeClass(elem);
      elem.innerHTML = '';
    })
    variables.move = 0;
  })
};
