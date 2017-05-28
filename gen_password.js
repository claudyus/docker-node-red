var bcrypt = require('bcryptjs')
var fs = require('fs')
var randomstring = require("randomstring");

/*
If .passwd file not exists in working directory generate a random password
and store it hashed inside this file.
The file is used by user-auth.js if AUTH_METHOD is set to passwd.

*/

if (fs.existsSync('.passwd')) {
  console.log('Password already generated, skipping...')
  return 0
}

pass = randomstring.generate(10);

console.log("************* YOUR ADMIN PASS ******************")
console.log(pass)
console.log("***********************************************")

h_passw = bcrypt.hashSync(pass, 8)

fs.writeFile('.passwd', h_passw, 'utf8', function (err) {
 if (err) return console.log(err);
});
