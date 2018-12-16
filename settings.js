module.exports =  {
  uiPort: process.env.PORT || 5000,
  userDir: ".nodered/",
  flowFile: "flows.json",
  credentialSecret: process.env.SECRET || false,
  adminAuth: process.env.AUTH_METHOD ? require('./settings_' + process.env.AUTH_METHOD + '.js') : require('./settings.js'),
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
