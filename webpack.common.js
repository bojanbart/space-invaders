const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        vendor: "./src/vendor.js",
        main: "./src/index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.png$/,
                use: 'file-loader'
            }
        ]
    }
}