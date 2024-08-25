const { contextBridge, ipcRenderer } = require("electron");
const dbrepo = require("./dbmanager")

contextBridge.exposeInMainWorld("sqlite", {
  dbrepo,
});

contextBridge.exposeInMainWorld('dialog', {
  showDialogMessage(message, title) {
    ipcRenderer.send('dialog-message', message, title);
  }
});
