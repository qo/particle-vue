const { BrowserWindow, ipcMain } = require('electron')

const updatePos = (win, pos) => {
    switch (pos) {
        case 'left-upper':
            win.setPosition(0, 0)
            break
        case 'right-upper':
            win.setPosition(500, 0)
            break
        case 'right-lower':
            win.setPosition(500, 500)
            break
        case 'left-lower':
            win.setPosition(0, 500)
            break
    }
}

const registerListeners = () => {
    ipcMain.on('update-pos', (event, pos) => {
        const webContents = event.sender
        const win = BrowserWindow.fromWebContents(webContents)
        updatePos(win, pos)
    })
}

module.exports = registerListeners