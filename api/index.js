var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

/**BODYPARSER**/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({	extended: true }));

/**Headers**/
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods','GET,POST,JSON,JSONP');
	res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
	next();
});
/**Autorização**/
function authorized(req, res, next) {
	var bearerToken;
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        jwt.verify(bearerToken,'secret',function(err, decoded) {
			if (!err) {
		        req.user = decoded.user;
        		next();
			} else {
				res.json({'error':'Não autorizado!'});
			}
		});
    } else {
        res.json({'error':'Não autorizado!'});
    }
}

/**************************************ROUTES**************************************/
/**Home**/
var home = require('./app/modules/home/route');
app.use('/home',authorized,home);
/**User**/
var user = require('./app/modules/user/route');
app.use('/user',user);

/**STATICS**/
app.use(express.static(path.join(__dirname, 'public')));
//console.log(path.join(__dirname, 'public'));

app.listen(app.get('port'),function(){
	console.log('Servidor rodando! - Port: '+app.get('port'));
});