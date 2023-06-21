const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  adjust: (w, h) => ipcRenderer.send('adjust', w, h)
})