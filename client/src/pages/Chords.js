import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import SlideCard from '../components/SlideCard';
import ChordDiagram from '../components/ChordDiagram';

const Chords = () => {
  const [chords, setChords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchChords();
  }, []);

  const fetchChords = async () => {
    try {
      const response = await axios.get('/api/chords');
      if (response.data && response.data.length > 0) {
        setChords(response.data);
      } else {
        // Use fallback data if API returns empty
        setChords(getFallbackChords());
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching chords:', error);
      // Use fallback data if API fails
      setChords(getFallbackChords());
      setLoading(false);
    }
  };

  const getFallbackChords = () => [
    { id: 1, name: 'C Major', difficulty: 'Beginner', diagram: '0-1-0-2-3-0', description: 'Basic open C major chord' },
    { id: 2, name: 'G Major', difficulty: 'Beginner', diagram: '3-2-0-0-3-3', description: 'Basic open G major chord' },
    { id: 3, name: 'Am', difficulty: 'Beginner', diagram: '0-0-2-2-1-0', description: 'A minor chord' },
    { id: 4, name: 'F Major', difficulty: 'Intermediate', diagram: '1-1-3-3-2-1', description: 'F major barre chord' },
    { id: 5, name: 'D Major', difficulty: 'Beginner', diagram: 'x-x-0-2-3-2', description: 'Open D major chord' },
    { id: 6, name: 'E Major', difficulty: 'Beginner', diagram: '0-2-2-1-0-0', description: 'Open E major chord' }
  ]

  const filteredChords = filter === 'All' 
    ? chords 
    : chords.filter(chord => chord.difficulty === filter);

  const difficultyColors = {
    'Beginner': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'Intermediate': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'Advanced': 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)'
  };

  if (loading) {
    return (
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '70vh',
        flexDirection: 'column'
      }}>
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{ fontSize: '4rem', marginBottom: '1rem' }}
        >
          🎸
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ fontSize: '1.2rem', opacity: 0.8 }}
        >
          Loading chords...
        </motion.p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 className="section-title">
            🎵 Guitar Chords Library
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            opacity: 0.8, 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Master essential guitar chords with interactive diagrams and detailed explanations
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <motion.button
              key={level}
              onClick={() => setFilter(level)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                background: filter === level 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              {level}
            </motion.button>
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid"
          >
            {filteredChords.map((chord, index) => (
              <SlideCard
                key={chord.id}
                title={chord.name}
                icon="🎵"
                difficulty={chord.difficulty}
                gradient={difficultyColors[chord.difficulty]}
                index={index}
              >
                <ChordDiagram diagram={chord.diagram} chordName={chord.name} />
                
                <p style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  lineHeight: '1.5',
                  fontSize: '0.9rem',
                  marginTop: '1rem'
                }}>
                  {chord.description}
                </p>
              </SlideCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredChords.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              textAlign: 'center',
              padding: '3rem',
              opacity: 0.6
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎵</div>
            <p style={{ fontSize: '1.2rem' }}>No chords found for {filter} level</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Chords;