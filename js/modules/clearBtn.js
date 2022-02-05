import { removeClass } from "./removeClass.js";
import { variables } from "../script.js";

export function clearBtnFunc() {
  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', () => {
    variables.boxes.forEach((elem) => {
      removeClass(elem);
      elem.innerHTML = '';
    })
    variables.move = 0;
  })
};