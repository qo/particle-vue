const path = require('path')

const config = {}

config.pathToIndexHtml = path.join(__dirname, "src", "renderer", "dist", "index.html")
config.pathToPreloadJs = path.join(__dirname, "src", "preload", "preload.js")
config.resX = 1920
config.resY = 1080
config.width = 600
config.frame = false
config.autoHideMenuBar = true
config.resizable = false
config.alwaysOnTop = true
config.skipTaskbar = true
config.devTools = false
config.pathToTrayIcon = path.join(__dirname, "assets", "vue.png")
config.tooltip = "Tray Widget Example"
config.taskBarHeight = 40

module.exports = config
