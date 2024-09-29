const { contextBridge, ipcRenderer } = require("electron");
const dbrepo = require("./dbmanager")

contextBridge.exposeInMainWorld("sqlite", {
  dbrepo,
});

contextBridge.exposeInMainWorld('dialog', {
  showMessageDialog(message, title) {
    ipcRenderer.send('dialog-message', message, title);
  },

  showConfirmDialog(message, title) {
    return ipcRenderer.invoke('dialog-confirm', message, title);
  },
});

contextBridge.exposeInMainWorld('application', {
  checkApp() {
    return ipcRenderer.invoke('check-app');
  },

  getVersion() {
    return ipcRenderer.invoke('get-version');
  }
});
