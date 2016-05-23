/**
 * Created by min on 5/13/16.
 */


var config = {
    MODE_ENV: 'DEV', //DEV
    redis_host: 'localhost',
    redis_port: 6379,
    redis_db: 0,
    redis_expire: 4*60*60, // four hours
    houndy_clientid: '',
    houndy_clientkey: '',
    Hound_Request_Info: '{"ClientID": "","PartialTranscriptsDesired":true,"Latitude":33.9253,"Longitude":-84.3857}',
    houndy_url: 'https://api.houndify.com/v1/text?query=',
    DEBUG: true,
    ERR: {
        statusCode: 9999,
        errDesc   : 'houndify query fails'
    }
};

module.exports = config;
