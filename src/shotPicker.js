// we want to fetch first non active laser or create new one if there is no one left
export function getShotObj(laserGroup, positionX, positionY, laserType) {
  let laserToUse = null;

  laserGroup.children.iterate((laser) => {
    if (!laser.active) {
      laserToUse = laser;
    }
  });

  if (laserToUse) {
    laserToUse.enableBody(true, positionX, positionY, true, true);
    return laserToUse;
  }

  laserToUse = laserGroup.create(positionX, positionY, laserType);
  laserToUse.setCollideWorldBounds(true);
  laserToUse.setName("laser");
  laserToUse.body.onWorldBounds = true;
  return laserToUse;
}
