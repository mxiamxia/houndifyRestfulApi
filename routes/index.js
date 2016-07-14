/**
 * Created by min on 5/13/16.
 */

var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Cyber Object' });
});

router.get('/test', function(req, res, next) {
    var value = url.parse(req.url).data;
    testData(value);
});

var testData = function(value) {
    delayTest(function(){

    });
}

var delayTest = function(cb) {
}

module.exports = router;
