import config from "./config.js";
import state from "./state.js";
import * as invaderWaveHandler from "./invaderWave.js";

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
  state.scoreText.setText(`GAME OVER! Score: ${state.score}`);
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

// we want to fetch first non active laser or create new one if there is no one left
export function getShotObj(laserGroup, positionX, positionY, laserType) {
  let laserToUse = null;

  laserGroup.children.iterate((laser) => {
    if (!laser.active) {
      laserToUse = laser;
    }
  });

  if (laserToUse) {
    laserToUse.enableBody(true, positionX, positionY, true, true);
    return laserToUse;
  }

  laserToUse = laserGroup.create(positionX, positionY, laserType);
  laserToUse.setCollideWorldBounds(true);
  laserToUse.setName("laser");
  laserToUse.body.onWorldBounds = true;
  return laserToUse;
}

const handlePlayerShot = () => {
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

  state.invadersCount--;

  if (state.invadersCount === 0) {
    invaderWaveHandler.setNewInvadersWave(gameWorld);
  }
};

export function defineInvadersDestruction(gameWorld) {
  gameWorld.physics.add.overlap(
    state.playerLasers,
    state.invadersS,
    (laser, invader) => {
      killInvader(gameWorld, invader);
      laser.disableBody(true, true);
      state.score += config.invaderSScore;
      state.scoreText.setText(`Score: ${state.score}`);
    }
  );

  gameWorld.physics.add.overlap(
    state.playerLasers,
    state.invadersM,
    (laser, invader) => {
      killInvader(gameWorld, invader);
      laser.disableBody(true, true);
      state.score += config.invaderMScore;
      state.scoreText.setText(`Score: ${state.score}`);
    }
  );

  gameWorld.physics.add.overlap(
    state.playerLasers,
    state.invadersL,
    (laser, invader) => {
      killInvader(gameWorld, invader);
      laser.disableBody(true, true);
      state.score += config.invaderLScore;
      state.scoreText.setText(`Score: ${state.score}`);
    }
  );
}

export function definePlayerShots(gameWorld) {
  gameWorld.input.keyboard.on("keyup-UP", () => {
    handlePlayerShot();
  });

  gameWorld.input.keyboard.on("keyup-SPACE", () => {
    handlePlayerShot();
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
  state.livesText.setText(`Lives: ${state.lives}`);
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
