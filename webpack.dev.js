const conf = require('./webpack.shared');

const dev = Object.assign(conf('development'), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: 'build/',
        compress: true,
        port: 8081,
        index: 'views/index.html',
        overlay: true
    }
});

module.exports = dev;
