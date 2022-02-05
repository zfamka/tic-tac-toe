export function draw() {
  if (move == 9) {
    boxes.forEach((elem) => {
      move = 0;
      removeClass(elem);
      elem.innerHTML = '';
    })
  }
}