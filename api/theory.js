const mysql = require('mysql2/promise');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    const [rows] = await connection.execute('SELECT * FROM theory ORDER BY category, title');
    await connection.end();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}