module.exports = {
  uiPort: process.env.PORT || 5000,
  userDir: ".nodered/",
  flowFile: "flows.json",
  adminAuth: require('./settings_' + process.env.AUTH_METHOD + '.js'),
  editorTheme: {
    page: {
      css: "/app/css/node-red.css"
    },
    header: {
        "title": "Skyfield Machine",
        "image": null,
        "url": "#"
    }
  }
}


