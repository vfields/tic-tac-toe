class Game {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentTurn = playerOne;
    this.squares = ['', '', '', '', '', '', '', '', ''];
    /* brainstorm */
    this.firstTurn = playerOne;
  }
  pickSquare(player, squareNum) {
    if (this.currentTurn === player) {
      for (var i = 0; i < game.squares.length; i++) {
        if (squareNum === i && game.squares[i] === '') {
          this.squares[i] = player.token;
          return this.checkBoard();
          // can eventually be just this.checkBoard() I think
        }
        else if (squareNum === i && game.squares[i] !== '') {
          return `You have to pick a blank square!`
          // can likely be deleted eventually
        }
      }
    }
    else {
      return `It's not your turn!`
      // can likely be deleted eventually
    }
  } // ^^ refactor eventually, nested loops and conditionals
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
      return `keep playing`
    }
    else if (this.isWin()) {
      this.currentTurn.increaseWins();
      return `win, stop playing, reset game`
    }
    else if (this.isDraw()) {
      return `draw, stop playing, reset game`
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
  /* not sure about these... */
  //
  // checkBoard() {
  //   for (var i = 0; i < this.squares.length; i++) {
  //     if (this.squares[i] === '') {
  //       this.keepPlaying = true;
  //       return true;
  //     }
  //     else if (this.squares[i] !== '') {
  //       this.keepPlaying = false;
  //       return false;
  //     }
  //   }
  // }
  //
  // play() {
  //   //this.checkBoard();
  //   if (this.keepPlaying) {
  //     return `It's ${this.currentTurn}'s turn!`
  //   }
  //   else if (!this.keepPlaying) {
  //     // maybe... check winner?
  //   }
  // }
  //
  // // kind of feels like whose turn at the start of the game..
  // whoseTurn() {
  //   // new game, no one has won
  //   if (this.playerOne.wins === 0 && this.playerTwo.wins === 0) {
  //     // this.playerOne.turn = true;
  //   }
  // }
  // checkTurn(player) {
  //   if (this.currentTurn === player) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
}
