import * as creator from "./createFunctions.js";
import state from "./state.js";

export function prepareInvadersWave(gameWorld) {
  creator.createInvaders(gameWorld);

  // each wave of invaders is a little bit faster vertically
  state.invadersFallSpeed += 2;

  setVelocityForInvaders();
}

export function setVelocityForInvaders() {
  state.invadersL.children.iterate((invader) => {
    invader.setVelocityY(state.invadersFallSpeed);
  });
  state.invadersM.children.iterate((invader) => {
    invader.setVelocityY(state.invadersFallSpeed);
  });
  state.invadersS.children.iterate((invader) => {
    invader.setVelocityY(state.invadersFallSpeed);
  });
}
