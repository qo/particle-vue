const { app, BrowserWindow } = require('electron')

const config = require('../../config')
const defaultConfig = require('../../../../default-config')

const createWindow = () => {
    const win = new BrowserWindow({
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
    
    win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
})

// https://www.electronjs.org/docs/latest/tutorial/quick-start#quit-the-app-when-all-windows-are-closed-windows--linux
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

