import config from "./config.js";
import state from "./state.js";
import * as invaderWaveHandler from "./invaderWave.js";
import { getShotObj } from "./shotPicker.js";
import * as gameRestarter from "./gameRestarter.js";
import * as textHandler from "./textHandler.js";

export function defineInvaderBordersInteraction() {
  state.invadersL.children.iterate((invader) => {
    invader.setCollideWorldBounds(true);
    invader.setName("invader");
    invader.body.onWorldBounds = true;
  });
  state.invadersM.children.iterate((invader) => {
    invader.setCollideWorldBounds(true);
    invader.setName("invader");
    invader.body.onWorldBounds = true;
  });
  state.invadersS.children.iterate((invader) => {
    invader.setCollideWorldBounds(true);
    invader.setName("invader");
    invader.body.onWorldBounds = true;
  });
}

const definePlayerBordersInteraction = () => {
  state.player.setCollideWorldBounds(true);
};

let invaderLastXAtWorldBoundsCollision = 0;

const toggleInvadersMoveDirection = (invader) => {
  if (Math.abs(invader.x - invaderLastXAtWorldBoundsCollision) < 6) {
    return;
  }

  state.toggleInvadersMoveDirection();
  invaderLastXAtWorldBoundsCollision = invader.x;
};

const handleGameOver = (scene) => {
  scene.physics.pause();
  textHandler.updateScoreTextGameOver();
  state.isGameActive = false;
  invaderLastXAtWorldBoundsCollision = config.width / 2;
};

const checkIfIvadersReachBottomBorder = (scene, invader) => {
  if (Math.abs(invader.y - config.height) < 4 + 32) {
    handleGameOver(scene);
  }
};

export function defineBordersInteractions(scene) {
  defineInvaderBordersInteraction();
  definePlayerBordersInteraction();

  scene.physics.world.on("worldbounds", (obj) => {
    if (obj.gameObject.name === "invader") {
      checkIfIvadersReachBottomBorder(scene, obj.gameObject);

      toggleInvadersMoveDirection(obj.gameObject);
    }

    if (obj.gameObject.name === "laser") {
      obj.gameObject.disableBody(true, true);
    }
  });
}

const handlePlayerShot = () => {
  if (!state.isGameActive) {
    return;
  }

  const shot = getShotObj(
    state.playerLasers,
    state.player.body.x + 32,
    552,
    "laserWhite"
  );
  shot.setVelocityY(config.laserSpeed * -1);
};

const killInvader = (scene, invader) => {
  invader.disableBody(true, true);
  invader.destroy();

  state.invadersCount--;

  if (state.invadersCount === 0) {
    invaderWaveHandler.prepareInvadersWave(scene);

    defineInvaderBordersInteraction(scene);
    defineInvaderAndPlayerCollision(scene);
    defineInvadersDestruction(scene);
  }
};

export function definePlayerDestruction(scene) {
  scene.physics.add.overlap(
    state.player,
    state.invaderLasers,
    (player, laser) => {
      laser.disableBody(true, true);
      removeOneLive();
      checkIfThereAreSomeLivesLeft(scene);
    }
  );
}

const increaseScore = (valueToAdd) => {
  state.score += valueToAdd;
};

export function defineInvadersDestruction(scene) {
  scene.physics.add.overlap(
    state.playerLasers,
    state.invadersS,
    (laser, invader) => {
      killInvader(scene, invader);
      laser.disableBody(true, true);
      increaseScore(config.invaderSScore);
      textHandler.updateScoreText();
    }
  );

  scene.physics.add.overlap(
    state.playerLasers,
    state.invadersM,
    (laser, invader) => {
      killInvader(scene, invader);
      laser.disableBody(true, true);
      increaseScore(config.invaderMScore);
      textHandler.updateScoreText();
    }
  );

  scene.physics.add.overlap(
    state.playerLasers,
    state.invadersL,
    (laser, invader) => {
      killInvader(scene, invader);
      laser.disableBody(true, true);
      increaseScore(config.invaderLScore);
      textHandler.updateScoreText();
    }
  );
}

const handleGameRestart = (scene) => {
  if (state.isGameActive) {
    return;
  }

  gameRestarter.restart(scene);

  defineInvaderBordersInteraction(scene);
  defineInvaderAndPlayerCollision(scene);
  defineInvadersDestruction(scene);

  scene.physics.resume();
};

export function definePlayerShots(scene) {
  scene.input.keyboard.on("keyup-UP", () => {
    handlePlayerShot();
  });

  scene.input.keyboard.on("keyup-SPACE", () => {
    handlePlayerShot();
  });

  scene.input.keyboard.on("keyup-ENTER", () => {
    handleGameRestart(scene);
  });

  defineInvadersDestruction(scene);
}

export function defineIvadersFalling() {
  invaderWaveHandler.setVelocityForInvaders();
}

const checkIfThereAreSomeLivesLeft = (scene) => {
  if (state.lives <= 0) {
    handleGameOver(scene);
  }
};

const removeOneLive = () => {
  state.lives -= 1;
  textHandler.updateLivesText();
};

const handleInvaderAndPlayerCollision = (scene, invader) => {
  // no points to player ;)
  killInvader(scene, invader);

  removeOneLive();
  checkIfThereAreSomeLivesLeft(scene);
};

export function defineInvaderAndPlayerCollision(scene) {
  scene.physics.add.overlap(
    state.player,
    state.invadersL,
    (player, invader) => {
      handleInvaderAndPlayerCollision(scene, invader);
    }
  );
  scene.physics.add.overlap(
    state.player,
    state.invadersM,
    (player, invader) => {
      handleInvaderAndPlayerCollision(scene, invader);
    }
  );
  scene.physics.add.overlap(
    state.player,
    state.invadersS,
    (player, invader) => {
      handleInvaderAndPlayerCollision(scene, invader);
    }
  );
}
