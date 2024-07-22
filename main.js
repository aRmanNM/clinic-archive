const { app, BrowserWindow } = require("electron/main");
const db = require("./db");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
      sandbox: false,
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  // create required tables structure
  db.db
    .prepare(
      `
    CREATE TABLE IF NOT EXISTS patients (
	    id INTEGER PRIMARY KEY,
	    name TEXT NOT NULL,
	    nationalCode TEXT NOT NULL
    );`
    )
    .run();

  db.db
    .prepare(
      `
    CREATE TABLE IF NOT EXISTS cases (
      id INTEGER PRIMARY KEY,
      image BLOB NOT NULL,
      patientId INTEGER NOT NULL,
      FOREIGN KEY(patientId) REFERENCES patients(id)
    );`
    )
    .run();

  // seed some patients data
  db.db
    .prepare(
      `
    INSERT OR IGNORE INTO patients (id, name, nationalCode)
    VALUES (1, 'patient1', '123'), (2, 'patient2', '345'), (3, 'patient3', '568');`
    )
    .run();

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
