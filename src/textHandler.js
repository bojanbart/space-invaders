import state from "./state.js";

export function updateScoreText() {
  state.scoreText.setText(`Score: ${state.score}`);
}

export function updateScoreTextGameOver() {
  state.scoreText.setText(`GAME OVER! Score: ${state.score}`);
}

export function updateLivesText() {
  state.livesText.setText(`Lives: ${state.lives}`);
}
