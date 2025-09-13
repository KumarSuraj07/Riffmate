const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

console.log('Testing database connection...');
console.log('Config:', {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL database');
  
  // Test if tables exist and have data
  db.query('SHOW TABLES', (err, results) => {
    if (err) {
      console.error('❌ Error showing tables:', err.message);
      return;
    }
    console.log('📋 Tables in database:', results);
    
    // Check chords table
    db.query('SELECT COUNT(*) as count FROM chords', (err, results) => {
      if (err) {
        console.error('❌ Error counting chords:', err.message);
      } else {
        console.log('🎵 Chords count:', results[0].count);
      }
      
      // Check tabs table
      db.query('SELECT COUNT(*) as count FROM tabs', (err, results) => {
        if (err) {
          console.error('❌ Error counting tabs:', err.message);
        } else {
          console.log('🎼 Tabs count:', results[0].count);
        }
        
        db.end();
      });
    });
  });
});