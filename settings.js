module.exports = {
  uiPort: process.env.PORT || 5000,
  adminAuth: {
    type: "credentials",
    users: [{
      username: "admin",
      password: "PASS",
      permissions: "*"
    }]
  },
  userDir: "/app/config"
}
