let lib = {}

lib.response = require('./response')
lib.errorManager = require('./error')
lib.createUser = require('./users_routes/addUser')
lib.getUser = require('./users_routes/getUser')
lib.auth = require('./users_routes/auth')
lib.addWebsite = require('./website_routes/addWebsite')
lib.getOneWebsite = require('./website_routes/getOneWebsite')
lib.getWebsitebyName = require('./website_routes/getWebsitebyName')
lib.getWebsites = require('./website_routes/getWebsites')
lib.updateLike = require('./website_routes/updateLike')
lib.addView = require('./website_routes/addView')

module.exports = lib