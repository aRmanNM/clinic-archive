const { app, BrowserWindow } = require("electron/main");
const db = require("./dbmanager")
const path = require("node:path");
const { dialog, ipcMain } = require("electron");
const fs = require("fs");

let win;

if (require('electron-squirrel-startup')) app.quit();

const createWindow = async () => {
  win = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
      sandbox: false,
      devTools: false
    },
  });

  win.menuBarVisible = false;
  win.loadFile("index.html");

  ipcMain.handle('get-version', async (event) => {
    return app.getVersion();
  });

  ipcMain.handle('check-app', async (event) => {
    const metaPath = process.platform === "win32"
      ? app.getPath('appData') + "\\cb37bbc3-9a34-42f4-951c-4175f8326cab"
      : app.getPath('appData') + "/cb37bbc3-9a34-42f4-951c-4175f8326cab";
    // console.log(metaPath);
    if (fs.existsSync(metaPath)) {
      const val = fs.readFileSync(metaPath, "utf8");
      return { value: val }
    } else {
      return { value: "1729499400000" } // valid
      // return { value: "1727683029000" } // less than four
      // return { value: "1727591266000" } // invalid

    }
  });

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