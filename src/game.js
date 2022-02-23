import config from './config.js'
import state from './state.js'
import * as creator from './createFunctions.js'
import * as loader from './loaderFunctions.js'

const preload = function () {
    const gameWorld = this;

    loader.loadAssets(gameWorld)
}

const create = function () {
    const gameWorld = this;

    creator.createBackground(gameWorld)
    creator.createInvaders(gameWorld)
}

const update = function () {

}

state.game = new Phaser.Game({
    type: Phaser.AUTO,
    width: config.width,
    height: config.height,
    physics: {
        default: 'arcade',
        gravity: {y: 100},
        debug: false,
    },
    scene: {
        preload,
        create,
        update
    }
});