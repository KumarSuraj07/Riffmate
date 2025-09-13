const axios = require('axios');

const testAPI = async () => {
  console.log('Testing API endpoints...');
  
  try {
    const response = await axios.get('http://localhost:5000/api/chords');
    console.log('✅ /api/chords working - Found', response.data.length, 'chords');
    console.log('First chord:', response.data[0]);
  } catch (error) {
    console.error('❌ /api/chords failed:', error.message);
  }
  
  try {
    const response = await axios.get('http://localhost:5000/api/tabs');
    console.log('✅ /api/tabs working - Found', response.data.length, 'tabs');
  } catch (error) {
    console.error('❌ /api/tabs failed:', error.message);
  }
};

testAPI();