require('dotenv').config()

module.exports = {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JTW_EXPIRES_IN
  }
}
