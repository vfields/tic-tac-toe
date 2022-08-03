class Game {
  constructor(playerOne, playerTwo) {
    // this.playerOne = new Player('playerOne', '🐶');
    // this.playerTwo = new Player('playerTwo', '🐱');
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.squares = ['', '', '', '', '', '', '', '', ''];
    /* brainstorm */
    this.keepPlaying = false;
    this.currentTurn = playerOne.token;
  }
  checkBoard() {
    for (var i = 0; i < this.squares.length; i++) {
      if (this.squares[i] === '') {
        this.keepPlaying = true;
      }
      else if (this.squares[i] !== '') {
        this.keepPlaying = false;
      }
    }
  }

  pickSquare(player, squareNum) {
    if (this.currentTurn === player.token) {
      for (var i = 0; i < game.squares.length; i++) {
        if (squareNum === i && game.squares[i] === '' && this.currentTurn === player.token) {
          this.squares[i] = player.token;
          // check the board?
          this.switchTurn();
        }
      }
    }
    else {
      return `It's not your turn!`
    }
  } // refactor eventually, nested loops and conditionals

  switchTurn() {
    if (this.currentTurn === playerOne.token) {
      this.currentTurn = playerTwo.token;
    }
    else if (this.currentTurn === playerTwo.token) {
      this.currentTurn = playerOne.token;
    }
  }

  /* not sure about these... */
  // kind of feels like whose turn at the start of the game..
  whoseTurn() {
    // new game, no one has won
    if (this.playerOne.wins === 0 && this.playerTwo.wins === 0) {
      this.playerOne.turn = true;
    }
  }

  play() {
    this.checkBoard();
    if (this.keepPlaying) {
      // play
    }
    else if (!this.keepPlaying) {
      // maybe... check winner?
    }
  }

  isWinning() {
    if (this.squares[0] === this.squares[1] && this.squares[1] === this.squares[2]) {
      return `Win!`
    }
    else if (this.squares[3] === this.squares[4] && this.squares[4] === this.squares[5]) {
      return `Win!`
    }
    else if (this.squares[6] === this.squares[7] && this.squares[7] === this.squares[8]) {
      return `Win!`
    }
    else if (this.squares[0] === this.squares[3] && this.squares[3] === this.squares[6]) {
      return `Win!`
    }
    else if (this.squares[1] === this.squares[4] && this.squares[4] === this.squares[7]) {
      return `Win!`
    }
    else if (this.squares[2] === this.squares[5] && this.squares[5] === this.squares[8]) {
      return `Win!`
    }

    else if (this.squares[0] === this.squares[4] && this.squares[4] === this.squares[8]) {
      return `Win!`
    }
    else if (this.squares[2] === this.squares[4] && this.squares[4] === this.squares[6]) {
      return `Win!`
    }
  }
}
