const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    devtool: 'eval-source-map',

    entry: './src/index.tsx',

    output: {
        filename: './dist/bundle.js',
        path: __dirname
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};

module.exports = config;