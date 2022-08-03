class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    // this.turn = false;
    this.wins = 0;
  }
  increaseWins() {
    this.wins += 1;
    // this.wins++
  }
}
