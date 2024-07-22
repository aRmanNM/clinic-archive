const dbmgr = require("./db");
const db = dbmgr.db;

function searchPatient(query) {
  try {
    return db
      .prepare(`SELECT * FROM patients WHERE nationalCode LIKE '%${query}%'`)
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

module.exports = {
  searchPatient,
  getPatient,
  updatePatient,
  createPatient,
  createCase,
  getPatientWithImages
};
