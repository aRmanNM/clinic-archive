const Database = require("better-sqlite3")
const path = require("path")

const dbPath =
    process.env.NODE_ENV === "development"
        ? "./patients.db"
        : path.join(process.resourcesPath, "./patients.db")

const db = new Database(dbPath)
db.pragma("journal_mode = WAL")

exports.db = db
