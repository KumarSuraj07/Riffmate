import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { search } = req.query;
    
    let query = supabase
      .from('tabs')
      .select('*');
    
    if (search) {
      query = query.or(`song_name.ilike.%${search}%,artist.ilike.%${search}%`);
    }
    
    const { data, error } = await query
      .order('artist')
      .order('song_name');

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}