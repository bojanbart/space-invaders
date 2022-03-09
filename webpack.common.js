const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path");

module.exports = {
    entry: {
        vendor: "./src/vendor.js",
        main: "./src/index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./template.html"
        })
    ],
    module: {
        rules: [
            {
              test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /vendor\.js/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
            {
                test: /\.(mp3|ogg|m4a|ac3)/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "audio"
                    }
                }
            }
        ]
    }
}