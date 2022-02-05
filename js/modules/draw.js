import { removeClass } from './removeClass.js';
import { variables } from "../script.js";

export function draw() {
  if (variables.move == 9) {
    variables.boxes.forEach((elem) => {
      variables.move = 0;
      removeClass(elem);
      elem.innerHTML = '';
    })
  }
}