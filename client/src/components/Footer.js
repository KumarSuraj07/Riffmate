import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="footer"
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 style={{ fontSize: '1.1rem' }}>🎸 Riff-Mate</h3>
            <p style={{ fontSize: '0.85rem' }}>Your ultimate guitar learning companion. Master chords, tabs, scales, and music theory with our interactive platform.</p>
          </div>
          
          <div className="footer-section">
            <h3 style={{ fontSize: '1.1rem' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="/chords" style={{ fontSize: '0.85rem' }}>Chords Library</a>
              <a href="/tabs" style={{ fontSize: '0.85rem' }}>Guitar Tabs</a>
              <a href="/scales" style={{ fontSize: '0.85rem' }}>Scales & Patterns</a>
              <a href="/theory" style={{ fontSize: '0.85rem' }}>Music Theory</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 style={{ fontSize: '1.1rem' }}>Learning Resources</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#beginner" style={{ fontSize: '0.85rem' }}>Beginner Guides</a>
              <a href="#intermediate" style={{ fontSize: '0.85rem' }}>Intermediate Lessons</a>
              <a href="#advanced" style={{ fontSize: '0.85rem' }}>Advanced Techniques</a>
              <a href="#practice" style={{ fontSize: '0.85rem' }}>Practice Routines</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 style={{ fontSize: '1.1rem' }}>Connect</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#community" style={{ fontSize: '0.85rem' }}>Community</a>
              <a href="#support" style={{ fontSize: '0.85rem' }}>Support</a>
              <a href="#feedback" style={{ fontSize: '0.85rem' }}>Feedback</a>
              <a href="#about" style={{ fontSize: '0.85rem' }}>About Us</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p style={{ fontSize: '0.8rem' }}>&copy; 2024 Riff-Mate. Crafted with ❤️ for guitar enthusiasts worldwide.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;