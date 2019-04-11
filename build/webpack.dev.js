const path = require('path')
const webpack = require('webpack')
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
                    'react-hot-loader/webpack',
                ],
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader', // loader需要按顺序
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // css模块加载
                            localIdentName: '[name]-[local]-[hash:base64:5]', // class的命名，文件名+类名+哈希
                            importLoaders: 1,
                        },
                    },
                    'less-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': PATHS.example,
            'components': PATHS.components,
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Zn-design Example Devalopment',
            template: './template/index.html',
            hash: true,
        }),
    ],
}
