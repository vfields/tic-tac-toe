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
        if (squareNum === i && game.squares[i] === '') {
          this.squares[i] = player.token;
          this.isWinning();
          // check the board?
          this.switchTurn();
        }
        else if (squareNum === i && game.squares[i] !== '') {
          return `You have to pick a blank square!`
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

  isWinning() {
    if (this.squares[0] !== '' && this.squares[0] === this.squares[1] && this.squares[1] === this.squares[2]) {
      return `Win!`
    }
    else if (this.squares[3] !== '' && this.squares[3] === this.squares[4] && this.squares[4] === this.squares[5]) {
      return `Win!`
    }
    else if (this.squares[6] !== '' && this.squares[6] === this.squares[7] && this.squares[7] === this.squares[8]) {
      return `Win!`
    }
    else if (this.squares[0] !== '' && this.squares[0] === this.squares[3] && this.squares[3] === this.squares[6]) {
      return `Win!`
    }
    else if (this.squares[1] !== '' && this.squares[1] === this.squares[4] && this.squares[4] === this.squares[7]) {
      return `Win!`
    }
    else if (this.squares[2] !== '' && this.squares[2] === this.squares[5] && this.squares[5] === this.squares[8]) {
      return `Win!`
    }
    else if (this.squares[0] !== '' && this.squares[0] === this.squares[4] && this.squares[4] === this.squares[8]) {
      return `Win!`
    }
    else if (this.squares[2] !== '' && this.squares[2] === this.squares[4] && this.squares[4] === this.squares[6]) {
      return `Win!`
    }
    else {
      return `No winning combinations at this time.`
    }
  }

  /* not sure about these... */
  
  play() {
    // this.checkBoard();
    if (this.keepPlaying) {
      return `It's ${this.currentTurn}'s turn!`
    }
    else if (!this.keepPlaying) {
      // maybe... check winner?
    }
  }

  // kind of feels like whose turn at the start of the game..
  whoseTurn() {
    // new game, no one has won
    if (this.playerOne.wins === 0 && this.playerTwo.wins === 0) {
      // this.playerOne.turn = true;
    }
  }
}
