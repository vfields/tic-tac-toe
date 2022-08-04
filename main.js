// global variables
var playerOne
var playerTwo
var game
var currentPlayer

// query selectors
var gameGrid = document.querySelector('.tic-tac-toe-grid');

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
  }
  else if (event.target.closest(".square").id === 'square-two') {
    game.pickSquare(currentPlayer, 1);
  }
  else if (event.target.closest(".square").id === 'square-three') {
    game.pickSquare(currentPlayer, 2);
  }
  else if (event.target.closest(".square").id === 'square-four') {
    game.pickSquare(currentPlayer, 3);
  }
  else if (event.target.closest(".square").id === 'square-five') {
    game.pickSquare(currentPlayer, 4);
  }
  else if (event.target.closest(".square").id === 'square-six') {
    game.pickSquare(currentPlayer, 5);
  }
  else if (event.target.closest(".square").id === 'square-seven') {
    game.pickSquare(currentPlayer, 6);
  }
  else if (event.target.closest(".square").id === 'square-eight') {
    game.pickSquare(currentPlayer, 7);
  }
  else if (event.target.closest(".square").id === 'square-nine') {
    game.pickSquare(currentPlayer, 8);
  }
}
