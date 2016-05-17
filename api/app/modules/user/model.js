var mongoose = require('../../config/database');
var Schema = mongoose.Schema;

var users = new Schema({
  'name':String,
  'email':String,
  'pass':String,
  'status':{'type':String,'default':'ATIVO'},
  'deleted':{'type':Boolean,'default':false},
  'dcreate':{'type':Date,'default':Date.now}
});

module.exports = mongoose.model('Users',users);