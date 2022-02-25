import config from "./config.js";
import state from "./state.js";
import * as creator from "./createFunctions.js";
import * as loader from "./loaderFunctions.js";
import * as animationDefiner from "./animationDefineFunctions.js";
import * as updater from "./updateFunctions.js";
import * as interactor from "./interactionFunctions.js";

const preload = function () {
  const gameWorld = this;

  loader.loadAssets(gameWorld);
};

const create = function () {
  const gameWorld = this;

  creator.createBackground(gameWorld);
  creator.createInvaders(gameWorld);
  creator.createPlayer(gameWorld);
  creator.initCursors(gameWorld);
  animationDefiner.defineInvadersAnimations(gameWorld);
  animationDefiner.definePlayerAnimations(gameWorld);
  interactor.defineInvaderBordersInteraction(gameWorld);
  interactor.definePlayerBordersInteraction(gameWorld);
};

const update = function () {
  updater.updateInvadersPosition();
  updater.updatePlayerState();
};

state.setStartState();
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
