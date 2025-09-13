import React from 'react';
import { motion } from 'framer-motion';

const TabDiagram = ({ tabContent, songName }) => {
  // Convert simple tab notation to visual representation
  const formatTab = (content) => {
    if (content.includes('-')) {
      // If it's actual tab notation like "0-3-5-0-3-6-5"
      const notes = content.split('-');
      const strings = ['E', 'B', 'G', 'D', 'A', 'E'];
      
      return (
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 20, 40, 0.8), rgba(0, 0, 0, 0.8))',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '2px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              gap: '0.8rem', 
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <span style={{ 
                minWidth: '25px', 
                fontSize: '1rem', 
                fontWeight: 'bold',
                color: '#4ecdc4',
                textShadow: '0 0 4px rgba(78, 205, 196, 0.3)'
              }}>E|</span>
              {notes.map((note, i) => (
                <motion.span 
                  key={i}
                  initial={{ scale: 0, y: -20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{ 
                    minWidth: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    background: note !== '0' 
                      ? 'radial-gradient(circle, #ff6b6b, #e55555)' 
                      : 'radial-gradient(circle, #4ecdc4, #45b7d1)',
                    padding: '8px',
                    borderRadius: '50%',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: note !== '0' 
                      ? '0 4px 15px rgba(255, 107, 107, 0.4)'
                      : '0 4px 15px rgba(78, 205, 196, 0.4)',
                    cursor: 'pointer'
                  }}
                >
                  {note}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      // If it's chord progression or description
      return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '2px solid rgba(102, 126, 234, 0.3)',
            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.2)'
          }}
        >
          <div style={{ 
            fontSize: '0.8rem', 
            marginBottom: '0.8rem', 
            color: '#667eea',
            fontWeight: 'bold',
            textShadow: '0 0 4px rgba(102, 126, 234, 0.3)'
          }}>
            ♫ Chord Progression:
          </div>
          <div style={{ 
            fontSize: '1rem', 
            fontWeight: 'bold', 
            letterSpacing: '1px',
            color: 'white',
            textAlign: 'center',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            {content}
          </div>
        </motion.div>
      );
    }
  };

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 40, 0.8))',
        padding: '2rem',
        borderRadius: '15px',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        fontFamily: 'monospace',
        color: 'white',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}>
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        style={{ 
          textAlign: 'center', 
          marginBottom: '1.2rem', 
          fontSize: '1.1rem', 
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
        ♫ {songName}
      </motion.div>
      
      {formatTab(tabContent)}
      
      {tabContent.includes('-') && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ 
            marginTop: '1.5rem',
            background: 'rgba(255,255,255,0.05)',
            padding: '1rem',
            borderRadius: '8px'
          }}>
          <div style={{ 
            fontSize: '0.9rem', 
            marginBottom: '0.8rem',
            color: '#4ecdc4',
            fontWeight: 'bold'
          }}>
            🎸 String Reference:
          </div>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.5rem',
            fontSize: '0.8rem'
          }}>
            <div style={{ color: 'rgba(255,255,255,0.8)' }}>E (1st) - Highest</div>
            <div style={{ color: 'rgba(255,255,255,0.8)' }}>A (5th)</div>
            <div style={{ color: 'rgba(255,255,255,0.8)' }}>B (2nd)</div>
            <div style={{ color: 'rgba(255,255,255,0.8)' }}>E (6th) - Lowest</div>
            <div style={{ color: 'rgba(255,255,255,0.8)' }}>G (3rd)</div>
            <div style={{ color: 'rgba(255,255,255,0.8)' }}>D (4th)</div>
          </div>
        </motion.div>
      )}
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ 
          marginTop: '1.5rem', 
          fontSize: '0.8rem', 
          textAlign: 'center',
          background: 'rgba(255,255,255,0.05)',
          padding: '0.8rem',
          borderRadius: '8px'
        }}>
        <span style={{ color: '#ff6b6b', textShadow: '0 0 4px rgba(255, 107, 107, 0.3)' }}>● Fretted Note</span> | 
        <span style={{ color: '#4ecdc4', textShadow: '0 0 4px rgba(78, 205, 196, 0.3)' }}> ● Open String (0)</span>
      </motion.div>
    </motion.div>
  );
};

export default TabDiagram;