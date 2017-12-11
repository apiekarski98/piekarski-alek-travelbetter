var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/project', {useMongoClient: true});
module.exports = db;
