# Tic Tac Toe

Tic Tac Toe is a simple browser game implemented using HTML, CSS, and JavaScript. The game allows two players to play against each other on a 3x3 grid.

## Features

- Two-player game (X and O).
- Automatic winner detection after each move.
- Display of winning or draw message.
- Reset button to start a new game.

## Project Structure

- `index.html`: The main HTML file containing the basic structure of the page.
- `style.css`: The CSS file for styling the page.
- `main.js`: The JavaScript file containing the game logic.

## How to Play

1. Clone this repository or download the source files.
2. Open the `index.html` file in a browser.
3. Players take turns clicking on the grid to place their mark (X or O).
4. The game will automatically detect the winner or if it's a draw.
5. Use the reset button to start a new game.

## Implementation Details

### HTML

- The main element of the game is a `div` with the id `game`, which contains the game grid.
- The reset button has the id `btnReset` and is initially disabled.
- The text displaying the current player and the winner is managed by the elements with the ids `player` and `winner`.

### CSS

- Styling for the game grid and its cells.
- Styling for the reset button and status text.

### JavaScript

- `generateTable()`: This function creates the 3x3 game grid and adds the cells to the `game` element.
- `game.addEventListener('click', ...)`: Handles click events on the grid to record player moves.
- `changePlayer()`: Switches the current player.
- `resetGame()`: Resets the game to its initial state.
- `checkWin(count)`: Checks if a player has won.
- `gameOver(lines, columns, player)`: Checks the game state to determine if someone has won or if it's a draw.
