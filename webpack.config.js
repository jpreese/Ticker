var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  
  entry: {     
    bundle: APP_DIR + '/app.js',
  },
  
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  
  target: 'web'
};

module.exports = config;