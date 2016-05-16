var webpack = require('webpack');
var definition =  new webpack.DefinePlugin({
  __DEV__ : true,
});

module.exports = definition;
