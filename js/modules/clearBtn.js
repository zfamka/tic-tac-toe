import { removeClass } from "./removeClass.js";

export function clearBtnFunc() {
  const boxes = document.querySelectorAll('.box');
  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', () => {
    boxes.forEach((elem) => {
      removeClass(elem);
      elem.innerHTML = '';
    })
    move = 0;
  })
};