var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CompressionPlugin = require('compression-webpack-plugin'),
    NyanProgressPlugin = require('nyan-progress-webpack-plugin');

var PATHS = {
    src: path.join(__dirname + '/src/'),
    build: path.join(__dirname + '/build/js')
};

var config = {
    entry: {
        bundle: [PATHS.src + '/index.js']
    },
    output: {
        path: PATHS.build,
        filename: '[name].min.js'
    },
    module: {
        loaders: [{
            test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 3 versions!sass?outputStyle=compressed')
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }, {
            test: require.resolve('react'),
            loader: 'expose?React'
        }]
    },
    sassLoader: {
        includePaths: ['node_modules/foundation-sites/scss']
    },
    plugins: [
        new NyanProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'iBid POC',
            template: 'index.ejs',
            hash: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            exclude: /\.test\.js/i,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new ExtractTextPlugin('[name].min.css'),
        new BrowserSyncPlugin({
            proxy: 'localhost:8080'
        }, {
            name: 'bs-instance',
            callback: function() {
                console.log('browserSync started!');
            },
            reload: true
        }),
        new CompressionPlugin({
            asset: 'ibidpoc.gz',
            algorithm: 'gzip',
            regExp: /\.js$|\.html$|\.css$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    resolve: {
        extensions: ['', '.js', '.es6', 'jsx']
    },
    devServer: {
        contentBase: PATHS.src,
        inline: true,
        stats: 'errors-only'
    }
};

module.exports = config;
