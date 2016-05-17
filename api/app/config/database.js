var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/default');
//mongoose.connect('mongodb://calldesk:calldesk88129273@ds023052.mlab.com:23052/calldesk');
module.exports = mongoose;