const { BrowserWindow, ipcMain } = require('electron')

const config = require('../../config')
const getCoordinatesFromPos = require('./utils/pos')

const registerListeners = () => {

    ipcMain.on('set-pos', (event, pos) => {
      const webContents = event.sender
      const win = BrowserWindow.fromWebContents(webContents)
      const coords = getCoordinatesFromPos(pos)
      win.setPosition(coords.x, coords.y)
    })

    ipcMain.on('set-size', (event, x, y) => {
      const webContents = event.sender
      const win = BrowserWindow.fromWebContents(webContents)
      win.setSize(x, y)
    })
}

module.exports = registerListeners