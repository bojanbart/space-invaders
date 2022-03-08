import config from "./config.js";
import state from "./state.js";
import "../style.css"
import {MainScene} from "./mainScene";

state.game = new Phaser.Game({
  type: Phaser.AUTO,
  width: config.width,
  height: config.height,
  physics: {
    default: "arcade",
    gravity: { y: 0 },
    debug: false,
  },
  scene: [MainScene],
});
