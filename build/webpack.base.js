const path = require('path')
const WebpackBar = require('webpackbar')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin") // 提取css到单独文件的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩css插件
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
    output: {
        library: pkg.name,
        libraryTarget: 'umd',
    },
    devtool: 'source-map',
    optimization: {
        // runtimeChunk: 'single',
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            // new UglifyJsPlugin({
            //     cache: true,
            //     parallel: true,
            //     sourceMap: true,
            //     uglifyOptions: {
            //       warnings: false,
            //     },
            // }),
        ],
        splitChunks: {
            // cacheGroups: {
            //     // 将第三方模块提取出来
            //     vendors: {
            //         test: /node_modules/,
            //         name: 'vendors',
            //         enforce: true,
            //         chunks: 'initial',
            //     },
            //     styles: {
            //         name: 'styles',
            //         test: /\.less$/,
            //         chunks: 'all',
            //         enforce: true,
            //     },
            // },
        },
    },
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
    // externals: {
    //     react: {
    //         root: 'React',
    //         commonjs2: 'react',
    //         commonjs: 'react',
    //         amd: 'react',
    //     },
    //     'react-dom': {
    //         root: 'ReactDOM',
    //         commonjs2: 'react-dom',
    //         commonjs: 'react-dom',
    //         amd: 'react-dom',
    //     },
    //     'antd': {
    //         root: 'antd',
    //         commonjs2: 'antd',
    //         commonjs: 'antd',
    //         amd: 'antd',
    //     },
    // },
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
            filename: 'css/[name].css',
        }),
    ],
}

module.exports = {
    PATHS,
    config,
}
