var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  following: [{type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}],
  followers: [{type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}],
  isAdmin: {type: Boolean, default: 'false'},
  dateCreated: Date
}, {collection: 'user'});

module.exports = UserSchema;
