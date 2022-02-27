import { getShotObj } from "../src/interactionFunctions.js";

let laserGroup;
let existingLasers;

beforeAll(() => {
  existingLasers = [];

  laserGroup = {
    children: {
      iterate(callback) {
        existingLasers.forEach((element) => {
          callback(element);
        });
      },
    },
    create: function (positionX, positionY, laserType) {
      return {
        name: null,
        collideWorldBound: null,
        id: "newobj",
        body: {
          onWorldBounds: false,
        },
        setCollideWorldBounds: function (val) {
          this.collideWorldBound = val;
        },
        setName: function (val) {
          this.name = val;
        },
      };
    },
  };
});

test("should create new shot when there are no in a group", () => {
  const shot = getShotObj(laserGroup, 1, 1, "x");

  expect(shot.id).toEqual("newobj");
  expect(shot.name).toEqual("laser");
  expect(shot.collideWorldBound).toBeTruthy();
  expect(shot.body.onWorldBounds).toBeTruthy();
});

test("should use existing one when there is unactive in a group", () => {
  existingLasers.push({
    active: false,
    visible: false,
    x: 0,
    y: 0,
    enableBody(reset, x, y, active, visible) {
      this.x = x;
      this.y = y;
      this.active = active;
      this.visible = visible;
    },
  });

  const shot = getShotObj(laserGroup, 1, 1, "x");

  expect(shot.id).toBeUndefined();
  expect(shot.active).toBeTruthy();
  expect(shot.visible).toBeTruthy();
  expect(shot.x).toBe(1);
  expect(shot.y).toBe(1);
});

test("should create new shot where there are only active in a group", () => {
  existingLasers.push({
    active: true,
    visible: true,
    x: 0,
    y: 0,
    enableBody(reset, x, y, active, visible) {
      this.x = x;
      this.y = y;
      this.active = active;
      this.visible = visible;
    },
  });

  const shot = getShotObj(laserGroup, 1, 1, "x");

  expect(shot.id).toEqual("newobj");
});
