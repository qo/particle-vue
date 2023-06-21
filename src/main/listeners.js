const { BrowserWindow, ipcMain } = require('electron')

const config = require('../../config')
const { getCoordinatesFromPos, getPosFromCoordinates } = require('./utils/pos')

const registerListeners = () => {
    ipcMain.on('adjust', (event, w, h) => {

      // Get window object
      const webContents = event.sender
      const win = BrowserWindow.fromWebContents(webContents)

      win.setMinimumSize(0, 0)

      // Update size
      // For some reason in case resizable is set to false,
      // setSize would only change size if it's increased,
      // but wouldn't change size if it's decreased xD
      // I still want user not to be able to resize it,
      // so using this dirty hack will do
      win.setResizable(true)
      win.setSize(w, h)
      win.setResizable(false)

      // Get position adjusted to match the window size
      const bounds = win.getBounds()
      const pos = getPosFromCoordinates(bounds.x, bounds.y)
      const coords = getCoordinatesFromPos(pos, bounds.width, bounds.height)

      // Update position
      win.setPosition(coords.x, coords.y)
    })
}

module.exports = registerListeners