import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProgressiveScrollBar = ({ containerId }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerId]);

  return (
    <div style={{
      position: 'absolute',
      left: '0',
      top: '0',
      bottom: '0',
      width: '100%',
      borderRadius: '4px',
      overflow: 'hidden'
    }}>
      <motion.div
        style={{
          width: '100%',
          background: 'linear-gradient(180deg, #667eea, #764ba2)',
          borderRadius: '3px',
          opacity: 0.7
        }}
        animate={{
          height: `${scrollProgress}%`
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />
    </div>
  );
};

export default ProgressiveScrollBar;