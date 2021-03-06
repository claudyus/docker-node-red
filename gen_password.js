var bcrypt = require('bcryptjs')
var fs = require('fs')
var randomstring = require("randomstring");

/*
Usage: node gen_password.js [-f] [-p <fixed_password>]

If .nodered/.passwd file not exists generate a random password
and store it hashed inside this file.
The file is used by settings_passwd.js if AUTH_METHOD is set to `passwd`.

Use -f option to force generation of new password if .passwd file exists.
Use -p option to preset a know password
*/

if (fs.existsSync('.nodered/.passwd') && process.argv.indexOf('-f') == -1) {
  console.log('Password already generated, skipping...')
  return 0
}

if (process.argv.indexOf("-p") == -1) {
  pass = randomstring.generate(10);

  console.log("************* YOUR ADMIN PASS ******************")
  console.log(pass)
  console.log("***********************************************")
} else {
  pass = process.argv[process.argv.indexOf("-p") + 1]
}

h_passw = bcrypt.hashSync(pass, 8)

fs.writeFile('.nodered/.passwd', h_passw, 'utf8', function (err) {
  if (err) return console.log(err);
});
