import state from "./state.js";
import config from "./config.js";

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
