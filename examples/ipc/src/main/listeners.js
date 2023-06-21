const { BrowserWindow, ipcMain } = require('electron')

const registerListeners = () => {
    ipcMain.on('set-title', (event, title) => {
        const webContents = event.sender
        const win = BrowserWindow.fromWebContents(webContents)
        win.setTitle(title)
    })
}

module.exports = registerListeners