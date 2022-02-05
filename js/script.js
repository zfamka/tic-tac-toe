let move = 0;
let countX = 0;
let countO = 0;
let countFirstPlayer = document.querySelector('.scoreX');
let countSecondPlayer = document.querySelector('.scoreO');
const clearBtn = document.querySelector('.clear');
const resetBtn = document.querySelector('.resetScore');
const boxes = document.querySelectorAll('.box');
const area = document.querySelector('.area');

function draw() {
  if (move == 9) {
    boxes.forEach((elem) => {
      move = 0;
      removeClass(elem);
      elem.innerHTML = '';
    })
  }
}

function removeClass(remove) {
  remove.classList.remove('countX_X');
  remove.classList.remove('countO_O');
}

document.querySelector('.area').addEventListener('click', (elem) => {

  if (elem.target.innerHTML) return;

  if (move % 2 == 0) {
    elem.target.classList.add('countX_X');
    elem.target.innerHTML = 'X';
  } else {
    elem.target.classList.add('countO_O');
    elem.target.innerHTML = 'O';
  }

  move++;
  check();
  setTimeout(() => {
    draw();
  }, 500);
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
  ];
  for (let i = 0; i < arr.length; i++) {
    if (boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
      countX++;
      countFirstPlayer.innerHTML = countX;
      area.style = 'pointer-events: none;'
      setTimeout(() => {
        boxes.forEach((elem) => {
          if (move >= 0) {
            area.style = 'pointer-events: auto;'
            removeClass(elem);
            elem.innerHTML = '';
          }
        })
      }, 500);
      move = 0;
    } else if (boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O') {
      countO++
      countSecondPlayer.innerHTML = countO;
      area.style = 'pointer-events: none;'
      setTimeout(() => {
        boxes.forEach((elem) => {
          if (move >= 0) {
            area.style = 'pointer-events: auto;'
            removeClass(elem);
            elem.innerHTML = '';
          }
        })
      }, 500)
      move = 0;
    }
  }
}

(function clearBtnFunc() {
  clearBtn.addEventListener('click', () => {
    boxes.forEach((elem) => {
      removeClass(elem);
      elem.innerHTML = '';
    })
    move = 0;
  })
}());

(function resetBtnFunc() {
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
}());

