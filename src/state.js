export default {
    invadersS: null,
    invadersM: null,
    invadersL: null,
    player: null,
    score: 0,
    scoreText: null,
    game: null,
    cursors: null,
    invadersMoveDirection: null,

    setStartState: function() {
        this.invadersMoveDirection = 'right'
    },
    toggleInvadersMoveDirection: function () {
        if(this.invadersMoveDirection === 'right'){
            this.invadersMoveDirection = 'left'
        } else {
            this.invadersMoveDirection = 'right'
        }
    }
}