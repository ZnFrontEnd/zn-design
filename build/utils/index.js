const path = require('path')

const cwd = process.cwd()
const getProjectPath = (...filePath) => path.join(cwd, ...filePath)

const resolve = moduleName => {
    return require.resolve(moduleName)
}

module.exports = {
    getProjectPath,
    resolve,
}
