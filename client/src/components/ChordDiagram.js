import React from 'react';
import { motion } from 'framer-motion';

const ChordDiagram = ({ diagram, chordName }) => {
  const frets = diagram.split('-');
  
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: `
          linear-gradient(135deg, rgba(15, 15, 25, 0.9), rgba(25, 25, 35, 0.85)),
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 255, 255, 0.02) 10px,
            rgba(255, 255, 255, 0.02) 20px
          )
        `,
        padding: '2rem',
        borderRadius: '15px',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        fontFamily: 'monospace',
        color: 'white',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(10px)'
      }}>
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        style={{ 
          textAlign: 'center', 
          marginBottom: '1.5rem', 
          fontSize: '1.3rem', 
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
        {chordName} Chord
      </motion.div>
      
      {/* String labels */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: '1rem', 
        fontSize: '0.9rem', 
        fontWeight: 'bold',
        color: '#4ecdc4'
      }}>
        <span>E</span><span>A</span><span>D</span><span>G</span><span>B</span><span>E</span>
      </div>
      
      {/* Fretboard */}
      <div style={{ 
        position: 'relative',
        background: `
          linear-gradient(135deg, rgba(30, 30, 40, 0.8), rgba(40, 40, 50, 0.7)),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 8px,
            rgba(255, 255, 255, 0.03) 8px,
            rgba(255, 255, 255, 0.03) 16px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 8px,
            rgba(255, 255, 255, 0.03) 8px,
            rgba(255, 255, 255, 0.03) 16px
          )
        `,
        padding: '1rem',
        borderRadius: '8px',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(5px)'
      }}>
        {/* Nut */}
        <div style={{
          height: '4px',
          background: 'linear-gradient(90deg, #C0C0C0, #E5E5E5)',
          marginBottom: '15px',
          borderRadius: '2px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }} />
        
        {/* Frets */}
        {[1, 2, 3, 4].map(fretNum => (
          <div key={fretNum} style={{
            height: '3px',
            background: 'linear-gradient(90deg, #C0C0C0, #E5E5E5)',
            marginBottom: '18px',
            borderRadius: '1px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
          }} />
        ))}
        
        {/* Strings and finger positions */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          right: '1rem',
          height: 'calc(100% - 2rem)',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          {frets.map((fret, index) => (
            <div key={index} style={{
              width: '2px',
              height: '100%',
              background: 'linear-gradient(180deg, #FFD700, #FFA500)',
              position: 'relative',
              boxShadow: '0 0 2px rgba(255, 215, 0, 0.5)'
            }}>
              {fret !== 'x' && fret !== '0' && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  style={{
                    position: 'absolute',
                    top: `${(parseInt(fret) * 21) - 10}px`,
                    left: '-8px',
                    width: '16px',
                    height: '16px',
                    background: 'radial-gradient(circle, #ff6b6b, #e55555)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    color: 'white',
                    border: '2px solid #fff',
                    boxShadow: '0 2px 8px rgba(255, 107, 107, 0.4)',
                    cursor: 'pointer'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {fret}
                </motion.div>
              )}
              {fret === 'x' && (
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-6px',
                    color: '#ff6b6b',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    textShadow: '0 0 4px rgba(255, 107, 107, 0.5)'
                  }}
                >
                  ✕
                </motion.div>
              )}
              {fret === '0' && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-6px',
                    color: '#4ecdc4',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    textShadow: '0 0 4px rgba(78, 205, 196, 0.5)'
                  }}
                >
                  ○
                </motion.div>
              )}
            </div>
          ))}
        </div>
        
        {/* Fret markers */}
        <div style={{
          position: 'absolute',
          right: '-15px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.5)'
        }}>
          3rd
        </div>
      </div>
      
      {/* Enhanced Legend */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ 
          marginTop: '1.5rem', 
          fontSize: '0.8rem', 
          textAlign: 'center',
          background: 'rgba(255,255,255,0.05)',
          padding: '0.8rem',
          borderRadius: '8px'
        }}>
        <span style={{ color: '#ff6b6b', textShadow: '0 0 4px rgba(255, 107, 107, 0.3)' }}>● Finger Position</span> | 
        <span style={{ color: '#4ecdc4', textShadow: '0 0 4px rgba(78, 205, 196, 0.3)' }}> ○ Open String</span> | 
        <span style={{ color: '#ff6b6b', textShadow: '0 0 4px rgba(255, 107, 107, 0.3)' }}> ✕ Don't Play</span>
      </motion.div>
    </motion.div>
  );
};

export default ChordDiagram;