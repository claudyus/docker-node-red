var bcrypt = require('bcryptjs')
var fs = require('fs')
var randomstring = require("randomstring");

pass = randomstring.generate(7);

console.log("************* YOUR ROOT PASS ******************")
console.log(pass)
console.log("***********************************************")

h_passw = bcrypt.hashSync(pass, 8)

fs.readFile('settings.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/PASS/g, h_passw);

  fs.writeFile('settings.js', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
