import state from "./state.js";
import config from "./config.js";

export function createBackground(gameWorld) {
  gameWorld.add.image(400, 300, "space");
}

const createGivenTypeOfInvaders = (
  gameWorld,
  type,
  count,
  rows,
  existingInvadersRows
) => {
  const invadersPerRow = parseInt(count / rows);

  const invaders = gameWorld.physics.add.group({
    key: type,
    repeat: invadersPerRow - 1,
    setXY: {
      x: config.invadersSpaceOutsideSwarm + 32,
      y: config.invadersSpaceOutsideSwarm + 32 * (existingInvadersRows + 1),
      stepX: config.invadersSpaceBetween + 32,
    },
  });

  let leftToDraw = count - invadersPerRow;
  let rowToDraw = 2;
  let newX = config.invadersSpaceOutsideSwarm + 32;
  let newY =
    config.invadersSpaceOutsideSwarm + 32 * (existingInvadersRows + rowToDraw);

  for (let counter = 0; counter < leftToDraw; counter++) {
    if (counter >= invadersPerRow) {
      newX = config.invadersSpaceOutsideSwarm + 32;
      rowToDraw++;
      newY =
        config.invadersSpaceOutsideSwarm +
        32 * (existingInvadersRows + rowToDraw);
      counter = 0;
      leftToDraw -= invadersPerRow;
    }

    invaders.create(newX, newY, type);
    newX += config.invadersSpaceBetween + 32;
  }

  return invaders;
};

export function createInvaders(gameWorld) {
  state.invadersL = createGivenTypeOfInvaders(
    gameWorld,
    "invaderL",
    config.invadersLCount,
    config.invadersLRows,
    0
  );
  state.invadersM = createGivenTypeOfInvaders(
    gameWorld,
    "invaderM",
    config.invadersMCount,
    config.invadersMRows,
    config.invadersLRows
  );
  state.invadersS = createGivenTypeOfInvaders(
    gameWorld,
    "invaderS",
    config.invadersSCount,
    config.invadersSRows,
    config.invadersLRows + config.invadersMRows
  );
}

export function createPlayer(gameWorld) {
  state.player = gameWorld.physics.add.sprite(400, 568, "player");
}

export function initCursors(gameWorld) {
  state.cursors = gameWorld.input.keyboard.createCursorKeys();
}

export function createTextObjects(gameWorld) {
  state.scoreText = gameWorld.add.text(16, 8, `Score: ${state.score}`, {
    fontSize: "32px",
    fill: "#fff",
  });

  state.livesText = gameWorld.add.text(620, 8, `Lives: ${state.lives}`, {
    fontSize: "32px",
    fill: "#fff",
  });
}
