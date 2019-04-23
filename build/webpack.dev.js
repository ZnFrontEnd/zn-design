const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { PATHS } = require('./config')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: PATHS.dist,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    entry: {
        app: [
            path.join(PATHS.example, 'index'),
        ],
    },
    output: {
        filename: '[name].js', // [name]-[hash:8].js
        path: PATHS.dist,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                // 将第三方模块提取出来
                vendors: {
                    test: /node_modules/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'initial',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader?cacheDirectory',
                    // 'react-hot-loader/webpack',
                ],
            },
            {
                test: /\.less$/,
                include: /node_modules/,
                use: [
                    'style-loader', // TODO:prod MiniCssExtractPlugin.loader
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader', // TODO:prod MiniCssExtractPlugin.loader
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]', // class的命名，文件名+类名+哈希
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': PATHS.example,
            'Components': PATHS.components,
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Zn-design Example Devalopment',
            template: path.join(PATHS.build, 'template/index.html'),
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css', // TODO:prod filename: 'css/[name].[hash].css',
            chunkFilename: '[id].css' // TODO:prod filename: '[id].[hash].css',
        }),
        new OptimizeCssAssetsPlugin()
    ],
}
