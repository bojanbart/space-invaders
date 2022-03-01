import config from "./config.js";

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
  playerLasers: null,
  invaderLasers: null,
  invadersCount: 0,
  invadersFallSpeed: 0,
  isGameActive: false,

  setStartState: function () {
    this.invadersMoveDirection = "right";
    this.score = 0;
    this.lives = 3;
    this.invadersFallSpeed = config.invadersFallSpeed;
    this.isGameActive = true;
  },
  toggleInvadersMoveDirection: function () {
    if (this.invadersMoveDirection === "right") {
      this.invadersMoveDirection = "left";
    } else {
      this.invadersMoveDirection = "right";
    }
  },
};
