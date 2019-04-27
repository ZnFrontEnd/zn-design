const path = require('path')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require("mini-css-extract-plugin") // 提取css到单独文件的插件
const { getProjectPath, resolve } = require('./utils')

const pkg = require(getProjectPath('package.json'))
const babelConfig = require('./getBabelCommonConifg')()
const PATHS = {
    build: path.resolve(__dirname, '../build'),
    components: path.resolve(__dirname, '../components'),
    example: path.resolve(__dirname, '../example'),
    lib: path.resolve(__dirname, '../lib'),
    dist: path.resolve(__dirname, '../dist'),
    // site: path.resolve(__dirname, '../site'),
}

babelConfig.plugins.push([
    resolve('babel-plugin-import'),
    {
        style: true,
        libraryName: pkg.name,
        libraryDirectory: 'components',
    },
])
babelConfig.plugins.push([
    resolve('babel-plugin-import'),
    {
        style: true,
        libraryName: 'antd',
        libraryDirectory: 'es',
    },
    'other-package-babel-plugin-import',
])
const config = {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: resolve('babel-loader'),
                options: babelConfig,
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            sourceMap: true,
                        },
                    },
                ],
            },
            // Images
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    minetype: 'image/svg+xml',
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': PATHS.example,
            'Components': PATHS.components,
            [pkg.name]: process.cwd(),
        },
    },
    plugins: [
        new WebpackBar({
            name: '🚚  Zn Design',
            color: '#2f54eb',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    performance: {
        hints: false,
    },
}

module.exports = {
    PATHS,
    pkg,
    config,
}
