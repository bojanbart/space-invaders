import state from "./state";
import * as loader from "./loaderFunctions";
import * as creator from "./createFunctions";
import * as animationDefiner from "./animationDefineFunctions";
import * as interactor from "./interactionFunctions";
import * as updater from "./updateFunctions";

export class MainScene extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        const mainScene = this;

        state.setStartState();
        loader.loadAssets(mainScene);
    }

    create() {
        const mainScene = this;

        creator.createBackground(mainScene);
        creator.createInvaders(mainScene);
        creator.createPlayer(mainScene);
        creator.initCursors(mainScene);
        creator.createTextObjects(mainScene);
        creator.createLasers(mainScene);
        animationDefiner.defineInvadersAnimations(mainScene);
        animationDefiner.definePlayerAnimations(mainScene);
        interactor.defineBordersInteractions(mainScene);
        interactor.definePlayerShots(mainScene);
        interactor.defineIvadersFalling();
        interactor.defineInvaderAndPlayerCollision(mainScene);
        interactor.definePlayerDestruction(mainScene);
    }

    update() {
        updater.updateInvadersPosition();
        updater.updatePlayerState();
        updater.updateInvadersActions();
    }
}