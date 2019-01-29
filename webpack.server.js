const conf = require('./webpack.shared');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const base = conf('production', true);

const fin = Object.assign(base, {
    entry: ['vue', './scripts/entry.server.js'],
    mode: 'production',
    target: 'node',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2'
    },
    externals: nodeExternals({whitelist: '/.css$/'})
});

module.exports = fin;
