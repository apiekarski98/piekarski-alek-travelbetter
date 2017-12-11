var mongoose = require('mongoose');
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);
UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;

module.exports = UserModel;

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, user);
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(userId) {
  return UserModel.findById(userId);
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}
