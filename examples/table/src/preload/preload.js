const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  setPos: (pos) => ipcRenderer.send('set-pos', pos),
  setSize: (x, y) => ipcRenderer.send('set-size', x, y),
})