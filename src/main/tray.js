const { Menu, Tray, BrowserWindow } = require('electron')

const config = require('../../config')
const { getCoordinatesFromPos } = require('./utils/pos')

const initTrayContextMenu = (win) => {

    const tray = new Tray(config.pathToTrayIcon)
    tray.setToolTip(config.tooltip)
    
    const contextMenu = Menu.buildFromTemplate([
      { 
        label: 'Left Upper', 
        type: 'radio',
        click: () => {
          const bounds = win.getBounds()
          const coords = getCoordinatesFromPos('left-upper', bounds.width, bounds.height)
          win.setPosition(coords.x, coords.y)
        }
      },
      { 
        label: 'Right Upper', 
        type: 'radio', 
        click: () => {
          const bounds = win.getBounds()
          const coords = getCoordinatesFromPos('right-upper', bounds.width, bounds.height)
          win.setPosition(coords.x, coords.y)
        }
      },
      { 
        label: 'Right Lower', 
        type: 'radio', 
        checked: true,
        click: () => {
          const bounds = win.getBounds()
          const coords = getCoordinatesFromPos('right-lower', bounds.width, bounds.height)
          win.setPosition(coords.x, coords.y)
        }
      },
      { 
        label: 'Left Lower', 
        type: 'radio', 
        click: () => {
          const bounds = win.getBounds()
          const coords = getCoordinatesFromPos('left-lower', bounds.width, bounds.height)
          win.setPosition(coords.x, coords.y)
        }
      },
    ])
    
    tray.setContextMenu(contextMenu)
}

module.exports = initTrayContextMenu