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
        this.checkBoard();
      }
    }
  } // do we need to call checkBoard or can this be in the main?
  switchTurn() {
    if (this.currentTurn === playerOne) {
      this.currentTurn = playerTwo;
    }
    else if (this.currentTurn === playerTwo) {
      this.currentTurn = playerOne;
    }
  }
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
    if (this.squares[0] !== '' && this.squares[1] !== '' && this.squares[2] !== '' && this.squares[3] !== '' && this.squares[4] !== '' &&
        this.squares[5] !== '' && this.squares[6] !== '' && this.squares[7] !== '' && this.squares[8] !== '' && !this.isWin()) {
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
  }
  checkBoard() {
    if (!this.isWin() && !this.isDraw()) {
      this.switchTurn();
      return true;
    }
    else if (this.isWin()) {
      this.currentTurn.increaseWins();
      return false;
    }
    else {
      return false;
    }
  }
  switchFirstTurn() {
    if (this.firstTurn === playerOne) {
      this.firstTurn = playerTwo;
    }
    else if (this.firstTurn === playerTwo) {
      this.firstTurn = playerOne;
    }
  }
}
