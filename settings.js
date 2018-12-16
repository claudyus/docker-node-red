module.exports = function () {

  var obj = {
    uiPort: process.env.PORT || 5000,
    userDir: ".nodered/",
    flowFile: "flows.json",
    credentialSecret: process.env.SECRET || false,
    editorTheme: {
      page: {
        css: "/app/css/node-red.css"
      },
      header: {
          "title": process.env.TITLE || "Docker node-red",
          "image": null,
          "url": "#"
      }
    }
  }
  if (process.env.AUTH_METHOD && process.env.AUTH_METHOD !== 'noauth')
    obj['adminAuth']= require('./settings_' + process.env.AUTH_METHOD + '.js')

  return obj
}


