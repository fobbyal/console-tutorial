/*eslint-disable */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var util = require('./server-util');
var define = require('./dev-definition');

module.exports = function(config,args){
  var host = args.host;
  var port = args.port;
  var prefixes=  ['webpack-dev-server/client?http://'+host+':'+port,];
  config.entry = util.configureEntry(prefixes,config.entry);
  config.plugins = [define];

  console.log(config.entry);

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    inLine: true,
    historyApiFallback: true,
    contentBase: './static',
    stats: {
      colors: true
    }
  }).listen(port, host, function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at ',host,':',port);
  });
}
