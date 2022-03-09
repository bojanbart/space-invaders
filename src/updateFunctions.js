import state from "./state.js";
import config from "./config.js";
import * as invaderTimer from "./invaderTimer.js";
import * as invaderPicker from "./invaderPicker.js";
import { getShotObj } from "./shotPicker.js";
import {playPwie} from "./soundEffects";

let invaderLAnimation;
let invaderMAnimation;
let invaderSAnimation;
let invadersVelocity;

export function updateInvadersPosition() {
  if (state.invadersMoveDirection === "right") {
    invaderLAnimation = "invaderLRight";
    invaderMAnimation = "invaderMRight";
    invaderSAnimation = "invaderSRight";
    invadersVelocity = config.invadersSpeed;
  } else {
    invaderLAnimation = "invaderLLeft";
    invaderMAnimation = "invaderMLeft";
    invaderSAnimation = "invaderSLeft";
    invadersVelocity = config.invadersSpeed * -1;
  }

  state.invadersL.children.iterate((invader) => {
    invader.anims.play(invaderLAnimation, true);
    invader.setVelocityX(invadersVelocity);
  });
  state.invadersM.children.iterate((invader) => {
    invader.anims.play(invaderMAnimation, true);
    invader.setVelocityX(invadersVelocity);
  });
  state.invadersS.children.iterate((invader) => {
    invader.anims.play(invaderSAnimation, true);
    invader.setVelocityX(invadersVelocity);
  });
}

const handlePlayerMovement = () => {
  if (state.cursors.left.isDown) {
    state.player.setVelocityX(-200);
  } else if (state.cursors.right.isDown) {
    state.player.setVelocityX(200);
  } else {
    state.player.setVelocityX(0);
  }
};

export function updatePlayerState() {
  state.player.anims.play("player", true);

  handlePlayerMovement();
}

const handleInvadersRun = () => {
  if (invaderTimer.isItTimeToRun()) {
    const invaderToRun = invaderPicker.pickInvaderToRun(
      state.invadersS,
      state.invadersM,
      state.invadersL,
      state.player
    );

    invaderToRun.setVelocityY(state.invadersFallSpeed * 5);
  }
};

const handleInvadersShots = () => {
  if (invaderTimer.isItTimeToShoot()) {
    const invaderToShoot = invaderPicker.pickInvaderToShoot(
      state.invadersS,
      state.invadersM,
      state.invadersL,
      state.player
    );

    playPwie()

    const shot = getShotObj(
      state.invaderLasers,
      invaderToShoot.body.x + 16,
      invaderToShoot.body.y + 32,
      "laserRed"
    );
    shot.setVelocityY(config.laserSpeed);
  }
};

export function updateInvadersActions() {
  if (state.isGameActive) {
    handleInvadersRun();
    handleInvadersShots();
  }
}
