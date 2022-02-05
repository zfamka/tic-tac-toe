import { removeClass } from './removeClass.js';
import { appState } from "../script.js";
import { ui } from "../script.js";


export function resetBtnFunc() {
  const resetBtn = document.querySelector('.resetScore');
  resetBtn.addEventListener('click', () => {
    appState.countX = 0;
    appState.countO = 0;
    ui.countFirstPlayer.innerHTML = 0;
    ui.countSecondPlayer.innerHTML = 0;

    ui.boxes.forEach((elem) => {
      removeClass(elem);
      elem.innerHTML = '';
    })
    ui.move = 0;
  })
};
