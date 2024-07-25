const dbmgr = require("./db");

const db = dbmgr.db;

function searchPatient(query) {
  try {
    return db
      .prepare(`SELECT * FROM patients WHERE nationalCode LIKE '%${query}%' OR name LIKE '%${query}%'`)
      .all();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function getPatient(id) {
  try {
    return db.prepare(`SELECT * FROM patients WHERE id = ?`).get(id);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function getPatientWithImages(id) {
  try {
    return db.prepare(`SELECT p.id, p.name, p.nationalCode, c.image FROM patients AS p LEFT JOIN cases AS c ON p.id = c.patientId WHERE p.id = ?`).all(id);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function updatePatient(id, name, nationalCode) {
  try {
    return db
      .prepare(`UPDATE patients SET name = ?, nationalCode = ? WHERE id = ?`)
      .run(name, nationalCode, id);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function createPatient(name, nationalCode) {
  try {
    return db
      .prepare(`INSERT INTO patients (name, nationalCode) VALUES (?, ?)`)
      .run(name, nationalCode);

  } catch (err) {
    console.error(err);
    throw err;
  }
}

function createCase(patientid, image) {
  try {
    return db
      .prepare(`INSERT INTO cases (patientId, image) VALUES (?, ?)`)
      .run(patientid, image);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function initDb() {
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS patients (
	    id INTEGER PRIMARY KEY,
	    name TEXT NOT NULL,
	    nationalCode TEXT NOT NULL
    );`
  )
    .run();

  db.prepare(
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
  db.prepare(
    `
    INSERT OR IGNORE INTO patients (id, name, nationalCode)
    VALUES (1, 'patient1', '123'), (2, 'patient2', '345'), (3, 'patient3', '568');`
  )
    .run();
}

function close() {
  db.close();
}

module.exports = {
  searchPatient,
  getPatient,
  updatePatient,
  createPatient,
  createCase,
  getPatientWithImages,
  close,
  initDb
};
