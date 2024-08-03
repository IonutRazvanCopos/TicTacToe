const game = document.getElementById('game');
const btnReset = document.getElementById('btnReset');
let gameEnds = false;

const options = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let array = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
let player = "X";

generateTable();

function generateTable() {
  const maxNr = 9;
  for (let i = 0; i < maxNr; ++i) {
    let e = document.createElement('div');
    e.classList.add('box');
    e.setAttribute('boxIndex', i);
    e.addEventListener('click', boxClicked);
    let lines = i / 3;
    let columns = i % 3;
    e.setAttribute('lines', lines);
    e.setAttribute('columns', columns);
    game.appendChild(e);
  }
  btnReset.addEventListener('click', resetGame);
  gameEnds = true;
}

function boxClicked() {
  const boxIndex = this.getAttribute("boxIndex");
  const lineIndex = Math.floor(boxIndex / 3);
  const colIndex = boxIndex % 3;
  if (array[lineIndex][colIndex] != null || !gameEnds) {
    return;
  }
  updateBox(this, lineIndex, colIndex);
  checkWin();
}

function updateBox(box, lineIndex, colIndex) {
  array[lineIndex][colIndex] = player;
  box.textContent = player;
}

function changePlayer() {
  player = (player == "X") ? "0" : "X";
  document.getElementById("player").textContent = `${player}`;
}

function resetGame() {
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            array[i][j] = null;
        }
    }
    Array.from(document.querySelectorAll('.box')).forEach(x => {
        x.textContent = "";
    });
    document.getElementById('winner').textContent = "";
    document.getElementById('player').textContent = player;
    btnReset.disabled = true;
    gameEnds = true;
}

function checkWin() {
  let winner = false;
  for (let i = 0; i < options.length; ++i) {
    const condition = options[i];
    const line1 = array[Math.floor(condition[0] / 3)][condition[0] % 3];
    const line2 = array[Math.floor(condition[1] / 3)][condition[1] % 3];
    const line3 = array[Math.floor(condition[2] / 3)][condition[2] % 3];

    if (line1 == null || line2 == null || line3 == null) {
      continue;
    } else if (line1 == line2 && line2 == line3) {
      winner = true;
      document.getElementById('winner').textContent = `Winner: ${player}`;
      break;
    }
  }
  if (winner) {
    gameEnds = false;
    btnReset.disabled = false;
  } else if (!array.flat().includes(null)) {
    gameEnds = false;
    btnReset.disabled = false;
    document.getElementById('winner').textContent = "Draw!";
  } else {
    changePlayer();
  }
}
