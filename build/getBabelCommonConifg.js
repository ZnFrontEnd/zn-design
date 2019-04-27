const { resolve } = require('./utils')

module.exports = function (/* modules */) {
    const plugins = [
        resolve('@babel/plugin-transform-object-assign'), // Object.assign 解析
        [
            resolve('@babel/plugin-transform-runtime'),
            {
                helpers: false,
            },
        ],
        resolve('@babel/plugin-transform-spread'), // 扩展符 解析
        resolve('@babel/plugin-transform-template-literals'), // 字符串模板 解析
        resolve('@babel/plugin-proposal-export-namespace-from'), // export * as xx from 'xx.js'
        [
            resolve('@babel/plugin-proposal-decorators'),
            {
                legacy: true,
            },
        ],
        [
            resolve('@babel/plugin-proposal-class-properties'),
            {
                loose: true,
            },
        ],
    ]
    const presets = [
        resolve('@babel/preset-react'),
        resolve('@babel/preset-env'),
    ]

    return {
        presets,
        plugins,
    }
}
