import { removeClass } from "./removeClass.js";
import { appState } from "../script.js";
import { ui } from "../script.js";

export function clearBtnFunc() {
  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', () => {
    ui.boxes.forEach((elem) => {
      removeClass(elem);
      elem.innerHTML = '';
    })
    appState.move = 0;
  })
};