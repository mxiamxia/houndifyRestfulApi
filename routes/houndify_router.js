/**
 * Created by min on 5/13/16.
 */

var express = require('express');
var router = express.Router();
var houndifyController = require('../controllers/houndify_controller');


router.get('/', houndifyController.index);



module.exports = router;
