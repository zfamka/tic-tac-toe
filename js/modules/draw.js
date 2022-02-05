import { removeClass } from './removeClass.js';
import { appState } from "../script.js";
import { ui } from "../script.js";

export function draw() {
  if (appState.move == 9) {
    ui.boxes.forEach((elem) => {
      appState.move = 0;
      removeClass(elem);
      elem.innerHTML = '';
    })
  }
}