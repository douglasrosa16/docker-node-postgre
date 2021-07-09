require('dotenv').config()

export default {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JTW_EXPIRES_IN
  }
}
