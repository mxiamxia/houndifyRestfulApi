/**
 * Created by min on 5/13/16.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Cyber Object' });
});

module.exports = router;
