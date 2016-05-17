var mongoose = require('mongoose');
var User = require('./model');
var jwt = require('jsonwebtoken');
var sha1 = require('sha1');

module.exports = {
	index:function(req,res){
		res.json({'ok':'All'});
	},
	signup:function(req,res){
		var item = req.body;
		if (item){
			item.pass = sha1(item.pass);
			var user = new User(item);
			user.save(function (err) {
				if (err) {
					console.log(err);
					res.json({'error':'Erro ao salvar!'});
				} else {
					res.json({'ok':'Cadastrado com sucesso!'});
				}
			});
		} else {
			res.json({'error':'Dados incompletos!'});
		};
	},
	signin:function(req,res){
		var item = {
			email:req.body.email || false,
			pass:req.body.pass || false
		};
		if (item.email&&item.pass){
			item.pass = sha1(item.pass);
			User.findOne(item,{'pass':0,'__v':0},function(err,data){
				if (!err) {
					if(data){
						var token = jwt.sign({'user':data},'secret');
						res.json({'ok':'Logado com sucesso!','token':token});
					} else {
						res.json({'error':'Usuário invalido!'});
					}
				} else {
					res.json({'error':err});
				}
			});
		} else {
			res.json({'error':'Dados incompletos!'});
		};
	}
};