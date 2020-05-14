const contentful = require('contentful')

const config = {
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
}

module.exports = {
  createClient() {
    return contentful.createClient(config)
  }
}
