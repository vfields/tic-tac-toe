// global variables
var playerOne
var playerTwo
var game

// query selectors

// event listeners

// event handlers & functions

function resetGame() {
  playerOne = new Player('playerOne', '🐶');
  playerTwo = new Player('playerTwo', '🐱');
  game = new Game(playerOne, playerTwo);
  // return game;
}
