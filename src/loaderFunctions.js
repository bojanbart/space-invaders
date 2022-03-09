import background from '../assets/img/background.png'
import laser_white from '../assets/img/laser_white.png'
import laser_red from '../assets/img/laser_red.png'
import invaderS from '../assets/img/invader1.png'
import invaderM from '../assets/img/invader2.png'
import invaderL from '../assets/img/invader3.png'
import player from '../assets/img/player.png'

import invadersAudioJson from '../assets/audio/invadersaudio.json'
import invadersAudioMp3 from '../assets/audio/invadersaudio.mp3'
import invadersAudioOgg from '../assets/audio/invadersaudio.ogg'
import invadersAudioM4a from '../assets/audio/invadersaudio.m4a'
import invadersAudioAc3 from '../assets/audio/invadersaudio.ac3'

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

export function loadSounds(scene) {
  scene.load.audioSprite('sfx', invadersAudioJson, [
      invadersAudioOgg,
      invadersAudioMp3,
      invadersAudioM4a,
      invadersAudioAc3,
  ])
}
