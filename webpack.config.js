/*eslint-disable */
/**
* base webpack configuration for the project
* this module will be changed by external code based on desigend evnironments
**/
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#eval-source-map',
  entry: [
    'babel-polyfill',
    path.join(__dirname,'src/index')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src/js'),
    },
    { test: /\.css$/, loader: "style-loader!css-loader" }
  ]
  }
};
