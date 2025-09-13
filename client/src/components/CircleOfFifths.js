import React from 'react';
import { motion } from 'framer-motion';

const CircleOfFifths = () => {
  const keys = [
    { major: 'C', minor: 'Am', sharps: 0, flats: 0, position: 0 },
    { major: 'G', minor: 'Em', sharps: 1, flats: 0, position: 1 },
    { major: 'D', minor: 'Bm', sharps: 2, flats: 0, position: 2 },
    { major: 'A', minor: 'F#m', sharps: 3, flats: 0, position: 3 },
    { major: 'E', minor: 'C#m', sharps: 4, flats: 0, position: 4 },
    { major: 'B', minor: 'G#m', sharps: 5, flats: 0, position: 5 },
    { major: 'F#', minor: 'D#m', sharps: 6, flats: 0, position: 6 },
    { major: 'Db', minor: 'Bbm', sharps: 0, flats: 5, position: 7 },
    { major: 'Ab', minor: 'Fm', sharps: 0, flats: 4, position: 8 },
    { major: 'Eb', minor: 'Cm', sharps: 0, flats: 3, position: 9 },
    { major: 'Bb', minor: 'Gm', sharps: 0, flats: 2, position: 10 },
    { major: 'F', minor: 'Dm', sharps: 0, flats: 1, position: 11 }
  ];
  
  const radius = 120;
  const innerRadius = 80;
  const centerX = 160;
  const centerY = 160;

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, type: 'spring' }}
      style={{
        width: 'min(400px, 90vw)',
        height: 'min(400px, 90vw)',
        margin: '2rem auto',
        position: 'relative',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 320 320"
        style={{ 
          position: 'relative',
          maxWidth: '320px',
          maxHeight: '320px'
        }}
      >
        {/* Outer ring segments */}
        {keys.map((keyData, index) => {
          const angle = (index * 30 - 90) * (Math.PI / 180);
          const nextAngle = ((index + 1) * 30 - 90) * (Math.PI / 180);
          
          const x1 = centerX + (radius - 30) * Math.cos(angle);
          const y1 = centerY + (radius - 30) * Math.sin(angle);
          const x2 = centerX + radius * Math.cos(angle);
          const y2 = centerY + radius * Math.sin(angle);
          const x3 = centerX + radius * Math.cos(nextAngle);
          const y3 = centerY + radius * Math.sin(nextAngle);
          const x4 = centerX + (radius - 30) * Math.cos(nextAngle);
          const y4 = centerY + (radius - 30) * Math.sin(nextAngle);
          
          return (
            <motion.g key={`segment-${index}`}>
              <motion.path
                d={`M ${x1} ${y1} L ${x2} ${y2} A ${radius} ${radius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${radius - 30} ${radius - 30} 0 0 0 ${x1} ${y1} Z`}
                fill={index % 4 === 0 ? 'url(#segmentGradient1)' : index % 4 === 1 ? 'url(#segmentGradient2)' : index % 4 === 2 ? '#ffffff' : '#f8f9fa'}
                stroke="#343a40"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ fill: '#e9ecefb4' }}
              />
            </motion.g>
          );
        })}
        
        {/* Inner ring segments */}
        {keys.map((keyData, index) => {
          const angle = (index * 30 - 90) * (Math.PI / 180);
          const nextAngle = ((index + 1) * 30 - 90) * (Math.PI / 180);
          
          const x1 = centerX + (innerRadius - 30) * Math.cos(angle);
          const y1 = centerY + (innerRadius - 30) * Math.sin(angle);
          const x2 = centerX + innerRadius * Math.cos(angle);
          const y2 = centerY + innerRadius * Math.sin(angle);
          const x3 = centerX + innerRadius * Math.cos(nextAngle);
          const y3 = centerY + innerRadius * Math.sin(nextAngle);
          const x4 = centerX + (innerRadius - 30) * Math.cos(nextAngle);
          const y4 = centerY + (innerRadius - 30) * Math.sin(nextAngle);
          
          return (
            <motion.g key={`inner-segment-${index}`}>
              <motion.path
                d={`M ${x1} ${y1} L ${x2} ${y2} A ${innerRadius} ${innerRadius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius - 30} ${innerRadius - 30} 0 0 0 ${x1} ${y1} Z`}
                fill={index % 4 === 0 ? '#f8f9fa' : index % 4 === 1 ? '#ffffff' : index % 4 === 2 ? 'url(#segmentGradient1)' : 'url(#segmentGradient2)'}
                stroke="#343a40"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.3 }}
                whileHover={{ fill: '#e9ecef' }}
              />
            </motion.g>
          );
        })}
        
        {/* Major keys */}
        {keys.map((keyData, index) => {
          const angle = (index * 30 - 90) * (Math.PI / 180);
          const x = centerX + (radius - 15) * Math.cos(angle);
          const y = centerY + (radius - 15) * Math.sin(angle);
          
          return (
            <motion.g key={`major-${index}`}>
              <motion.text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill="#343a40"
                fontSize="14"
                fontWeight="bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.08, type: 'spring' }}
              >
                {keyData.major}
              </motion.text>
            </motion.g>
          );
        })}
        
        {/* Minor keys */}
        {keys.map((keyData, index) => {
          const angle = (index * 30 - 90) * (Math.PI / 180);
          const x = centerX + (innerRadius - 15) * Math.cos(angle);
          const y = centerY + (innerRadius - 15) * Math.sin(angle);
          
          return (
            <motion.g key={`minor-${index}`}>
              <motion.text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill="#343a40"
                fontSize="12"
                fontWeight="600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.08 + 0.4, type: 'spring' }}
              >
                {keyData.minor}
              </motion.text>
            </motion.g>
          );
        })}
        
        {/* Sharps and flats indicators */}
        {keys.map((keyData, index) => {
          if (keyData.sharps === 0 && keyData.flats === 0) return null;
          
          const angle = (index * 30 - 90) * (Math.PI / 180);
          const x = centerX + (radius + 20) * Math.cos(angle);
          const y = centerY + (radius + 20) * Math.sin(angle);
          
          return (
            <motion.text
              key={`accidental-${index}`}
              x={x}
              y={y + 4}
              textAnchor="middle"
              fill="#6c757d"
              fontSize="10"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.08 + 0.8 }}
            >
              {keyData.sharps > 0 ? `${keyData.sharps}♯` : `${keyData.flats}♭`}
            </motion.text>
          );
        })}
        
        {/* Center circle with gradient */}
        <circle
          cx={centerX}
          cy={centerY}
          r="25"
          fill="url(#centerGradient)"
          stroke="#343a40"
          strokeWidth="2"
        />
        
        {/* Center text */}
        <motion.text
          x={centerX}
          y={centerY - 3}
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="9"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Circle
        </motion.text>
        <motion.text
          x={centerX}
          y={centerY + 9}
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="9"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          of Fifths
        </motion.text>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
          <linearGradient id="segmentGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>
          <linearGradient id="segmentGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#43e97b" />
            <stop offset="100%" stopColor="#38f9d7" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default CircleOfFifths;