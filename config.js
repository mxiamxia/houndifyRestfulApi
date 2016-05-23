/**
 * Created by min on 5/13/16.
 */


var config = {
    MODE_ENV: 'DEV', //DEV
    redis_host: 'localhost',
    redis_port: 6379,
    redis_db: 0,
    redis_expire: 4*60*60, // four hours
    houndy_clientid: '5Tp0jrUv3EK0LXNGLt_u4A==',
    houndy_clientkey: 'vUMKM3lR6J-uGnUfDI4ENeLvNyvyJ56PQwppZqtjU4ETuO6UrozYz0rZ24M94N82w3RPC2WB9fgQhlYi5IVSzg==',
    Hound_Request_Info: '{"ClientID": "5Tp0jrUv3EK0LXNGLt_u4A==","PartialTranscriptsDesired":true,"Latitude":33.9253,"Longitude":-84.3857}',
    houndy_url: 'https://api.houndify.com/v1/text?query=',
    DEBUG: true,
    ERR: {
        statusCode: 9999,
        errDesc   : 'houndify query fails'
    }
};

module.exports = config;
