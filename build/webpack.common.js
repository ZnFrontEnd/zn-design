const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    build: path.join(__dirname, 'build'),
    public: path.join(__dirname, '../public'),
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
}

module.exports = {
    entry: {
        app: [
            // 'react-hot-loader/patch',
            path.join(PATHS.src, 'index'),
        ],
        // vendor: ['react', 'react-dom', 'react-router-dom'],
    },
    output: {
        filename: '[name].js', // [name]-[hash:8].js
        // publicPath: PATHS.public,
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
                test: /\.css$/,
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
                    'postcss-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader', // loader需要按顺序
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // css模块加载
                            localIdentName: '[name]-[local]-[hash:base64:5]', // class的命名，文件名+类名+哈希
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.join(PATHS.src),
            'react-dom': '@hot-loader/react-dom',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            template: path.join(PATHS.build, '../template/index.html'),
            favicon: path.join(PATHS.public, 'favicon.ico'),
            hash: true,
        }),
    ],
}
