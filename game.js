class Game {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.firstTurn = playerOne;
    this.currentTurn = playerOne;
    this.squares = ['', '', '', '', '', '', '', '', ''];
  }
  pickSquare(player, squareNum) {
    for (var i = 0; i < this.squares.length; i++) {
      if (parseInt(squareNum) === i && this.squares[i] === '') {
        this.squares[i] = player.token;
        this.currentTurn.increaseTurns();
        this.checkBoard();
      }
    }
  }
  switchTurn() {
    if (this.currentTurn === playerOne) {
      this.currentTurn = playerTwo;
    }
    else {
      this.currentTurn = playerOne;
    }
  } // what if I had an array of winning conditions to check against in this function?
  // where the array lives as a property of the class
  isWin() {
    if (this.squares[0] !== '' && this.squares[0] === this.squares[1] && this.squares[1] === this.squares[2]) {
      return true;
    }
    else if (this.squares[3] !== '' && this.squares[3] === this.squares[4] && this.squares[4] === this.squares[5]) {
      return true;
    }
    else if (this.squares[6] !== '' && this.squares[6] === this.squares[7] && this.squares[7] === this.squares[8]) {
      return true;
    }
    else if (this.squares[0] !== '' && this.squares[0] === this.squares[3] && this.squares[3] === this.squares[6]) {
      return true;
    }
    else if (this.squares[1] !== '' && this.squares[1] === this.squares[4] && this.squares[4] === this.squares[7]) {
      return true;
    }
    else if (this.squares[2] !== '' && this.squares[2] === this.squares[5] && this.squares[5] === this.squares[8]) {
      return true;
    }
    else if (this.squares[0] !== '' && this.squares[0] === this.squares[4] && this.squares[4] === this.squares[8]) {
      return true;
    }
    else if (this.squares[2] !== '' && this.squares[2] === this.squares[4] && this.squares[4] === this.squares[6]) {
      return true;
    }
    else {
      return false;
    }
  }
  isDraw() {
    if (this.playerOne.turns === 5 || this.playerTwo.turns === 5) {
      return true;
    }
    else {
      return false;
    }
  }
  newGame() {
    this.squares = ['', '', '', '', '', '', '', '', ''];
    this.switchFirstTurn();
    this.currentTurn = this.firstTurn;
    this.playerOne.turns = 0;
    this.playerTwo.turns = 0;
  }
  checkBoard() {
    if (!this.isWin() && !this.isDraw()) {
      this.switchTurn();
    }
    else if (this.isWin()) {
      this.currentTurn.increaseWins();
    }
  }
  switchFirstTurn() {
    if (this.firstTurn === playerOne) {
      this.firstTurn = playerTwo;
    }
    else {
      this.firstTurn = playerOne;
    }
  }
}
