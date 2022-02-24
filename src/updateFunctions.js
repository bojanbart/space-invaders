import state from './state.js'

let invaderLAnimation
let invaderMAnimation
let invaderSAnimation

export function updateInvadersPosition() {
    if(state.invadersMoveDirection === 'right'){
        invaderLAnimation = "invaderLRight"
        invaderMAnimation = "invaderMRight"
        invaderSAnimation = "invaderSRight"
    } else {
        invaderLAnimation = "invaderLLeft"
        invaderMAnimation = "invaderMLeft"
        invaderSAnimation = "invaderSLeft"
    }

    state.invadersL.children.iterate(invader => {
        invader.anims.play(invaderLAnimation, true)
    })
    state.invadersM.children.iterate(invader => {
        invader.anims.play(invaderMAnimation, true)
    })
    state.invadersS.children.iterate(invader => {
        invader.anims.play(invaderSAnimation, true)
    })
}