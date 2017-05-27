module.exports = {
  uiPort: process.env.PORT || 5000,
  adminAuth: {
    type: "credentials",
    users: [{
      username: "root",
      password: "PASS",
      permissions: "*"
    }]
  },
  userDir: "/app/config"
}
