var config = require('../config');

var env = process.env.NODE_ENV || "development";


var log4js = require('log4js');
log4js.configure({
    appenders: [
        {type: 'console'},
        {type: 'file', filename: __dirname + '/../logs/co-houndify.log', maxLogSize: 20480, backups:4,category: 'houndify'},
        {type: 'file', filename: __dirname + '/../logs/co-err.log', maxLogSize: 20480, backups:4,category: 'houndifyerr'}
    ],
    replaceConsole: true
});

var logger = log4js.getLogger('houndify');
//var loggererr = log4js.getLogger(('houndifyerr'));
//logger.setLevel(config.debug && env !== 'test' ? 'DEBUG' : 'ERROR');

module.exports = logger;
