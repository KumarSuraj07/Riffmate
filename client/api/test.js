import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    console.log('Testing Supabase connection...');
    console.log('URL exists:', !!process.env.SUPABASE_URL);
    console.log('Key exists:', !!process.env.SUPABASE_ANON_KEY);
    
    // Test simple select
    const { data, error } = await supabase
      .from('chords')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ 
        error: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Database connected successfully',
      rowCount: data?.length || 0,
      sampleData: data
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ 
      error: error.message,
      env_check: {
        url: !!process.env.SUPABASE_URL,
        key: !!process.env.SUPABASE_ANON_KEY
      }
    });
  }
}