const { resolve } = require('./utils')

module.exports = function (/* modules */) {
    const plugins = [
        [
            resolve('@babel/plugin-transform-runtime'),
            {
                helpers: false,
            },
        ],
        resolve('@babel/plugin-proposal-class-properties'),
        [
            resolve('@babel/plugin-proposal-decorators'),
            {
                legacy: true,
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
