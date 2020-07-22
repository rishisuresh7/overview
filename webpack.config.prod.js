const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    externals: {
        moment: 'moment'
    },
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'docs'),
        pathinfo: true,
        publicPath: '/overview/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use:['style-loader','css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
}