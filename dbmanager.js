const dbmgr = require("./db");

const db = dbmgr.db;

function searchPatient(query) {
  query = toEnDigit(query);
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
    return db.prepare(`SELECT p.id, p.name, p.nationalCode, p.phoneNumber, p.insuranceId, p.createdAt, p.lastVisitedAt, c.id as caseId, c.image, c.createdAt as caseCreatedAt FROM patients AS p LEFT JOIN cases AS c ON p.id = c.patientId WHERE p.id = ? ORDER BY caseCreatedAt DESC`).all(id);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function getPatientCase(id) {
  try {
    return db.prepare(`SELECT * FROM cases WHERE id = ?`).get(id);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function updatePatient(id, name, nationalCode, phoneNumber, lastEditedAt, insuranceId) {
  name = toEnDigit(name);
  nationalCode = toEnDigit(nationalCode);
  phoneNumber = toEnDigit(phoneNumber);
  try {
    return db
      .prepare(`UPDATE patients SET name = ?, nationalCode = ?, phoneNumber = ?, lastEditedAt = ?, insuranceId = ? WHERE id = ?`)
      .run(name, nationalCode, phoneNumber, lastEditedAt, insuranceId, id);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function createPatient(name, nationalCode, phoneNumber, createdAt, insuranceId) {
  name = toEnDigit(name);
  nationalCode = toEnDigit(nationalCode);
  phoneNumber = toEnDigit(phoneNumber);
  try {
    return db
      .prepare(`INSERT INTO patients (name, nationalCode, phoneNumber, createdAt, insuranceId) VALUES (?, ?, ?, ?, ?)`)
      .run(name, nationalCode, phoneNumber, createdAt, insuranceId);

  } catch (err) {
    console.error(err);
    throw err;
  }
}

function countPatients() {
  try {
    return db.prepare(`SELECT count(*) as total FROM patients`).get().total;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function createCase(patientId, image, createdAt) {
  try {
    db
      .prepare(`INSERT INTO cases (patientId, image, createdAt) VALUES (?, ?, ?)`)
      .run(patientId, image, createdAt);

    db
      .prepare(`UPDATE patients SET lastVisitedAt = ? WHERE id = ?`)
      .run(createdAt, patientId);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function deleteCase(caseId) {
  try {
    db
      .prepare(`DELETE FROM cases WHERE id = ?`)
      .run(caseId);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function updateCase(caseId, image) {
  try {
    db
      .prepare(`UPDATE cases SET image = ? WHERE id = ?`)
      .run(image, caseId);

    // TODO: update patient
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function getStats(startOfDay) {
  try {
    const total = db
      .prepare(`SELECT count(*) AS total FROM patients`)
      .get().total;
    const todayTotal = db
      .prepare(`SELECT count(*) AS todayTotal FROM patients WHERE createdAt >= ?`)
      .get(startOfDay).todayTotal;

    return { total, todayTotal };
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
	    nationalCode TEXT NOT NULL,
      phoneNumber TEXT,
      insuranceId INTEGER,
      createdAt TEXT NOT NULL,
      lastEditedAt TEXT,
      lastVisitedAt TEXT
    );`
  )
    .run();

  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS cases (
      id INTEGER PRIMARY KEY,
      image BLOB NOT NULL,
      patientId INTEGER NOT NULL,
      createdAt TEXT NOT NULL,
      FOREIGN KEY(patientId) REFERENCES patients(id)
    );`
  )
    .run();

  // seed some patients data
  db.prepare(
    `
    INSERT OR IGNORE INTO patients (id, name, nationalCode, phoneNumber, createdAt, insuranceId)
    VALUES (1, 'patient1', '123', '0915635221', '1721952000000', 0), (2, 'patient2', '345', '0956635961', '1721952000000', 1), (3, 'patient3', '568', '0939635561', '1721952000000', 2);`
  )
    .run();
}

function close() {
  db.close();
}

function toEnDigit(s) {
  return s.replace(/[\u0660-\u0669\u06f0-\u06f9]/g,
      function(a) { return a.charCodeAt(0) & 0xf }
  )
}

module.exports = {
  searchPatient,
  getPatient,
  updatePatient,
  updateCase,
  createPatient,
  createCase,
  deleteCase,
  getPatientCase,
  getPatientWithImages,
  close,
  initDb,
  getStats,
  countPatients
};
