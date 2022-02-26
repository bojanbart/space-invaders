export function loadAssets(gameWorld) {
  gameWorld.load.image("space", "assets/background.png");
  gameWorld.load.image("laserWhite", "assets/laser_white.png");
  gameWorld.load.image("laserRed", "assets/laser_red.png");
  gameWorld.load.spritesheet("invaderS", "assets/invader1.png", {
    frameWidth: 32,
    frameHeight: 32,
  });
  gameWorld.load.spritesheet("invaderM", "assets/invader2.png", {
    frameWidth: 32,
    frameHeight: 32,
  });
  gameWorld.load.spritesheet("invaderL", "assets/invader3.png", {
    frameWidth: 32,
    frameHeight: 32,
  });
  gameWorld.load.spritesheet("player", "assets/player.png", {
    frameWidth: 64,
    frameHeight: 32,
  });
}
