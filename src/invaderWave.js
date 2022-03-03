import * as creator from "./createFunctions.js";
import state from "./state.js";

export function prepareInvadersWave(gameWorld) {
  // we don't want situation when previously fired laser collide with new invaders wave
  state.playerLasers.children.iterate(laser => {
    laser.disableBody(true, true);
  })

  creator.createInvaders(gameWorld);

  // each wave of invaders is a little faster vertically
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
