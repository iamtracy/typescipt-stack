const fs = require('fs');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
    return {
        entry: './src/server.ts',
        output: {
            path: path.join(__dirname, './dist'),
            filename: 'server.js',
        },
        resolve: {
            extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        },
        module: {
            loaders: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
            }, ],
        },
        plugins: [
            new NodemonPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    domain: JSON.stringify(env.NODE_ENV),
                    production: env.production
                }
            })
        ],
        externals: [nodeExternals()],
        target: 'node',
    }
};