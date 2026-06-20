// Import dependencies
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

// Deklarasikan Express
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Konfigurasi koneksi ke database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "siakad",
});

// Koneksi ke database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }

  console.log("Connected to the database.");
});

// CREATE: Tambah data mahasiswa
app.post("/mahasiswa", (req, res) => {
  const { nim, nama, jurusan, angkatan, email } = req.body;

  const sql =
    "INSERT INTO mahasiswa (nim, nama, jurusan, angkatan, email) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [nim, nama, jurusan, angkatan, email], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.status(201).json({
      message: "Mahasiswa added successfully",
      data: result,
    });
  });
});

// CREATE: Tambah data matakuliah
app.post("/matakuliah", (req, res) => {
  const { kodeMK, namaMK, sks, semester } = req.body;

  const sql =
    "INSERT INTO matakuliah (kodeMK, namaMK, sks, semester) VALUES (?, ?, ?, ?)";

  db.query(sql, [kodeMK, namaMK, sks, semester], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.status(201).json({
      message: "Matakuliah berhasil ditambahkan",
      data: result,
    });
  });
});

// READ: Ambil semua data mahasiswa
app.get("/mahasiswa", (req, res) => {
  const sql = "SELECT * FROM mahasiswa";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.status(200).json({
      data: results,
    });
  });
});

// READ: Ambil semua data matakuliah
app.get("/matakuliah", (req, res) => {
  const sql = "SELECT * FROM matakuliah";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.status(200).json({
      data: results,
    });
  });
});

// READ: Ambil data mahasiswa berdasarkan NIM
app.get("/mahasiswa/:nim", (req, res) => {
  const { nim } = req.params;

  const sql = "SELECT * FROM mahasiswa WHERE nim = ?";

  db.query(sql, [nim], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Mahasiswa not found",
      });
    }

    res.status(200).json({
      data: result[0],
    });
  });
});

// READ: Ambil data matakuliah berdasarkan kodeMK
app.get("/matakuliah/:kodeMK", (req, res) => {
  const { kodeMK } = req.params;

  const sql = "SELECT * FROM matakuliah WHERE kodeMK = ?";

  db.query(sql, [kodeMK], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    }

    res.status(200).json({
      data: result[0],
    });
  });
});

// UPDATE: Ubah data mahasiswa
app.put("/mahasiswa/:nim", (req, res) => {
  const { nim } = req.params;
  const { nama, jurusan, angkatan, email } = req.body;

  const sql =
    "UPDATE mahasiswa SET nama = ?, jurusan = ?, angkatan = ?, email = ? WHERE nim = ?";

  db.query(sql, [nama, jurusan, angkatan, email, nim], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Mahasiswa not found",
      });
    }

    res.status(200).json({
      message: "Mahasiswa updated successfully",
    });
  });
});

// UPDATE: Ubah data matakuliah
app.put("/matakuliah/:kodeMK", (req, res) => {
  const { kodeMK } = req.params;
  const { namaMK, sks, semester } = req.body;

  const sql =
    "UPDATE matakuliah SET namaMK = ?, sks = ?, semester = ? WHERE kodeMK = ?";

  db.query(sql, [namaMK, sks, semester, kodeMK], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    }

    res.status(200).json({
      message: "Data berhasil diubah",
    });
  });
});

// DELETE: Hapus data mahasiswa
app.delete("/mahasiswa/:nim", (req, res) => {
  const { nim } = req.params;

  const sql = "DELETE FROM mahasiswa WHERE nim = ?";

  db.query(sql, [nim], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Mahasiswa not found",
      });
    }

    res.status(200).json({
      message: "Mahasiswa deleted successfully",
    });
  });
});

// DELETE: Hapus data matakuliah
app.delete("/matakuliah/:kodeMK", (req, res) => {
  const { kodeMK } = req.params;

  const sql = "DELETE FROM matakuliah WHERE kodeMK = ?";

  db.query(sql, [kodeMK], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    }

    res.status(200).json({
      message: "Data berhasil dihapus",
    });
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
