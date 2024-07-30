const game = document.getElementById('game');
const btnReset = document.getElementById('btnReset');
let gmov = false; // Am pus aici gmov, ca si o prescurtare a cuvantului gameOver

let player = "X", moves = 0;
const array = [[null, null, null],
            [null, null, null],
            [null, null, null]];

generateTable();
btnReset.addEventListener('click', resetGame);

game.addEventListener('click', (e) => {
    if (gmov) {
      return;
    }
    const clicktg = e.target;
    let lines = parseInt(clicktg.getAttribute('lines'));
    let columns = parseInt(clicktg.getAttribute('columns'));
    if (array[lines][columns]) {
        return;
    }
    array[lines][columns] = player;
    clicktg.innerHTML = player;
    ++moves;
    if(gameOver(lines, columns, player)) {
        alert(`Player ${player} wins!`);
        document.getElementById('winner').textContent = `Player ${player} wins!`;
        btnReset.disabled = false;
    } else if (moves == 9) {
        alert('Draw');
        document.getElementById('winner').textContent = `Draw!`;
        btnReset.disabled = false;
    } else {
        changePlayer();
    }
});

function changePlayer() {
    if (player == 'X') {
        player = "0";
    } else {
        player = "X";
        document.getElementById('player').textContent = player;
    }
    Array.from(document.querySelectorAll('div[lines]')).forEach(e => {
      e.textContext = null;
  });
  document.getElementById('player').textContent = player;
  if (Array.from(document.querySelectorAll('div[lines]')).every(e => e.textContent !== '')) {
      document.getElementById('btnReset').disabled = false;
  }
}

function resetGame() {
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            array[i][j] = null;
        }
    }
    Array.from(document.querySelectorAll('div[lines]')).forEach(x => {
        x.textContent = null;
        document.getElementById('winner').textContent = ``;
      });
      document.getElementById('player').textContent = player;
      moves = 0;
      btnReset.disabled = true;
      gmov = false;
}

function checkWin(count) {
  if (count == 3) {
    gmov = true;
    return true;
  }
  return false;
}

function gameOver(lines, columns, player) {
    let count = 0;
    for (let i = 0; i < 3; ++i) {
        if (array[lines][i] == player) {
            ++count;
        }
      }
      if (checkWin(count)) {
        return true;
      }
      count = 0;
      for (let i = 0; i < 3; ++i) {
        if (array[i][columns] == player) {
          ++count;
        }
      }
      if (checkWin(count)) {
        return true;
      }
      if (lines == columns) {
        count = 0;
        for (let i = 0; i < 3; ++i) {
          if (array[i][i] == player) {
            ++count;
          }
        }
      } else if (lines + columns == 2) {
        count = 0;
        for (let i = 0; i < 3; ++i) {
          if (array[i][3 - i - 1] == player) {
            ++count;
          }
        }
      }
      if (checkWin(count)) {
        return true;
      }
      return false;
}

function generateTable() {
    let lines, columns;
    const maxNr = 9;
    for (let i = 0; i < maxNr; ++i) {
        let e = document.createElement('div');
        lines = Math.round((i + 2) / 3) - 1;
        columns = Math.round(i % 3);
        e.setAttribute('lines', lines);
        e.setAttribute('columns', columns);
        game.appendChild(e);
    }
}
