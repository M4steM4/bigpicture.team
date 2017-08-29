const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/src/',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015']
                    ]
                }
            }]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.(png|jpg)$/,
            use: [{
                loader: 'url-loader',
                options: { limit: 10000 }
            }]
        }]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
}

module.exports = config
