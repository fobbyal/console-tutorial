/* eslint-disable */
var yargs = require('yargs');

var webpackConfig = require('./webpack.config');

var argv = yargs
  .help('help').alias('help','h')
  .version('0.0.1','version').alias('version','v')
  .options({
    host: {
      description: '<host-name or ip>',
      default: 'localhost',
      type:'string'
    },
    port: {
      description: '<port>',
      alias: 'p',
      default:3000 ,
      type: 'string'
    },
    mode: {
      description: '<simple|hot> simple for reload hot for ',
      choices: ['simple','hot'],
      alias: 'm',
      default: 'simple',
      type: 'string'
    },
  })
  .argv;

var getServer = function(serverMode){
  switch(serverMode) {
    case 'simple':
      return require('./tools/simple-server');
    case 'hot':
      return require('./tools/hot-server');
    default:
      console.log('Mode ['+mode+'] not yet implemented');
      return null;
  }
}

var server = getServer(argv.mode);
if(server){
  server(webpackConfig,argv);
}
