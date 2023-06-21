const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  updatePos: (pos) => ipcRenderer.send('update-pos', pos)
})