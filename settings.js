var bcrypt = require('bcryptjs');
var fs = require('fs')
var request = require('request');
var when = require("when");
var debug = require("debug")('user-auth');

var fail_words = ["Invalid", "Failed", "Cannot", "Unauthorized", "Not Authorized"]

var check_marray = function(array, string){
  // check for the presence of an element of `array`
  // inside `string` and return true
  var upperString = string.toUpperCase()
  for (var idx in array) {
    if (upperString.indexOf(array[idx].toUpperCase()) != -1) {
      debug("Found " + array[idx] + " in response")
      return true
    }
  }
  return false
}

module.exports = {
  uiPort: process.env.PORT || 5000,
  userDir: "/app/config",
if (! process.env.NO_AUTH ) {
  adminAuth:  {
    type: "credentials",
    users: function(username) {
        return when.promise(function(resolve) {
          var user = { username: username, permissions: "*" };
          resolve(user);
         });
    },
    authenticate: function(username, password) {
      return when.promise(function(resolve) {
        // Implement passwd based auth
        debug("Auth method set to " + process.env.AUTH_METHOD)
        if (process.env.AUTH_METHOD == 'passwd') {
          fs.readFile('.passwd', 'utf8', function(err, h_passwd){
            if (bcrypt.compareSync(password, h_passwd)) {
              resolve ({username: 'admin', permissions: "*"});
            } else {
              // Password mishmatch
              debug("Login failed for user " + username)
              resolve(null)
            }
          })
        } else if (process.env.AUTH_METHOD == 'http') {
          request.post({url: process.env.AUTH_URL,
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({username: username, user: username,
                password: password})}, function (err, response, body) {
            if (err) throw (err)

            if (response.statusCode > 300){
              // login fails if status code is > 300, like website that return 401 or 403
              // those website are not common as per https://core.trac.wordpress.org/ticket/25446
              debug("Login failed for user " + username + " http statusCode is " + response.statusCode)
              resolve(null);
            } else {
              // if statusCode is 200 we could attempt to detect some words inside
              // http body to recognize failed login
              if (check_marray(fail_words, body)) {
                debug("Login failed for user " + username + " due to response content")
                resolve(null)
              } else {
                // we assume that the login was succesfull, this is prone to false-positive
                resolve({username: username, permissions: "*"});
              }
            }
          });
        } else {
          // Auth method not implemented
          console.log('ERROR: Auth method ' + process.env.AUTH_METHOD + ' not implemented!')
          resolve(null)
        }
     });
    }
  }
}
