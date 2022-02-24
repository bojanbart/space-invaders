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
    }
}