var express = require('express');
var router = express.Router();
var user = require('./controller');

router.get('/', function(req, res) {
	user.index(req,res);
});

router.post('/signup', function(req, res) {
	user.signup(req,res);
});

router.post('/signin', function(req, res) {
	user.signin(req,res);
});

module.exports = router;