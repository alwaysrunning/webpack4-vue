const base = require('./webpack.config.base')
const merge = require('webpack-merge')
// const webpack = require('webpack')

module.exports = merge(base, {
    devServer : {
        port: 8089,
        overlay: true,
        host: '0.0.0.0',
        open: true,
        hot: true,
        inline: true
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]
})