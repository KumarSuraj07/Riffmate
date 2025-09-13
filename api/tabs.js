const mysql = require('mysql2/promise');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { search } = req.query;
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    let query = 'SELECT * FROM tabs';
    let params = [];
    
    if (search) {
      query += ' WHERE song_name LIKE ? OR artist LIKE ?';
      params = [`%${search}%`, `%${search}%`];
    }
    
    query += ' ORDER BY artist, song_name';
    
    const [rows] = await connection.execute(query, params);
    await connection.end();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}