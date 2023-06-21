const path = require('path')

const config = {}

config.pathToIndexHtml = path.join(__dirname, "src", "renderer", "dist", "index.html")
config.pathToPreloadJs = path.join(__dirname, "src", "preload", "preload.js")
config.resX = 1920
config.resY = 1080
config.width = 600
config.initialPos = "right-lower"
config.frame = false
config.autoHideMenuBar = true
config.resizable = true
config.alwaysOnTop = false
config.skipTaskbar = false
config.devTools = false

module.exports = config
