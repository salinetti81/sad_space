var express     = require('express'),
    router      = express.Router();
    // passport    = require('passport'),
    // User        = require('../models/userModel');
router.get('/', function(req, res){
	res.redirect('/games.html')
})

module.exports = router;