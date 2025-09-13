import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SlideCard = ({ 
  title, 
  icon, 
  difficulty, 
  gradient,
  index = 0,
  children 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{
        position: 'relative',
        margin: '0.5rem 0',
        cursor: 'pointer',
        minHeight: '70px'
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Thin Base Sheet */}
      <motion.div
        style={{
          height: '5px',
          background: gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '3px',
          width: '100%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}
        animate={{
          height: isExpanded ? '2px' : '5px',
          y: isExpanded ? 2 : 0
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />

      {/* Main Card */}
      <motion.div
        style={{
          background: 'rgba(15, 15, 35, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          overflow: 'hidden',
          position: 'relative',
          marginTop: '-2px'
        }}
        animate={{
          y: isExpanded ? -2 : 0
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Header Section */}
        <motion.div
          style={{
            padding: '1rem',
            borderBottom: isExpanded ? '1px solid rgba(255,255,255,0.1)' : 'none',
            background: `linear-gradient(135deg, ${gradient?.split(',')[0] || 'rgba(102, 126, 234, 0.1)'}, transparent)`
          }}
          animate={{
            height: isExpanded ? '50px' : '70px'
          }}
          transition={{ duration: 0.4 }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <motion.div
                style={{ fontSize: '1.3rem' }}
                animate={{ 
                  scale: isExpanded ? 0.7 : 1,
                  rotate: isExpanded ? 180 : 0
                }}
                transition={{ duration: 0.4 }}
              >
                {icon}
              </motion.div>
              <div>
                <h3 style={{
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: '600',
                  margin: 0
                }}>
                  {title}
                </h3>
                {difficulty && (
                  <motion.span
                    style={{
                      fontSize: '0.7rem',
                      color: 'rgba(255,255,255,0.7)',
                      marginTop: '0.1rem',
                      display: 'block'
                    }}
                    animate={{ opacity: isExpanded ? 0 : 1 }}
                  >
                    {difficulty}
                  </motion.span>
                )}
              </div>
            </div>
            
            <motion.div
              style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.6)'
              }}
              animate={{ 
                rotate: isExpanded ? 180 : 0,
                scale: isExpanded ? 0.7 : 1
              }}
              transition={{ duration: 0.4 }}
            >
              ▼
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -20 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{
                overflow: 'hidden'
              }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                style={{
                  padding: '1.2rem',
                  background: 'rgba(0, 0, 0, 0.2)',
                  maxHeight: '250px',
                  overflowY: 'auto'
                }}
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default SlideCard;