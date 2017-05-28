module.exports = {
    uiPort: process.env.PORT || 5000,
    userDir: "/app/config",
    adminAuth: require('./user-auth.js')
}


