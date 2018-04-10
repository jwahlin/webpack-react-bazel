const path = require("path");
console.log("path: " + path.resolve(__dirname))


module.exports = {
    entry: [path.resolve(__dirname, "src/index.js")],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js"
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        symlinks: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};