const { contextBridge } = require("electron");
const dbrepo = require("./dbmanager")

contextBridge.exposeInMainWorld("sqlite", {
  dbrepo,
});
