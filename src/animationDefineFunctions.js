export function defineInvadersAnimations(gameWorld) {
  gameWorld.anims.create({
    key: "invaderLLeft",
    frames: gameWorld.anims.generateFrameNumbers("invaderL", {
      start: 0,
      end: 1,
    }),
    frameRate: 5,
    repeat: -1,
  });

  gameWorld.anims.create({
    key: "invaderLRight",
    frames: gameWorld.anims.generateFrameNumbers("invaderL", {
      start: 1,
      end: 2,
    }),
    frameRate: 5,
    repeat: -1,
  });

  gameWorld.anims.create({
    key: "invaderMLeft",
    frames: gameWorld.anims.generateFrameNumbers("invaderM", {
      start: 0,
      end: 1,
    }),
    frameRate: 5,
    repeat: -1,
  });

  gameWorld.anims.create({
    key: "invaderMRight",
    frames: gameWorld.anims.generateFrameNumbers("invaderM", {
      start: 1,
      end: 2,
    }),
    frameRate: 5,
    repeat: -1,
  });

  gameWorld.anims.create({
    key: "invaderSLeft",
    frames: gameWorld.anims.generateFrameNumbers("invaderS", {
      start: 0,
      end: 1,
    }),
    frameRate: 5,
    repeat: -1,
  });

  gameWorld.anims.create({
    key: "invaderSRight",
    frames: gameWorld.anims.generateFrameNumbers("invaderS", {
      start: 1,
      end: 2,
    }),
    frameRate: 5,
    repeat: -1,
  });
}

export function definePlayerAnimations(gameWorld) {
  gameWorld.anims.create({
    key: "player",
    frames: gameWorld.anims.generateFrameNumbers("player", {
      start: 0,
      end: 1,
    }),
    frameRate: 5,
    repeat: -1,
  });
}
