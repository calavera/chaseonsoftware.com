var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    resolve: {
        modulesDirectories: ['node_modules', 'sass'],
        extensions: ['', '.json', '.jsx', '.js']
    },
    entry: {
        app: ['./src/js/entry.js']
    },
    output: {
        path: __dirname + '/public',
        filename: '/js/bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            Router: 'react-router'
        }),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/)
    ],
    module: {
        loaders: [
            { test: /\.(?:jsx|js)$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css-loader?sourceMap!sass?sourceMap') },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css-loader') },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.(ico)$/, loader: 'static-loader' }
        ]
    }
};
