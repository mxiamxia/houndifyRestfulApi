/**
 * Created by min on 5/13/16.
 */

var _ = require('lodash');
var houndifyApi = require('../api/houndify_api');
var config = require('../config');
var querystring = require('querystring');
var url = require('url');
var logger = require('../utils/logger');

var index = function (req, res, next) {
    var query = querystring.parse(url.parse(req.url).query);
    console.log('url path=' + req.url.path);

    if (_.isEmpty(query) || _.isEmpty(query.query)) {
        res.statusCode = 500;
        return next(new Error('invalid request from client'));
    }

    var uid = null;
    if (!_.isEmpty(query.userid)) {
        uid = query.userid;
    }

    var text = query.query;
    logger.info('received text=' + text);
    houndifyApi.queryHoundify(text, uid, function (err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
};

exports.index = index;