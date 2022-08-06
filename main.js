// global variables
var playerOne
var playerTwo
var game

// query selectors
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoWins = document.querySelector('.player-two-wins');
var gameBoardText = document.querySelector('.game-board-text');
var gameGrid = document.querySelector('.tic-tac-toe-grid');
var squares = Array.from(document.querySelectorAll('.square'));

// event listeners
window.addEventListener('load', resetGame);
gameGrid.addEventListener('click', placeToken);

// event handlers & functions
function resetGame() {
  playerOne = new Player('playerOne', '🐶');
  playerTwo = new Player('playerTwo', '🐱');
  game = new Game(playerOne, playerTwo);
}

function placeToken() {
  var squareID = event.target.id;
  var currentPlayer = game.currentTurn;
  if (event.target.closest(".square").id === squareID && keepClicking()) {
    game.pickSquare(currentPlayer, squareID);
    renderGrid();
    updateGameBoardText();
    checkForNewGame();
  }
  else if(!keepClicking()) {
    alert('The game will reset in a moment!')
  }
}

function keepClicking() {
  if (!game.isWin() & !game.isDraw()) {
    return true;
  }
  else if (game.isWin() || game.isDraw()) {
    return false;
  }
}

function renderGrid() {
  for (var i = 0; i < game.squares.length; i++) {
    squares[i].innerHTML = '';
    squares[i].innerHTML += `
    <span class="user-token">${game.squares[i]}</span>
    `
  }
}

function updateGameBoardText() {
  gameBoardText.innerHTML = '';
  if (!game.isWin() && !game.isDraw()) {
    gameBoardText.innerHTML += `
    It's <span class="game-board-token">${game.currentTurn.token}</span>'s turn
    `
  }
  else if (game.isWin()) {
    updatePlayerWinsDisplay();
    gameBoardText.innerHTML += `
    <span class="game-board-token">${game.currentTurn.token}</span> won!
    `
  }
  else if (game.isDraw()) {
    gameBoardText.innerHTML += `
    It's a draw <span class="game-board-token">🙈</span>
    `
  }
}

function updatePlayerWinsDisplay() {
  playerOneWins.innerHTML = `${playerOne.wins}`;
  playerTwoWins.innerHTML = `${playerTwo.wins}`;
}

function checkForNewGame() {
  if (game.isWin() || game.isDraw()) {
    setTimeout(newGame, 3000);
  }
}

function newGame() {
  game.newGame();
  clearGrid();
  updateGameBoardText();
}

function clearGrid() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
  }
}

/* refactored */

// function keepClicking() {
//   if (!game.isWin() & !game.isDraw()) {
//     game.switchTurn();
//     return true;
//   }
//   else if (game.isWin()) {
//     this.currentTurn.increaseWins();
//     return false;
//   }
//   else {
//     return false;
//   }
// }

// this, as it is even currently used & written
// outside of the refactor is awfully close to game.checkBoard...
// how can you make them less repetitive?
