// global variables
var playerOne
var playerTwo
var game
var currentPlayer

// query selectors
var gameBoardText = document.querySelector('.game-board-text');
var gameGrid = document.querySelector('.tic-tac-toe-grid');
var squareOne = document.querySelector('#square-one');
var squareTwo = document.querySelector('#square-two');
var squareThree = document.querySelector('#square-three');
var squareFour = document.querySelector('#square-four');
var squareFive = document.querySelector('#square-five');
var squareSix = document.querySelector('#square-six');
var squareSeven = document.querySelector('#square-seven');
var squareEight = document.querySelector('#square-eight');
var squareNine = document.querySelector('#square-nine');

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
  currentPlayer = game.currentTurn;
  if (event.target.closest(".square").id === 'square-one') {
    game.pickSquare(currentPlayer, 0);
    renderToken(squareOne);
    updateGameBoardText();
  }
  else if (event.target.closest(".square").id === 'square-two') {
    game.pickSquare(currentPlayer, 1);
    renderToken(squareTwo);
    updateGameBoardText();
  }
  else if (event.target.closest(".square").id === 'square-three') {
    game.pickSquare(currentPlayer, 2);
    renderToken(squareThree);
    updateGameBoardText();
  }
  else if (event.target.closest(".square").id === 'square-four') {
    game.pickSquare(currentPlayer, 3);
    renderToken(squareFour);
    updateGameBoardText();
  }
  else if (event.target.closest(".square").id === 'square-five') {
    game.pickSquare(currentPlayer, 4);
    renderToken(squareFive);
    updateGameBoardText();
  }
  else if (event.target.closest(".square").id === 'square-six') {
    game.pickSquare(currentPlayer, 5);
    renderToken(squareSix);
    updateGameBoardText();
  }
  else if (event.target.closest(".square").id === 'square-seven') {
    game.pickSquare(currentPlayer, 6);
    renderToken(squareSeven);
    updateGameBoardText();
  }
  else if (event.target.closest(".square").id === 'square-eight') {
    game.pickSquare(currentPlayer, 7);
    renderToken(squareEight);
    updateGameBoardText();
  }
  else if (event.target.closest(".square").id === 'square-nine') {
    game.pickSquare(currentPlayer, 8);
    renderToken(squareNine);
    updateGameBoardText();
  }
}

function renderToken(square) {
  if (square.innerHTML === '') {
    square.innerHTML += `
    <span class="user-token">${currentPlayer.token}</span>
    `
  }
  else {
    alert('Oops! Please pick a blank square.')
  }
}

function updateGameBoardText() {
  var innerText = game.checkBoard()
  gameBoardText.innerHTML = '';
  gameBoardText.innerHTML += `${innerText}`;
}
