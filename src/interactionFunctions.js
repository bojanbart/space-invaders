import config from "./config.js";
import state from "./state.js";

const defineInvaderBordersInteraction = (gameWorld) => {
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
};

const definePlayerBordersInteraction = (gameWorld) => {
  state.player.setCollideWorldBounds(true);
};

export function defineBordersInteractions(gameWorld) {
  defineInvaderBordersInteraction(gameWorld);
  definePlayerBordersInteraction(gameWorld);

  gameWorld.physics.world.on("worldbounds", (obj) => {
    if (obj.gameObject.name === "invader") {
      state.toggleInvadersMoveDirection();
    }

    if (obj.gameObject.name === "laser") {
      obj.gameObject.setActive(false).setVisible(false);
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
    laserToUse.setActive(true);
    laserToUse.setVisible(true);
    laserToUse.body.reset(positionX, positionY);

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

export function definePlayerShots(gameWorld) {
  gameWorld.input.keyboard.on("keyup-UP", () => {
    handlePlayerShot();
  });

  gameWorld.input.keyboard.on("keyup-SPACE", () => {
    handlePlayerShot();
  });
}
