const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase connection
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

console.log('Connected to Supabase database');

// API Routes
app.get('/api/chords', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('chords')
      .select('*')
      .order('difficulty')
      .order('name');
    
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/tabs', async (req, res) => {
  try {
    const { search } = req.query;
    let query = supabase.from('tabs').select('*');
    
    if (search) {
      query = query.or(`song_name.ilike.%${search}%,artist.ilike.%${search}%`);
    }
    
    const { data, error } = await query.order('artist').order('song_name');
    
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/scales', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('scales')
      .select('*')
      .order('name');
    
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/theory', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('theory')
      .select('*')
      .order('category')
      .order('title');
    
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});