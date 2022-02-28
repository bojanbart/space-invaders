import * as creator from "./createFunctions.js";
import * as interactor from "./interactionFunctions.js";
import state from "./state.js";

export function setNewInvadersWave(gameWorld) {
  creator.createInvaders(gameWorld);

  state.invadersFallSpeed += 2;

  setVelocityForInvaders();
  interactor.defineInvaderBordersInteraction(gameWorld);
  interactor.defineIvaderAndPlayerCollision(gameWorld);
  interactor.defineInvadersDestruction(gameWorld);
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
