import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Chords', path: '/chords', icon: '🎵' },
    { name: 'Tabs', path: '/tabs', icon: '🎼' },
    { name: 'Scales', path: '/scales', icon: '🎹' },
    { name: 'Theory', path: '/theory', icon: '📚' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        background: 'rgba(15, 15, 35, 0.8)',
        backdropFilter: 'blur(20px)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              style={{ 
                textDecoration: 'none', 
                color: 'white', 
                fontSize: '1.8rem', 
                fontWeight: '700',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              🎸 Riff-Mate
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }} className="desktop-nav">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    color: location.pathname === item.path ? '#667eea' : 'rgba(255, 255, 255, 0.8)',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease',
                    background: location.pathname === item.path ? 'rgba(102, 126, 234, 0.2)' : 'transparent',
                    border: location.pathname === item.path ? '1px solid rgba(102, 126, 234, 0.3)' : '1px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.95rem',
                    fontWeight: '500'
                  }}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {isOpen ? '✕' : '☰'}
          </motion.button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              marginTop: '1rem',
              padding: '1rem',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '15px',
              display: 'none'
            }}
            className="mobile-nav"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: location.pathname === item.path ? '#667eea' : 'white',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  margin: '0.25rem 0',
                  background: location.pathname === item.path ? 'rgba(102, 126, 234, 0.2)' : 'transparent'
                }}
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: block !important;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;