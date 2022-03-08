export function defineInvadersAnimations(scene) {
  scene.anims.create({
    key: "invaderLLeft",
    frames: scene.anims.generateFrameNumbers("invaderL", {
      start: 0,
      end: 1,
    }),
    frameRate: 5,
    repeat: -1,
  });

  scene.anims.create({
    key: "invaderLRight",
    frames: scene.anims.generateFrameNumbers("invaderL", {
      start: 1,
      end: 2,
    }),
    frameRate: 5,
    repeat: -1,
  });

  scene.anims.create({
    key: "invaderMLeft",
    frames: scene.anims.generateFrameNumbers("invaderM", {
      start: 0,
      end: 1,
    }),
    frameRate: 5,
    repeat: -1,
  });

  scene.anims.create({
    key: "invaderMRight",
    frames: scene.anims.generateFrameNumbers("invaderM", {
      start: 1,
      end: 2,
    }),
    frameRate: 5,
    repeat: -1,
  });

  scene.anims.create({
    key: "invaderSLeft",
    frames: scene.anims.generateFrameNumbers("invaderS", {
      start: 0,
      end: 1,
    }),
    frameRate: 5,
    repeat: -1,
  });

  scene.anims.create({
    key: "invaderSRight",
    frames: scene.anims.generateFrameNumbers("invaderS", {
      start: 1,
      end: 2,
    }),
    frameRate: 5,
    repeat: -1,
  });
}

export function definePlayerAnimations(scene) {
  scene.anims.create({
    key: "player",
    frames: scene.anims.generateFrameNumbers("player", {
      start: 0,
      end: 1,
    }),
    frameRate: 5,
    repeat: -1,
  });
}
