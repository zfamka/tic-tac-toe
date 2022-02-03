let move = 0;
let countFirstPlayer = document.querySelector('.countX');
let countSecondPlayer = document.querySelector('.countO');
let countX = 0;
let countO = 0;
const clearBtn = document.querySelector('.clear');
const boxes = document.querySelectorAll('.box');

document.querySelector('.area').addEventListener('click', (elem) => {

  if (elem.target.innerHTML) return;

  if (move % 2 == 0) {
    elem.target.innerHTML = 'X'
  } else {
    elem.target.innerHTML = 'O'
  }
  move++
  check()
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
  ]
  for (let i = 0; i < arr.length; i++) {
    if (boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
      countX++
      countFirstPlayer.innerHTML = `X = ${countX}`
      setTimeout(() => {
        for (let k = 0; k < boxes.length; k++) {
          boxes[k].innerHTML = ''
        }
      }, 200)
    } else if (boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O') {
      countO++
      countSecondPlayer.innerHTML = `O = ${countO}`
      setTimeout(() => {
        for (let k = 0; k < boxes.length; k++) {
          boxes[k].innerHTML = ''
        }
      }, 200)

    }
  }
}

clearBtn.addEventListener('click', () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = ''
  }
}) 