import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Fetching chords from Supabase...');
    
    const { data, error } = await supabase
      .from('chords')
      .select('*')
      .order('difficulty')
      .order('name');

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    console.log('Chords fetched successfully:', data?.length || 0);
    res.status(200).json(data || []);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ 
      error: error.message,
      details: 'Failed to fetch chords from database'
    });
  }
}