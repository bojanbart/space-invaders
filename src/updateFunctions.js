import state from './state.js'
import config from './config.js'

let invaderLAnimation
let invaderMAnimation
let invaderSAnimation
let invadersVelocity

export function updateInvadersPosition() {
    if(state.invadersMoveDirection === 'right'){
        invaderLAnimation = "invaderLRight"
        invaderMAnimation = "invaderMRight"
        invaderSAnimation = "invaderSRight"
        invadersVelocity = config.invadersSpeed
    } else {
        invaderLAnimation = "invaderLLeft"
        invaderMAnimation = "invaderMLeft"
        invaderSAnimation = "invaderSLeft"
        invadersVelocity = config.invadersSpeed * -1
    }

    state.invadersL.children.iterate(invader => {
        invader.anims.play(invaderLAnimation, true)
        invader.setVelocityX(invadersVelocity)
    })
    state.invadersM.children.iterate(invader => {
        invader.anims.play(invaderMAnimation, true)
        invader.setVelocityX(invadersVelocity)
    })
    state.invadersS.children.iterate(invader => {
        invader.anims.play(invaderSAnimation, true)
        invader.setVelocityX(invadersVelocity)
    })
}