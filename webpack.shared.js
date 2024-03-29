const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

/**
 * @param {string} env The node environment as a string.
 * @param {boolean} ssr If true, webpack will deploy assets for server-side rendering.
 * @returns {object} A webpack configuration based on the supplied environment string.
 */
module.exports = (env, ssr = false) => {
    return {
        entry: ['core-js/fn/promise', './scripts/entry.client.js'],
        output: {
            filename: env === 'development' ? 'js/[name].js' : 'js/[chunkhash].js',
            path: env === 'development' ? path.resolve(__dirname, 'build') : path.resolve(__dirname, 'dist')
        },
        module: { rules: getRules(env) },
        resolve: {
            extensions: ['.js', '.vue', '.scss'],
            alias: {
                TextPlugin: path.resolve(__dirname, './scripts/vendor/TextPlugin.min.js'),
                MorphSVG: path.resolve(__dirname, './scripts/vendor/MorphSVGPlugin.min.js')
            }
        },
        plugins: getPlugins(env, ssr)
    };
};

/**
 * @param {string} env The node environment as a string.
 * @returns {object} A set of rules based on the node environment.
 */
const getRules = (env) => {
    const rules = [
        {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            options: {
                formatter: require('eslint-friendly-formatter'),
                emitWarning: true,
                fix: true
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: { js: 'babel-loader' },
                cssModules: { minimize: env !== 'development' }
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: { loader: 'babel-loader' }
        },
        {
            test: /\.styl$/,
            loader: ['style-loader', 'css-loader', 'stylus-loader']
        },
        {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: env === 'development' ? '[name].[ext]' : '[hash].[ext]',
                        outputPath: 'images/',
                        publicPath: '/'
                    }
                }
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: env === 'development' ? '[name].[ext]' : '[hash].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '/'
                    }
                }
            ]
        },
        {
            test: /\.(mp3|ogg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'audio/',
                        publicPath: '/'
                    }
                }
            ]
        }
    ];

    const devRules = [
        {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                },
                {
                    loader: 'sass-loader',
                    options: { sourceMap: env === 'development' }
                },
                {
                    loader: 'postcss-loader',
                    options: { sourceMap: true }
                }
            ]
        }
    ];

    const prodRules = [
        {
            test: /\.scss/,
            use: [
                'vue-style-loader',
                {
                    loader: ExtractTextPlugin.loader,
                    options: { publicPath: '/' }
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ]
        }
    ];

    return env === 'development' ? rules.concat(devRules) : rules.concat(prodRules);
};

/**
 * @param {string} env The node environment as a string.
 * @param {boolean} ssr If true, webpack will deploy assets for server-side rendering.
 * @returns {object} An object containing plugins to be included in the webpack build.
 */
const getPlugins = (env, ssr) => {
    const pluginPack = [
        new webpack.LoaderOptionsPlugin({
            options: {}
        }),
        new StyleLintPlugin({
            fix: env !== 'development',
            configOverrides: {
                rules:
                    env === 'development'
                        ? {}
                        : {
                              'order/order': ['dollar-variables', 'declarations', 'at-rules', 'rules'],
                              'order/properties-alphabetical-order': true
                          }
            },
            files: ['**/*.{vue,scss}']
        }),
        new HtmlWebpackPlugin({
            title: 'Jennie Kropff Photgraphy',
            filename: 'views/index.html',
            template: './views/index.html',
            favicon: 'favicon.ico',
            inject: false,
            minify: {
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true
            },
            environment: env
        }),
        new VueLoaderPlugin(),
        new VuetifyLoaderPlugin()
    ];

    if (env === 'development') {
        pluginPack.push(new CleanWebpackPlugin(['build']));
    } else {
        ssr && pluginPack.push(new CleanWebpackPlugin(['dist']));
        pluginPack.push(
            new ExtractTextPlugin({
                filename: 'css/[contenthash].css',
                allChunks: true
            })
        );
        pluginPack.push(new OptimizeCSSAssetsPlugin({}));
        !ssr && pluginPack.push(new BundleAnalyzerPlugin());
        ssr && pluginPack.push(new VueSSRServerPlugin());
    }

    return pluginPack;
};
