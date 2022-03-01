const getNonEmptyGroup = (invadersS, invadersM, invadersL) => {
  if (invadersS.children.size > 0) {
    return invadersS;
  }

  if (invadersM.children.size > 0) {
    return invadersM;
  }

  return invadersL;
};

export function pickInvaderToShoot(invadersS, invadersM, invadersL, player) {
  const invaders = getNonEmptyGroup(invadersS, invadersM, invadersL);

  // because body has a coordinates of a left edge
  const playerXPosition = player.body.x + 32;

  let candidate = {
    distFromPlayerX: 10000,
    invader: null,
  };

  invaders.children.iterate((invader) => {
    const dist = Math.abs(playerXPosition - (invader.body.x + 16));
    if (dist < candidate.distFromPlayerX) {
      candidate.distFromPlayerX = dist;
      candidate.invader = invader;
    }
  });

  invaders.children.iterate((invader) => {
    if (
      invader.body.y > candidate.invader.body.y + 16 &&
      invader.body.x < candidate.invader.body.x + 16 &&
      invader.body.x + 32 > candidate.invader.body.x + 16
    ) {
      candidate.invader = invader;
    }
  });

  return candidate.invader;
}

export function pickInvaderToRun(invadersS, invadersM, invadersL, player) {
  const invaders = getNonEmptyGroup(invadersS, invadersM, invadersL);

  // because body has a coordinates of a left edge
  const playerXPosition = player.body.x + 32;

  let candidate = {
    distFromPlayerX: 0,
    invader: null,
  };

  invaders.children.iterate((invader) => {
    const dist = Math.abs(playerXPosition - (invader.body.x + 16));
    if (dist > candidate.distFromPlayerX) {
      candidate.distFromPlayerX = dist;
      candidate.invader = invader;
    }
  });

  invaders.children.iterate((invader) => {
    if (
      invader.body.y > candidate.invader.body.y + 16 &&
      invader.body.x < candidate.invader.body.x + 16 &&
      invader.body.x + 32 > candidate.invader.body.x + 16
    ) {
      candidate.invader = invader;
    }
  });

  return candidate.invader;
}
