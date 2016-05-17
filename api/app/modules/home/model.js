var mongoose = require('../../config/database');
var Schema = mongoose.Schema;

var item = new Schema({
});

module.exports = mongoose.model('Home',item);