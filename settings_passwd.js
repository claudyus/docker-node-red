var bcrypt = require('bcryptjs');
var fs = require('fs')
var when = require("when");

module.exports = {
  type: "credentials",
  users: function(username) {
      return when.promise(function(resolve) {
        var user = { username: "admin", permissions: "*" };
        resolve(user);
       });
  },
  authenticate: function(username, password) {
    return when.promise(function(resolve) {
      // Implement passwd based auth
      fs.readFile('.nodered/.passwd', 'utf8', function(err, h_passwd){
        if (bcrypt.compareSync(password, h_passwd)) {
          resolve ({username: username, permissions: "*"});
        } else {
          // Password mishmatch
          resolve(null)
        }
      })
   });
  }
}
