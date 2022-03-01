import config from "./config.js";

let scheduledShot = null;
let scheduledRun = null;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export function isItTimeToShoot() {
  const now = Date.now();

  if (scheduledShot === null) {
    scheduledShot =
      now +
      getRandomInt(
        config.invadersShotMinInterval,
        config.invadersShotMaxInterval
      ) *
        1000;
    return false;
  }

  if (now > scheduledShot) {
    scheduledShot =
      now +
      getRandomInt(
        config.invadersShotMinInterval,
        config.invadersShotMaxInterval
      ) *
        1000;
    return true;
  }

  return false;
}

export function isItTimeToRun() {
  const now = Date.now();

  if (scheduledRun === null) {
    scheduledRun =
      now +
      getRandomInt(
        config.invadersRunMinInterval,
        config.invadersRunMaxInterval
      ) *
        1000;
    return false;
  }

  if (now > scheduledRun) {
    scheduledRun =
      now +
      getRandomInt(
        config.invadersRunMinInterval,
        config.invadersRunMaxInterval
      ) *
        1000;
    return true;
  }

  return false;
}
