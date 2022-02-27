import { createGivenTypeOfInvaders } from "../src/createFunctions.js";
import config from "../src/config.js";

class InvaderWrapper {
  constructor() {
    this.values = [];
  }

  create(newX, newY, type) {
    this.values.push({ key: type, x: newX, y: newY });
  }
}

const gameWorld = {
  physics: {
    add: {
      group(config) {
        let res = new InvaderWrapper();

        for (var counter = 0; counter <= config.repeat; counter++) {
          res.create(
            config.setXY.x + counter * config.setXY.stepX,
            config.setXY.y,
            config.key
          );
        }

        return res;
      },
    },
  },
};

/*
xxx
*/
test("should create invaders in one row", () => {
  const invaders = createGivenTypeOfInvaders(gameWorld, "test", 3, 1, 0);

  expect(invaders.values.length).toBe(3);
  expect(invaders.values[0].key).toBe("test");
  expect(invaders.values[1].key).toBe("test");
  expect(invaders.values[2].key).toBe("test");
  expect(invaders.values[0].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[0].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[1].x).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[1].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[2].x).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[2].y).toBe(config.invadersSpaceOutsideSwarm + 16);
});

/*
xxx
xxx
*/
test("should create invaders in two equal rows", () => {
  const invaders = createGivenTypeOfInvaders(gameWorld, "test", 6, 2, 0);

  expect(invaders.values.length).toBe(6);
  expect(invaders.values[0].key).toBe("test");
  expect(invaders.values[1].key).toBe("test");
  expect(invaders.values[2].key).toBe("test");
  expect(invaders.values[3].key).toBe("test");
  expect(invaders.values[4].key).toBe("test");
  expect(invaders.values[5].key).toBe("test");
  expect(invaders.values[0].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[0].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[1].x).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[1].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[2].x).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[2].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[3].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[3].y).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[4].x).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[4].y).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[5].x).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[5].y).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
});

/*
xxx
xx
*/
test("should create invaders in two unequal rows", () => {
  const invaders = createGivenTypeOfInvaders(gameWorld, "test", 5, 2, 0);

  expect(invaders.values.length).toBe(5);
  expect(invaders.values[0].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[0].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[1].x).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[1].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[2].x).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[2].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[3].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[3].y).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[4].x).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[4].y).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
});

/*
xxx
xxx
xxx
*/
test("should create invaders in three equal rows", () => {
  const invaders = createGivenTypeOfInvaders(gameWorld, "test", 9, 3, 0);

  expect(invaders.values.length).toBe(9);
  expect(invaders.values[0].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[0].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[1].x).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[1].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[2].x).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[2].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[3].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[3].y).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[4].x).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[4].y).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[5].x).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[5].y).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[6].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[6].y).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[7].x).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[7].y).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[8].x).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[8].y).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
});

/*
xxx
xxx
x
*/
test("should cteate invaders on three unequal rows", () => {
  const invaders = createGivenTypeOfInvaders(gameWorld, "test", 7, 3, 0);

  expect(invaders.values.length).toBe(7);
  expect(invaders.values[0].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[0].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[1].x).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[1].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[2].x).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[2].y).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[3].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[3].y).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[4].x).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[4].y).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[5].x).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[5].y).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[6].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[6].y).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
});

/*
yyy
yyy
xxx
xxx
*/
test("should create invaders after previous existing ones", () => {
  const invaders = createGivenTypeOfInvaders(gameWorld, "test", 6, 2, 2);

  expect(invaders.values.length).toBe(6);
  expect(invaders.values[0].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[0].y).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[1].x).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[1].y).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[2].x).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[2].y).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[3].x).toBe(config.invadersSpaceOutsideSwarm + 16);
  expect(invaders.values[3].y).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      3 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[4].x).toBe(
    config.invadersSpaceOutsideSwarm + 16 + 32 + config.invadersSpaceBetween
  );
  expect(invaders.values[4].y).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      3 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[5].x).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      2 * (32 + config.invadersSpaceBetween)
  );
  expect(invaders.values[5].y).toBe(
    config.invadersSpaceOutsideSwarm +
      16 +
      3 * (32 + config.invadersSpaceBetween)
  );
});
