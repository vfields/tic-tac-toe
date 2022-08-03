class Game {
  constructor() {
    this.playerOne = new Player('playerOne', '🐶');
    this.playerTwo = new Player('playerTwo', '🐱');

    /* brainstorm */

    // this.squareOne = 'empty';
    // this.squareTwo = 'empty';
    // this.squareThree = 'empty';
    // this.squareFour = 'empty';
    // this.squareFive = 'empty';
    // this.squareSix = 'empty';
    // this.squareSeven = 'empty';
    // this.squareEight = 'empty';
    // this.squareNine = 'empty';
    this.squares = ['', '', '', '', '', '', '', '', ''];
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
  }
}
