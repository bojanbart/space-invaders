import { pickInvaderToShoot, pickInvaderToRun } from "../src/invaderPicker.js";

const createInvadersGroup = (...invaders) => {
  return {
    children: {
      size: invaders.length,
      iterate(callback) {
        for (const invader of invaders) {
          callback(invader);
        }
      },
    },
  };
};

describe("pick invader to run", () => {
  test("should pick invader from lower group", () => {
    const pickedInvader = pickInvaderToRun(
      createInvadersGroup(
        { type: "s", body: { x: 1, y: 1 } },
        { type: "s", body: { x: 2, y: 2 } }
      ),
      createInvadersGroup(
        { type: "m", body: { x: 1, y: 1 } },
        { type: "m", body: { x: 2, y: 2 } }
      ),
      createInvadersGroup(),
      { body: { x: 1, y: 1 } }
    );

    expect(pickedInvader.type).toBe("s");
  });

  test("should pick invader from second group if first is empty", () => {
    const pickedInvader = pickInvaderToRun(
      createInvadersGroup(),
      createInvadersGroup(
        { type: "m", body: { x: 1, y: 1 } },
        { type: "m", body: { x: 2, y: 2 } }
      ),
      createInvadersGroup(
        { type: "l", body: { x: 1, y: 1 } },
        { type: "l", body: { x: 2, y: 2 } }
      ),
      { body: { x: 1, y: 1 } }
    );

    expect(pickedInvader.type).toBe("m");
  });

  test("should pick invader wich is farest from player and in lowest row", () => {
    const pickedInvader = pickInvaderToRun(
      createInvadersGroup(
        { type: "s", body: { x: 50, y: 150 } },
        { type: "s", body: { x: 100, y: 150 } },
        { type: "s", body: { x: 150, y: 150 } },
        { type: "s", body: { x: 200, y: 150 } }
      ),
      createInvadersGroup(
        { type: "m", body: { x: 50, y: 100 } },
        { type: "m", body: { x: 100, y: 100 } },
        { type: "m", body: { x: 150, y: 100 } },
        { type: "m", body: { x: 200, y: 100 } }
      ),
      createInvadersGroup(
        { type: "l", body: { x: 50, y: 50 } },
        { type: "l", body: { x: 100, y: 50 } },
        { type: "l", body: { x: 150, y: 50 } },
        { type: "l", body: { x: 200, y: 50 } }
      ),
      { body: { x: 150, y: 300 } }
    );

    expect(pickedInvader.type).toBe("s");
    expect(pickedInvader.body.x).toBe(50);
    expect(pickedInvader.body.y).toBe(150);
  });
});

describe("pick invader to shoot", () => {
  test("should pick invader from lower group", () => {
    const pickedInvader = pickInvaderToShoot(
      createInvadersGroup(
        { type: "s", body: { x: 1, y: 1 } },
        { type: "s", body: { x: 2, y: 2 } }
      ),
      createInvadersGroup(
        { type: "m", body: { x: 1, y: 1 } },
        { type: "m", body: { x: 2, y: 2 } }
      ),
      createInvadersGroup(),
      { body: { x: 1, y: 1 } }
    );

    expect(pickedInvader.type).toBe("s");
  });

  test("should pick invader from second group if first is empty", () => {
    const pickedInvader = pickInvaderToShoot(
      createInvadersGroup(),
      createInvadersGroup(
        { type: "m", body: { x: 1, y: 1 } },
        { type: "m", body: { x: 2, y: 2 } }
      ),
      createInvadersGroup(
        { type: "l", body: { x: 1, y: 1 } },
        { type: "l", body: { x: 2, y: 2 } }
      ),
      { body: { x: 1, y: 1 } }
    );

    expect(pickedInvader.type).toBe("m");
  });

  test("should pick invader wich is closest to player and in lowest row", () => {
    const pickedInvader = pickInvaderToShoot(
      createInvadersGroup(
        { type: "s", body: { x: 50, y: 150 } },
        { type: "s", body: { x: 100, y: 150 } },
        { type: "s", body: { x: 150, y: 150 } },
        { type: "s", body: { x: 200, y: 150 } }
      ),
      createInvadersGroup(
        { type: "m", body: { x: 50, y: 100 } },
        { type: "m", body: { x: 100, y: 100 } },
        { type: "m", body: { x: 150, y: 100 } },
        { type: "m", body: { x: 200, y: 100 } }
      ),
      createInvadersGroup(
        { type: "l", body: { x: 50, y: 50 } },
        { type: "l", body: { x: 100, y: 50 } },
        { type: "l", body: { x: 150, y: 50 } },
        { type: "l", body: { x: 200, y: 50 } }
      ),
      { body: { x: 150, y: 300 } }
    );

    expect(pickedInvader.type).toBe("s");
    expect(pickedInvader.body.x).toBe(150);
    expect(pickedInvader.body.y).toBe(150);
  });
});
