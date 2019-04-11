const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                            importLoaders: 1,
                        },
                    },
                    'less-loader',
                ],
            },
        ],
    },
    // resolve: {
    //     extensions: ['.js', '.jsx'],
    //     alias: {
    //         '@': path.join(PATHS.src),
    //     },
    // },
    plugins: [
        new CleanWebpackPlugin(['dist']),
    ],
}
