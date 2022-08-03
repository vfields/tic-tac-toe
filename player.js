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
  pickSquare(square) {
    
  }
}
