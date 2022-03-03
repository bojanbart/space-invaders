import config from "./config.js";
import state from "./state.js";
import * as creator from "./createFunctions.js";
import * as loader from "./loaderFunctions.js";
import * as animationDefiner from "./animationDefineFunctions.js";
import * as updater from "./updateFunctions.js";
import * as interactor from "./interactionFunctions.js";
import "../style.css"

const preload = function () {
  const gameWorld = this;

  state.setStartState();
  loader.loadAssets(gameWorld);
};

const create = function () {
  const gameWorld = this;

  creator.createBackground(gameWorld);
  creator.createInvaders(gameWorld);
  creator.createPlayer(gameWorld);
  creator.initCursors(gameWorld);
  creator.createTextObjects(gameWorld);
  creator.createLasers(gameWorld);
  animationDefiner.defineInvadersAnimations(gameWorld);
  animationDefiner.definePlayerAnimations(gameWorld);
  interactor.defineBordersInteractions(gameWorld);
  interactor.definePlayerShots(gameWorld);
  interactor.defineIvadersFalling();
  interactor.defineIvaderAndPlayerCollision(gameWorld);
  interactor.definePlayerDestruction(gameWorld);
};

const update = function () {
  updater.updateInvadersPosition();
  updater.updatePlayerState();
  updater.updateInvadersActions();
};

state.game = new Phaser.Game({
  type: Phaser.AUTO,
  width: config.width,
  height: config.height,
  physics: {
    default: "arcade",
    gravity: { y: 0 },
    debug: false,
  },
  scene: {
    preload,
    create,
    update,
  },
});
