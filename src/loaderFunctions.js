export function loadAssets(gameWorld) {
    gameWorld.load.image('space', 'assets/background.png')
    gameWorld.load.spritesheet('invaderS', 'assets/invader1.png', {frameWidth: 32, frameHeight: 32})
    gameWorld.load.spritesheet('invaderM', 'assets/invader2.png', {frameWidth: 32, frameHeight: 32})
    gameWorld.load.spritesheet('invaderL', 'assets/invader3.png', {frameWidth: 32, frameHeight: 32})
}