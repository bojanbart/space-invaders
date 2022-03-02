import config from "./config.js";
import state from "./state.js";
import * as invaderWaveHandler from "./invaderWave.js";
import { getShotObj } from "./shotPicker.js";
import * as gameRestarter from "./gameRestarter.js";
import * as textHandler from "./textHandler.js";

export function defineInvaderBordersInteraction(gameWorld) {
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

const definePlayerBordersInteraction = (gameWorld) => {
  state.player.setCollideWorldBounds(true);
};

let invaderLastXAtWorldBoundsColision = 0;

const toggleInvadersMoveDirection = (invader) => {
  if (Math.abs(invader.x - invaderLastXAtWorldBoundsColision) < 6) {
    return;
  }

  state.toggleInvadersMoveDirection();
  invaderLastXAtWorldBoundsColision = invader.x;
};

const handleGameOver = (gameWorld) => {
  gameWorld.physics.pause();
  textHandler.updateScoreTextGameOver();
  state.isGameActive = false;
  invaderLastXAtWorldBoundsColision = config.width / 2;
};

const checkIfIvadersReachBottomBorder = (gameWorld, invader) => {
  if (Math.abs(invader.y - config.height) < 4 + 32) {
    handleGameOver(gameWorld);
  }
};

export function defineBordersInteractions(gameWorld) {
  defineInvaderBordersInteraction(gameWorld);
  definePlayerBordersInteraction(gameWorld);

  gameWorld.physics.world.on("worldbounds", (obj) => {
    if (obj.gameObject.name === "invader") {
      checkIfIvadersReachBottomBorder(gameWorld, obj.gameObject);

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

const killInvader = (gameWorld, invader) => {
  invader.disableBody(true, true);
  invader.destroy();

  state.invadersCount--;

  if (state.invadersCount === 0) {
    invaderWaveHandler.prepareInvadersWave(gameWorld);

    defineInvaderBordersInteraction(gameWorld);
    defineIvaderAndPlayerCollision(gameWorld);
    defineInvadersDestruction(gameWorld);
  }
};

export function definePlayerDestruction(gameWorld) {
  gameWorld.physics.add.overlap(
    state.player,
    state.invaderLasers,
    (player, laser) => {
      laser.disableBody(true, true);
      removeOneLive();
      checkIfThereAreSomeLivesLeft(gameWorld);
    }
  );
}

const increaseScore = (valueToAdd) => {
  state.score += valueToAdd;
};

export function defineInvadersDestruction(gameWorld) {
  gameWorld.physics.add.overlap(
    state.playerLasers,
    state.invadersS,
    (laser, invader) => {
      killInvader(gameWorld, invader);
      laser.disableBody(true, true);
      increaseScore(config.invaderSScore);
      textHandler.updateScoreText();
    }
  );

  gameWorld.physics.add.overlap(
    state.playerLasers,
    state.invadersM,
    (laser, invader) => {
      killInvader(gameWorld, invader);
      laser.disableBody(true, true);
      increaseScore(config.invaderMScore);
      textHandler.updateScoreText();
    }
  );

  gameWorld.physics.add.overlap(
    state.playerLasers,
    state.invadersL,
    (laser, invader) => {
      killInvader(gameWorld, invader);
      laser.disableBody(true, true);
      increaseScore(config.invaderLScore);
      textHandler.updateScoreText();
    }
  );
}

const handleGameRestart = (gameWorld) => {
  if (state.isGameActive) {
    return;
  }

  gameRestarter.restart(gameWorld);

  defineInvaderBordersInteraction(gameWorld);
  defineIvaderAndPlayerCollision(gameWorld);
  defineInvadersDestruction(gameWorld);

  gameWorld.physics.resume();
};

export function definePlayerShots(gameWorld) {
  gameWorld.input.keyboard.on("keyup-UP", () => {
    handlePlayerShot();
  });

  gameWorld.input.keyboard.on("keyup-SPACE", () => {
    handlePlayerShot();
  });

  gameWorld.input.keyboard.on("keyup-ENTER", () => {
    handleGameRestart(gameWorld);
  });

  defineInvadersDestruction(gameWorld);
}

export function defineIvadersFalling() {
  invaderWaveHandler.setVelocityForInvaders();
}

const checkIfThereAreSomeLivesLeft = (gameWorld) => {
  if (state.lives <= 0) {
    handleGameOver(gameWorld);
  }
};

const removeOneLive = () => {
  state.lives -= 1;
  textHandler.updateLivesText();
};

const handleInvaderAndPlayerCollision = (gameWorld, invader) => {
  // no points to player ;)
  killInvader(gameWorld, invader);

  removeOneLive();
  checkIfThereAreSomeLivesLeft(gameWorld);
};

export function defineIvaderAndPlayerCollision(gameWorld) {
  gameWorld.physics.add.overlap(
    state.player,
    state.invadersL,
    (player, invader) => {
      handleInvaderAndPlayerCollision(gameWorld, invader);
    }
  );
  gameWorld.physics.add.overlap(
    state.player,
    state.invadersM,
    (player, invader) => {
      handleInvaderAndPlayerCollision(gameWorld, invader);
    }
  );
  gameWorld.physics.add.overlap(
    state.player,
    state.invadersS,
    (player, invader) => {
      handleInvaderAndPlayerCollision(gameWorld, invader);
    }
  );
}
