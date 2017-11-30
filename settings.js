module.exports = function () {

  var obj = {
    uiPort: process.env.PORT || 5000,
    userDir: ".nodered/",
    flowFile: "flows.json",
    editorTheme: {
      page: {
        css: "/app/css/node-red.css"
      },
      header: {
          "title": "Docker node-red",
          "image": null,
          "url": "#"
      }
    }
  }
  if (process.env.AUTH_METHOD != 'noauth')
    obj['adminAuth']= require('./settings_' + process.env.AUTH_METHOD + '.js')

  return obj
}


