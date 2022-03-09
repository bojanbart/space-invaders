let sfx

export function createAudioSprite(scene) {
    sfx = scene.sound.addAudioSprite('sfx')
}

export function playPwie() {
    sfx.play('pwie')
}

export function playBoom() {
    sfx.play('boom')
}