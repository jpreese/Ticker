var webpack = require('webpack');
var path = require('path');
var glob_entries = require('webpack-glob-entries')

var BUILD_DIR = path.resolve(__dirname, 'src/dist');
var APP_DIR = path.resolve(__dirname, 'src');
var SERVICES_DIR = path.resolve(__dirname, 'src/services');

var config = {
  entry: {     
    app: APP_DIR + '/index.jsx',
    tickerNumbersService: SERVICES_DIR + '/tickerNumbers.js'
  },
  
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  
  module : {
    loaders : [
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  
  target: 'web'
};

module.exports = config;