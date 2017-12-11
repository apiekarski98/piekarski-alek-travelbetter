module.exports = function (app) {
  require("./../project/services/user.service.server.js")(app);
  var db = require("./../project/model");
};
