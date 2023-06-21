const path = require('path')

const config = {}

config.pathToIndexHtml = path.join(__dirname, "src", "renderer", "dist", "index.html")
config.pathToPreloadJs = path.join(__dirname, "src", "preload", "preload.js")
config.pathToTrayIcon = path.join(__dirname, "assets", "vue.png")
config.tooltip = "Tray Widget Example"

module.exports = config
