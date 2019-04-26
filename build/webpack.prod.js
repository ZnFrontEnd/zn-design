const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { PATHS } = require('./config')

module.exports = {
    mode: 'production',
    entry: {
        app: [
            path.join(PATHS.components, 'index'),
        ],
    },
    output: {
        filename: '[name].js',
        path: PATHS.lib,
    },
    // optimization: {
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         cacheGroups: {
    //             // 将第三方模块提取出来
    //             vendors: {
    //                 test: /node_modules/,
    //                 name: 'vendors',
    //                 enforce: true,
    //                 chunks: 'initial',
    //             },
    //         },
    //     },
    // },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader?cacheDirectory',
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            // modules: true,
                            // importLoaders: 1,
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
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            // modules: true,
                            // importLoaders: 1,
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
            'Components': PATHS.components,
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            // chunkFilename: '[id].[hash].css'
        }),
        new OptimizeCssAssetsPlugin(),
        new WebpackBar({
            name: '🚚  Zn Design',
            color: '#2f54eb',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Zn-design Example Devalopment',
            template: path.join(PATHS.build, 'template/index.html'),
            hash: true,
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            // chunkFilename: '[id].css'
        }),
        // new OptimizeCssAssetsPlugin()
    ],
}
