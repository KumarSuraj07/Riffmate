import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

import SlideCard from '../components/SlideCard';

const Scales = () => {
  const [scales, setScales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScales();
  }, []);

  const fetchScales = async () => {
    try {
      const response = await axios.get('/api/scales');
      setScales(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching scales:', error);
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
          🎹
        </motion.div>
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
            ♪ Guitar Scales & Patterns
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            opacity: 0.8, 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Master guitar scales and patterns to enhance your improvisation and musical understanding
          </p>
        </motion.div>
      
        <div className="grid">
        {scales.map((scale, index) => (
          <SlideCard
            key={scale.id}
            title={scale.name}
            icon="🎹"
            gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
            index={index}
          >
            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '1rem',
              borderRadius: '10px',
              marginBottom: '1rem',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <strong style={{ color: 'white', fontSize: '1rem' }}>Pattern:</strong>
              <div style={{ 
                fontSize: '1.1rem', 
                marginTop: '0.5rem', 
                letterSpacing: '2px',
                color: '#fee140',
                fontFamily: 'monospace'
              }}>
                {scale.pattern}
              </div>
            </div>
            
            {scale.example && (
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 230, 109, 0.3), transparent)',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                border: '1px solid rgba(255, 230, 109, 0.3)'
              }}>
                <strong style={{ color: 'white', fontSize: '0.9rem' }}>Example: </strong>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>{scale.example}</span>
              </div>
            )}
            
            <p style={{ 
              color: 'rgba(255,255,255,0.9)', 
              lineHeight: '1.5',
              fontSize: '0.9rem'
            }}>
              {scale.description}
            </p>
          </SlideCard>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Scales;