const { app, BrowserWindow } = require('electron')

const registerListeners = require('./listeners')
const createWindow = require('./window')
const initTrayContextMenu = require('./tray')

app.whenReady().then(() => {
    registerListeners()
    const win = createWindow()
    initTrayContextMenu(win)

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})