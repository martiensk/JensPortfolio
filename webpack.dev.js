const conf = require('./webpack.shared');
const path = require('path');

const dev = Object.assign(conf('development'), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: ['build/', path.join(__dirname, 'photos')],
        compress: true,
        port: 8081,
        index: 'views/index.html',
        overlay: true
    }
});

module.exports = dev;
