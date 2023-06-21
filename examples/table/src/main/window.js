const { BrowserWindow } = require('electron')

const config = require('../../config')
const defaultConfig = require('../../../../default-config')
const getCoordinatesFromPos = require('./utils/pos')

const initialCoords = getCoordinatesFromPos(config.initialPos)

const createWindow = () => {
    const win = new BrowserWindow({
        x: initialCoords.x,
        y: initialCoords.y,
        width: config.width || defaultConfig.width,
        height: config.height || defaultConfig.height,
        transparent: config.transparent || defaultConfig.transparent,
        frame: config.frame || defaultConfig.frame,
        autoHideMenuBar: config.autoHideMenuBar || defaultConfig.autoHideMenuBar,
        resizable: config.resizable || defaultConfig.resizable,
        alwaysOnTop: config.alwaysOnTop || defaultConfig.alwaysOnTop,
        skipTaskbar: config.skipTaskbar || defaultConfig.skipTaskbar,
        webPreferences: {
            preload: config.pathToPreloadJs || defaultConfig.pathToPreloadJs
        }
    })

    win.loadFile(config.pathToIndexHtml || defaultConfig.pathToIndexHtml)

    if (config.devTools || config.devTools === undefined && defaultConfig.devTools)
        win.webContents.openDevTools()
}

module.exports = createWindow