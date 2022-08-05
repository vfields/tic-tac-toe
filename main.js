// global variables
var playerOne
var playerTwo
var game
var currentPlayer

// query selectors
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoWins = document.querySelector('.player-two-wins');
var gameBoardText = document.querySelector('.game-board-text');
var gameGrid = document.querySelector('.tic-tac-toe-grid');

/* refactor */

var squares = Array.from(document.querySelectorAll('.square'));

var squareOne = document.querySelector('.square-one');
var squareTwo = document.querySelector('.square-two');
var squareThree = document.querySelector('.square-three');
var squareFour = document.querySelector('.square-four');
var squareFive = document.querySelector('.square-five');
var squareSix = document.querySelector('.square-six');
var squareSeven = document.querySelector('.square-seven');
var squareEight = document.querySelector('.square-eight');
var squareNine = document.querySelector('.square-nine');

// event listeners
window.addEventListener('load', resetGame);
gameGrid.addEventListener('click', placeToken);

// event handlers & functions
function resetGame() {
  playerOne = new Player('playerOne', '🐶');
  playerTwo = new Player('playerTwo', '🐱');
  game = new Game(playerOne, playerTwo);
}

// var refactor = event.target.closet(".square")

function placeToken() {
  var squareID = event.target.id;
  currentPlayer = game.currentTurn;
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
  // else if (!game.isWin() && !game.isDraw()) {
  //   return `no need for a resest`
  // }
}

function newGame() {
  game.newGame();
  clearGrid();
  updateGameBoardText();
  // updatePlayerWinsDisplay(); // this IS redundant
}

function clearGrid() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
  }
}

function isSquareBlank () {
  
}

/* refactored */

 function renderToken(square) {
   console.log(square);
   if (square.innerHTML === '') {
     square.innerHTML += `
     <span class="user-token">${currentPlayer.token}</span>
     `
   }
   else {
     alert('Oops! Please pick a blank square.')
   }
 }
