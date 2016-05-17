var express = require('express');
var router = express.Router();
var Ctrl = require('./controller');

router.get('/', function(req, res) {
	Ctrl.index(req,res);
});

module.exports = router;