const { BrowserWindow, ipcMain } = require('electron')

const config = require('../../config')
const { getCoordinatesFromPos, getPosFromCoordinates } = require('./utils/pos')

const registerListeners = () => {
    ipcMain.on('adjust', (event, w, h) => {

      // Get window object
      const webContents = event.sender
      const win = BrowserWindow.fromWebContents(webContents)
      
      // Get position adjusted to match the window size
      const bounds = win.getBounds()
      const pos = getPosFromCoordinates(bounds.x, bounds.y)
      const coords = getCoordinatesFromPos(pos, bounds.width, bounds.height)

      // Update size and position
      win.setSize(w, h)
      win.setPosition(coords.x, coords.y)
    })
}

module.exports = registerListeners