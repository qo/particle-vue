const path = require('path')

const config = {}

config.pathToIndexHtml = path.join(__dirname, "src", "renderer", "dist", "index.html")
config.pathToPreloadJs = path.join(__dirname, "src", "preload", "preload.js")

module.exports = config
