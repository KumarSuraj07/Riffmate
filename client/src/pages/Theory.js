import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import SlideCard from '../components/SlideCard';
import CircleOfFifths from '../components/CircleOfFifths';

const Theory = () => {
  const [theory, setTheory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTheory();
  }, []);

  const fetchTheory = async () => {
    try {
      const response = await axios.get('/api/theory');
      setTheory(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching theory:', error);
      setLoading(false);
    }
  };



  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: '5rem' }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          style={{ fontSize: '3rem' }}
        >
          📚
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', margin: '7rem 0 2rem 0' }}
      >
        Music Theory & Circle of Fifths
      </motion.h1>
      
      <CircleOfFifths />
      
      {/* Circle of Fifths Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          maxWidth: '800px',
          margin: '3rem auto',
          padding: '2rem',
          background: 'rgba(15, 15, 35, 0.8)',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <h2 style={{
          color: 'white',
          fontSize: '1.5rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Understanding the Circle of Fifths
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h3 style={{ color: '#43e97b', fontSize: '1.2rem', marginBottom: '1rem' }}>Major Keys (Outer Ring)</h3>
            <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <li>C (no sharps/flats)</li>
              <li>G (1 sharp: F#)</li>
              <li>D (2 sharps: F#, C#)</li>
              <li>A (3 sharps: F#, C#, G#)</li>
              <li>E (4 sharps)</li>
              <li>B (5 sharps)</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ color: '#38f9d7', fontSize: '1.2rem', marginBottom: '1rem' }}>Minor Keys (Inner Ring)</h3>
            <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <li>Am (relative to C major)</li>
              <li>Em (relative to G major)</li>
              <li>Bm (relative to D major)</li>
              <li>F#m (relative to A major)</li>
              <li>C#m (relative to E major)</li>
              <li>G#m (relative to B major)</li>
            </ul>
          </div>
        </div>
        
        <div style={{
          background: 'rgba(67, 233, 123, 0.1)',
          padding: '1.5rem',
          borderRadius: '10px',
          border: '1px solid rgba(67, 233, 123, 0.2)'
        }}>
          <h3 style={{ color: '#43e97b', fontSize: '1.1rem', marginBottom: '1rem' }}>Key Relationships</h3>
          <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Moving clockwise adds one sharp to the key signature, while moving counter-clockwise adds one flat. 
            Each major key shares the same notes as its relative minor (found 3 positions counter-clockwise). 
            This tool helps musicians understand key signatures, chord progressions, and modulation between related keys.
          </p>
        </div>
      </motion.div>
      
      <div className="grid">
        {theory.map((article, index) => (
          <SlideCard
            key={article.id}
            title={article.title}
            icon="📚"
            difficulty={article.category}
            gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
            index={index}
          >
            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '1rem',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{ 
                lineHeight: '1.5', 
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.9rem'
              }}>
                {article.content}
              </p>
            </div>
          </SlideCard>
        ))}
      </div>
    </div>
  );
};

export default Theory;