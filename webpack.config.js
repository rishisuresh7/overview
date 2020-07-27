const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    externals: {
        moment: 'moment'
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
        }),
        new CopyWebPackPlugin({
            patterns: [
                {
                    from: './src/assets',
                    to: './assets',
                    globOptions: {
                        ignore: [
                            '**/.DS_Store',
                        ]
                    },
                },
                {
                    from: './src/favicon.ico',
                    to: './favicon.ico',
                },
                {
                    from: './src/manifest.json',
                    to: './manifest.json',
                },
            ]
        }),
    ],
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'docs'),
        pathinfo: true,
        publicPath: '/',
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: true,
        port: 4000,
        transportMode: 'ws',
        host: '0.0.0.0',
    }
}