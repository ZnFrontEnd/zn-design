const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const { PATHS, config, pkg } = require('./webpack.base')

module.exports = webpackMerge({}, config, {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    warnings: false,
                },
            }),
        ],
    },
    entry: {
        [`${pkg.name}.min`]: path.join(PATHS.components, 'index'),
    },
    output: {
        library: pkg.name,
        libraryTarget: 'umd',
        filename: '[name].js',
        path: PATHS.dist,
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
        'antd': 'antd',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ],
})
