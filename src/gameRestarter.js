import state from "./state.js";
import * as creator from "./createFunctions.js";
import * as invaderWave from "./invaderWave.js";
import * as textHandler from "./textHandler.js";

const removeExistingInvaders = () => {
  const invaderList = [];

  state.invadersS.children.iterate((invader) => {
    invaderList.push(invader);
  });
  state.invadersM.children.iterate((invader) => {
    invaderList.push(invader);
  });
  state.invadersL.children.iterate((invader) => {
    invaderList.push(invader);
  });

  for (const invader of invaderList) {
    invader.disableBody(true, true);
    invader.destroy();
  }
};

const removeExistingLasers = () => {
  state.playerLasers.children.iterate((laser) => {
    laser.disableBody(true, true);
  });

  state.invaderLasers.children.iterate((laser) => {
    laser.disableBody(true, true);
  });
};

const resetScoreAndLives = () => {
  textHandler.updateScoreText();
  textHandler.updateLivesText();
};

export function restart(gameWorld) {
  state.setStartState();

  resetScoreAndLives();
  removeExistingInvaders();
  removeExistingLasers();

  creator.createInvaders(gameWorld);
  invaderWave.setVelocityForInvaders();
}
