const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API Routes
app.get('/api/chords', (req, res) => {
  const query = 'SELECT * FROM chords ORDER BY difficulty, name';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.get('/api/tabs', (req, res) => {
  const { search } = req.query;
  let query = 'SELECT * FROM tabs';
  let params = [];
  
  if (search) {
    query += ' WHERE song_name LIKE ? OR artist LIKE ?';
    params = [`%${search}%`, `%${search}%`];
  }
  
  query += ' ORDER BY artist, song_name';
  
  db.query(query, params, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.get('/api/scales', (req, res) => {
  const query = 'SELECT * FROM scales ORDER BY name';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.get('/api/theory', (req, res) => {
  const query = 'SELECT * FROM theory ORDER BY category, title';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});