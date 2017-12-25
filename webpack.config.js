const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

const entry = [
  path.join(__dirname, '/client/client.jsx')
];
const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new ExtractTextPlugin('../css/main.css', {
    allChunks: true
  }),
];
if (debug) {
  entry.push('webpack-hot-middleware/client');
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.NoEmitOnErrorsPlugin());
}


module.exports = {
  devtool: debug ? 'inline-sourcemap' : false,
  entry,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [
          /(node_modules|bower_components)/
        ],
        loader: [
          'react-hot-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.json$/, loader: 'json-loader',
      }
    ],
  },
  output: {
    path: path.join(__dirname, '/client/assets/js'),
    publicPath: '/',
    filename: 'client.min.js',
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  plugins,
  resolve: {
    extensions: ['.jsx', '.js']
  },
};
