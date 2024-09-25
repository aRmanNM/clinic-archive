const { app, BrowserWindow } = require("electron/main");
const db = require("./dbmanager")
const path = require("node:path");
const { dialog, ipcMain } = require("electron");

let win;

if (require('electron-squirrel-startup')) app.quit();

const createWindow = () => {
  win = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
      sandbox: false,
    },
  });

  win.menuBarVisible = false;
  win.loadFile("index.html");

  ipcMain.on('dialog-message', (event, message, title) => {
    dialog.showMessageBox({ message: message, title: title });
  });

  ipcMain.handle('dialog-confirm', async (event, message, title) => {
    const result = await dialog.showMessageBox({
      type: "question", message: message, title: title, 'buttons': [
        'خیر',
        'بله'
      ]
    });
    return result.response;
  });

  win.on('closed', () => {
    win = null;
  })
};

app.on('ready', () => {
  createWindow();
  db.initDb();
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on('before-quit', () => {
  // Perform any necessary cleanup here
  // For example, closing database connections, terminating background processes, etc.

  db.close();
});

// Ensure all Electron processes are terminated
app.on('quit', () => {
  app.exit();
});