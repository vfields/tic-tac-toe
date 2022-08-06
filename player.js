class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.turns = 0;
    this.wins = 0;
  }
  increaseTurns() {
    this.turns += 1;
  }
  increaseWins() {
    this.wins += 1;
  }
}
