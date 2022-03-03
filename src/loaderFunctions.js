import background from './assets/background.png'
import laser_white from './assets/laser_white.png'
import laser_red from './assets/laser_red.png'
import invaderS from './assets/invader1.png'
import invaderM from './assets/invader2.png'
import invaderL from './assets/invader3.png'
import player from './assets/player.png'

export function loadAssets(gameWorld) {
  gameWorld.load.image("space", background);
  gameWorld.load.image("laserWhite", laser_white);
  gameWorld.load.image("laserRed", laser_red);
  gameWorld.load.spritesheet("invaderS", invaderS, {
    frameWidth: 32,
    frameHeight: 32,
  });
  gameWorld.load.spritesheet("invaderM", invaderM, {
    frameWidth: 32,
    frameHeight: 32,
  });
  gameWorld.load.spritesheet("invaderL", invaderL, {
    frameWidth: 32,
    frameHeight: 32,
  });
  gameWorld.load.spritesheet("player", player, {
    frameWidth: 64,
    frameHeight: 32,
  });
}
