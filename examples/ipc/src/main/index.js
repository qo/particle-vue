const { app } = require('electron')

const registerListeners = require('./listeners')
const createWindow = require('./window')

app.whenReady().then(() => {
    registerListeners()
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})