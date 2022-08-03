class Game {
  constructor() {
    this.playerOne = new Player('playerOne', '🐶');
    this.playerTwo = new Player('playerTwo', '🐱');
    this.squares = ['', '', '', '', '', '', '', '', ''];
    /* brainstorm */
    this.keepPlaying = false;
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
