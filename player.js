class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.turn = false;
    this.wins = 0;
  }
  increaseWins() {
    this.wins += 1;
    // this.wins++
  }
  /* brainstorm */
  switchTurn() {
    if (!this.turn) {
      this.turn = true;
    }
    else if (this.turn) {
      this.turn = false;
    }
  }
  pickSquare(game, squareNum) {
    for (var i = 0; i < game.squares.length; i++) {
      if (squareNum === i && game.squares[i] === '') {
        game.squares[i] = this.token;
      }
    }
    // would have to place in appropriate index...
    // like squareOne = i-1 (since it's index 0)
  }
}
