const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
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
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            exclude: [/.DS_Store/],
            runtimeCaching: [{
                urlPattern: new RegExp('https://rishisuresh7.github.io/overview'),
                handler: 'StaleWhileRevalidate'
              }]
        }),
    ],
}