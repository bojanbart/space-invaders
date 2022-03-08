import state from "./state.js";
import config from "./config.js";

export function createBackground(scene) {
  scene.add.image(400, 300, "space");
}

export function createGivenTypeOfInvaders(
  scene,
  type,
  count,
  rows,
  existingInvadersRows
) {
  const invadersPerRow = Math.ceil(count / rows);

  const invaders = scene.physics.add.group({
    key: type,
    repeat: invadersPerRow - 1,
    setXY: {
      x: config.invadersSpaceOutsideSwarm + 16,
      y:
        config.invadersSpaceOutsideSwarm +
        16 +
        (32 + config.invadersSpaceBetween) * existingInvadersRows,
      stepX: config.invadersSpaceBetween + 32,
    },
  });

  let leftToDraw = count - invadersPerRow;
  let rowToDraw = 2;
  let newX = config.invadersSpaceOutsideSwarm + 16;
  let newY =
    config.invadersSpaceOutsideSwarm +
    16 +
    (32 + config.invadersSpaceBetween) * (existingInvadersRows + rowToDraw - 1);

  for (let counter = 0; counter < leftToDraw; counter++) {
    if (counter >= invadersPerRow) {
      newX = config.invadersSpaceOutsideSwarm + 16;
      rowToDraw++;
      newY =
        config.invadersSpaceOutsideSwarm +
        16 +
        (32 + config.invadersSpaceBetween) *
          (existingInvadersRows + rowToDraw - 1);
      counter = 0;
      leftToDraw -= invadersPerRow;
    }

    invaders.create(newX, newY, type);
    newX += config.invadersSpaceBetween + 32;
  }

  return invaders;
}

export function createInvaders(scene) {
  state.invadersL = createGivenTypeOfInvaders(
    scene,
    "invaderL",
    config.invadersLCount,
    config.invadersLRows,
    0
  );
  state.invadersM = createGivenTypeOfInvaders(
    scene,
    "invaderM",
    config.invadersMCount,
    config.invadersMRows,
    config.invadersLRows
  );
  state.invadersS = createGivenTypeOfInvaders(
    scene,
    "invaderS",
    config.invadersSCount,
    config.invadersSRows,
    config.invadersLRows + config.invadersMRows
  );

  state.invadersCount =
    config.invadersLCount + config.invadersMCount + config.invadersSCount;
}

export function createPlayer(scene) {
  state.player = scene.physics.add.sprite(400, 568, "player");
}

export function initCursors(scene) {
  state.cursors = scene.input.keyboard.createCursorKeys();
}

export function createTextObjects(scene) {
  state.scoreText = scene.add.text(16, 8, `Score: ${state.score}`, {
    fontSize: "32px",
    fill: "#fff",
  });

  state.livesText = scene.add.text(620, 8, `Lives: ${state.lives}`, {
    fontSize: "32px",
    fill: "#fff",
  });
}

export function createLasers(scene) {
  state.playerLasers = scene.physics.add.group();
  state.invaderLasers = scene.physics.add.group();
}
