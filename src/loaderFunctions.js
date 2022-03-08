import background from '../assets/background.png'
import laser_white from '../assets/laser_white.png'
import laser_red from '../assets/laser_red.png'
import invaderS from '../assets/invader1.png'
import invaderM from '../assets/invader2.png'
import invaderL from '../assets/invader3.png'
import player from '../assets/player.png'

export function loadAssets(scene) {
  scene.load.image("space", background);
  scene.load.image("laserWhite", laser_white);
  scene.load.image("laserRed", laser_red);
  scene.load.spritesheet("invaderS", invaderS, {
    frameWidth: 32,
    frameHeight: 32,
  });
  scene.load.spritesheet("invaderM", invaderM, {
    frameWidth: 32,
    frameHeight: 32,
  });
  scene.load.spritesheet("invaderL", invaderL, {
    frameWidth: 32,
    frameHeight: 32,
  });
  scene.load.spritesheet("player", player, {
    frameWidth: 64,
    frameHeight: 32,
  });
}
