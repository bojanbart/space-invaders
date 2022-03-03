const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "space_invaders.js",
        path: path.resolve(__dirname, 'dist')
    }
}