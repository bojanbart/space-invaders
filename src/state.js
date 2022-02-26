export default {
  invadersS: null,
  invadersM: null,
  invadersL: null,
  player: null,
  score: 0,
  scoreText: null,
  lives: 3,
  livesText: null,
  game: null,
  cursors: null,
  invadersMoveDirection: null,

  setStartState: function () {
    this.invadersMoveDirection = "right";
    this.score = 0;
    this.lives = 3;
  },
  toggleInvadersMoveDirection: function () {
    if (this.invadersMoveDirection === "right") {
      this.invadersMoveDirection = "left";
    } else {
      this.invadersMoveDirection = "right";
    }
  },
};
