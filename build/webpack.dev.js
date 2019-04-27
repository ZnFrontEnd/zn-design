const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { PATHS, config, pkg } = require('./webpack.base')

module.exports = webpackMerge({}, config, {
    mode: 'development',
    devServer: {
        contentBase: PATHS.dist,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                // 将第三方模块提取出来
                vendors: {
                    test: /node_modules/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all',
                    // chunks: 'initial',
                },
                // styles: {
                //     name: 'styles',
                //     test: /\.less$/,
                //     chunks: 'all',
                //     enforce: true,
                // },
            },
        },
    },
    entry: {
        [pkg.name]: path.join(PATHS.example, 'index'),
    },
    output: {
        filename: '[name].js',
        path: PATHS.dist,
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'react-hot-loader/webpack',
                ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Zn-design Example Devalopment',
            template: path.join(PATHS.build, 'template/index.html'),
            hash: true,
        }),
    ],
})
