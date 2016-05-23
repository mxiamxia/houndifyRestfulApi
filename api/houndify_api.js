/**
 * Created by min on 5/13/16.
 */

var houndifyUtil = require('../utils/houndify_header');
var logger = require('../utils/logger');
var request = require('request');
var _ = require('lodash');
var config = require('../config');
var cache = require('../utils/cache');


var queryHoundify = function (text, uid, callback) {
    var header = houndifyUtil.generateAuthHeaders(config.houndy_clientid, config.houndy_clientkey, uid);

    if (!uid) {
        sendRequest(uid, text, header, callback);
    } else {
        var requestInfo = header['Hound-Request-Info'];
        var requestInfoJson = JSON.parse(requestInfo);
        cache.get(uid, function (err, conversateState) {
            if (err) {
                requestInfoJson.UserID = uid;
                header['Hound-Request-Info'] = JSON.stringify(requestInfoJson)
                sendRequest(uid, text, header, callback);
                return;
            }
            requestInfoJson.UserID = uid;
            if(!_.isEmpty(conversateState)) {
                requestInfoJson.ConversationState = conversateState;
                header['Hound-Request-Info'] = JSON.stringify(requestInfoJson)
            }
            sendRequest(uid, text, header, callback);
        });
    }

};

var sendRequest = function(uid, text, header, callback) {
    logger.info('Houndify headers=' + JSON.stringify(header));
    var options = {
        url: config.houndy_url + text,
        headers: header,
        timeout: 30000
    };

    request(options, function (err, res, body) {
        if (err) {
            logger.debug('houndy err out=' + err);
            callback(err);
        } else if (res.statusCode !== 200) {
            callback(new Error('Houndify request failed with status code: ' + res.statusCode));
        } else {
            logger.debug('Houndify returned data=' + body);
            if (body.indexOf('Authentication failed') > -1) {
                callback(new Error('Authentication failed'));
                return;
            }
            try {
                var result = JSON.parse(body);
                if (!_.isEmpty(result.AllResults[0])) {
                    if (!_.isEmpty(result.AllResults[0].WrittenResponseLong)) {
                        if(!_.isEmpty(result.AllResults[0].ConversationState)) {
                            if(!_.isEmpty(uid)) {
                                cache.set(uid, result.AllResults[0].ConversationState, config.redis_expire);
                            }
                        }
                        callback(null, result)
                    } else {
                        callback(new Error('No answer matched'));
                    }
                } else {
                    callback(new Error('No answer matched'));
                }
            } catch (err) {
                callback(err);
            }
        }
    });
}

exports.queryHoundify = queryHoundify;