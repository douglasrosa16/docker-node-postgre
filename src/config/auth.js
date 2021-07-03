require('dotenv').config()

export default {
  jwt: {
    secret: '101010',
    expiresIn: process.env.JTW_EXPIRES_IN
  }
}
