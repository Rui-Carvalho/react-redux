const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['react', 'es2015', 'stage-1']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: ['node_modules']
    },
    devServer: {
        port: 5000,
        host: 'localhost',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './'
    }
};
