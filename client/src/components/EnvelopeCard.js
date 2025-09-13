import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnvelopeCard = ({ 
  title, 
  content, 
  icon, 
  difficulty, 
  gradient,
  index = 0,
  children 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{
        perspective: '1000px',
        margin: '1rem 0'
      }}
    >
      {/* Envelope Container */}
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: isOpen ? 'auto' : '200px',
          transformStyle: 'preserve-3d'
        }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Envelope Back */}
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '200px',
            background: `linear-gradient(135deg, ${gradient || '#2a2a2a'} 0%, #1a1a1a 100%)`,
            borderRadius: '15px',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            overflow: 'hidden'
          }}
        >
          {/* Musical Note Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 2px, transparent 2px),
              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 2px, transparent 2px),
              radial-gradient(circle at 40% 80%, rgba(255,255,255,0.05) 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px'
          }} />
          
          {/* Envelope Flap */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: `linear-gradient(135deg, ${gradient || '#3a3a3a'} 0%, #2a2a2a 100%)`,
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              zIndex: 2
            }}
            animate={{
              rotateX: isOpen ? -180 : 0,
              transformOrigin: 'top center'
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {/* Wax Seal */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '30px',
                height: '30px',
                background: gradient || '#ff6b6b',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              }}
              animate={{
                scale: isOpen ? 0 : 1,
                rotate: isOpen ? 180 : 0
              }}
              transition={{ duration: 0.4 }}
            >
              {icon}
            </motion.div>
          </motion.div>

          {/* Envelope Content Preview */}
          <div style={{
            padding: '4rem 2rem 2rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <motion.h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '0.5rem'
              }}
              animate={{ scale: isOpen ? 0.9 : 1 }}
            >
              {title}
            </motion.h3>
            
            {difficulty && (
              <motion.span
                style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  background: 'rgba(255,255,255,0.2)',
                  fontSize: '0.8rem',
                  color: 'white'
                }}
                animate={{ opacity: isOpen ? 0 : 1 }}
              >
                {difficulty}
              </motion.span>
            )}

            <motion.div
              style={{
                position: 'absolute',
                bottom: '1rem',
                fontSize: '0.9rem',
                opacity: 0.6,
                color: 'white'
              }}
              animate={{ opacity: isOpen ? 0 : 0.6 }}
            >
              Click to open 📧
            </motion.div>
          </div>
        </motion.div>

        {/* Opened Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: 20, rotateX: -90 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                marginTop: '220px',
                background: 'rgba(15, 15, 35, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '2rem',
                position: 'relative',
                transformOrigin: 'top center'
              }}
            >
              {/* Paper Texture */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 24px,
                    rgba(255,255,255,0.03) 25px
                  )
                `,
                borderRadius: '15px',
                pointerEvents: 'none'
              }} />

              {/* Close Button */}
              <motion.button
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                ✕
              </motion.button>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {children || (
                  <div>
                    <h3 style={{ color: 'white', marginBottom: '1rem' }}>{title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                      {content}
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default EnvelopeCard;