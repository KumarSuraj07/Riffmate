const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const testSupabase = async () => {
  console.log('Testing Supabase connection...');
  
  try {
    const { data, error } = await supabase.from('chords').select('*').limit(3);
    
    if (error) {
      console.error('❌ Error:', error.message);
    } else {
      console.log('✅ Supabase working! Found', data.length, 'chords:');
      data.forEach(chord => console.log(`- ${chord.name} (${chord.difficulty})`));
    }
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
};

testSupabase();