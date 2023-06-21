const { Menu, Tray, BrowserWindow } = require('electron')

const config = require('../../config')

const initTrayContextMenu = (win) => {
    const tray = new Tray(config.pathToTrayIcon)
    tray.setToolTip(config.tooltip)
    
    const contextMenu = Menu.buildFromTemplate([
      { 
        label: 'Left Upper', 
        type: 'radio',
        click: () => win.setPosition(0, 0)
      },
      { 
        label: 'Right Upper', 
        type: 'radio', 
        click: () => win.setPosition(500, 0)
      },
      { 
        label: 'Right Lower', 
        type: 'radio', 
        checked: true,
        click: () => win.setPosition(500, 500)
      },
      { 
        label: 'Left Lower', 
        type: 'radio', 
        click: () => win.setPosition(0, 500)
      },
    ])
    
    tray.setContextMenu(contextMenu)
}

module.exports = initTrayContextMenu