import state from "./state.js";

export function defineInvaderBordersInteraction(gameWorld) {
  state.invadersL.children.iterate((invader) => {
    invader.setCollideWorldBounds(true);
    invader.setName("invader");
    invader.body.onWorldBounds = true;
  });
  state.invadersM.children.iterate((invader) => {
    invader.setCollideWorldBounds(true);
    invader.setName("invader");
    invader.body.onWorldBounds = true;
  });
  state.invadersS.children.iterate((invader) => {
    invader.setCollideWorldBounds(true);
    invader.setName("invader");
    invader.body.onWorldBounds = true;
  });

  gameWorld.physics.world.on("worldbounds", (invader) => {
    if (invader.gameObject.name === "invader") {
      state.toggleInvadersMoveDirection();
    }
  });
}

export function definePlayerBordersInteraction(gameWorld) {
  state.player.setCollideWorldBounds(true);
}
