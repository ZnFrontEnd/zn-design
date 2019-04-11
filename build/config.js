const path = require('path')

// TODO: path的解析
const PATHS = {
    build: path.resolve(__dirname, '../build'),
    components: path.resolve(__dirname, '../components'),
    example: path.resolve(__dirname, '../example'),
    lib: path.resolve(__dirname, '../lib'),
    dist: path.resolve(__dirname, '../dist'),
    // site: path.resolve(__dirname, '../site'),
}
exports.PATHS = PATHS
