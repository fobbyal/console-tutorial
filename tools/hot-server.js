/*eslint-disable */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var util = require('./server-util');
var express = require('express');
var define = require('./dev-definition');


var addHotConfig = function(loader) {
  loader.query = {
    presets: ['es2015'],
    plugins: ['transform-object-rest-spread'],
    env: {
      // only enable it when process.env.NODE_ENV is 'development' or undefined
      development: {
        plugins: [['transform-object-rest-spread','react-transform', {
          transforms: [{
            transform: 'react-transform-hmr',
            // if you use React Native, pass 'react-native' instead:
            imports: ['react'],
            // this is important for Webpack HMR:
            locals: ['module']
          }]
          // note: you can put more transforms into array
          // this is just one of them!
        }]]
      }
    }
  };
}


module.exports = function(config,args){
  var host = args.host;
  var port = args.port;
  var loaders = config.module.loaders;
  /**
  for(var index=0;index<loaders.length;index++){
    if(loaders[index].loader === 'babel'||
      loaders[index].loaders &&
      loaders[index].loaders.indexOf('babel') > -1) {
        addHotConfig(loaders[index]);
    }
  }
  **/
  var prefixes = [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client'];

  config.entry = util.configureEntry(prefixes,config.entry);

  var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    define
  ];

  if(config.plugins){
    config.plugins = config.plugins.concat(plugins);
  }else{
    config.plugins = plugins;
  }

  var app = express();
  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname,'../static', 'index.html'));
  });

  app.listen(port, host, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Listening at http://'+host+":"+port);
  });

}
