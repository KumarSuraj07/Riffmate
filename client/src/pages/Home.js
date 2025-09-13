import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { 
      title: 'Chords Library', 
      desc: 'Master guitar chords with interactive diagrams and difficulty levels', 
      path: '/chords', 
      icon: '🎵',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    { 
      title: 'Guitar Tabs', 
      desc: 'Discover tabs for your favorite songs with search functionality', 
      path: '/tabs', 
      icon: '🎼',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    { 
      title: 'Scales & Patterns', 
      desc: 'Learn guitar scales and practice patterns for improvisation', 
      path: '/scales', 
      icon: '🎹',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    { 
      title: 'Music Theory', 
      desc: 'Understand the circle of fifths and fundamental music concepts', 
      path: '/theory', 
      icon: '📚',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  return (
    <div className="parallax-container">
      {/* Floating Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(255, 107, 107, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
        }}
      />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.div
            style={{ y: y1, opacity }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              🎸 Riff-Mate
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            >
              Your cinematic journey into guitar mastery begins here
            </motion.p>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
              style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link to="/chords">
                <button className="btn btn-primary">Start Learning</button>
              </Link>
              <Link to="/theory">
                <button className="btn">Explore Theory</button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <motion.section style={{ y: y2 }}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Master Every Aspect
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              padding: '2rem 0'
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                style={{ marginBottom: '3rem' }}
              >
                <h3 style={{
                  fontSize: '1.8rem',
                  marginBottom: '1rem',
                  background: feature.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {feature.icon} {feature.title}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  opacity: 0.8,
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {feature.desc}
                </p>
                <Link to={feature.path}>
                  <motion.button 
                    className="btn"
                    style={{ background: feature.gradient }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Now
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* About Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ padding: '0 0 0 0', background: 'rgba(0, 0, 0, 0)', position: 'relative', overflow: 'hidden' }}
      >
        {/* Floating SVG Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '10%', left: '5%', opacity: 0.3 }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#667eea"/>
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ position: 'absolute', top: '20%', right: '8%', opacity: 0.4 }}
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z" fill="#f093fb"/>
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: 'absolute', bottom: '15%', left: '10%', opacity: 0.3 }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V12.26C11.5 12.09 11 12 10.5 12C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21 15 18.99 15 16.5V6H19V3H12Z" fill="#4facfe"/>
          </svg>
        </motion.div>
        
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Riff-Mate
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center'
            }}
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                marginBottom: '2rem',
                opacity: 0.9,
                fontWeight: '300'
              }}
            >
              Riff-Mate is a simple guitar learning website that provides essential resources for guitarists. 
              Learn chords, practice with tabs, and understand music theory at your own pace.
            </motion.p>
            
            {/* Feature Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', margin: '4rem 0' }}>
              {[
                { icon: '🎵', title: 'Guitar Chords', desc: 'Browse and learn essential guitar chords with clear diagrams' },
                { icon: '🎼', title: 'Song Tabs', desc: 'Access guitar tablatures for popular songs and practice pieces' },
                { icon: '📚', title: 'Music Theory', desc: 'Understand basic music theory concepts and the circle of fifths' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '15px',
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <motion.div 
                    style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.6rem', color: '#667eea' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.4' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                opacity: 0.8,
                marginBottom: '2rem'
              }}
            >
              Perfect for beginners and experienced players alike. Use our chord library, practice with tabs, 
              and learn theory fundamentals to improve your guitar playing skills.
            </motion.p>
            
            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', marginTop: '3rem', paddingBottom: '3rem' }}
            >
              {[
                { number: '500+', label: 'Guitar Chords' },
                { number: '200+', label: 'Song Tabs' },
                { number: '50+', label: 'Theory Lessons' },
                { number: '24/7', label: 'Available' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1, type: 'spring', stiffness: 100 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <motion.h3 
                    style={{ 
                      fontSize: '2.5rem', 
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '0.5rem'
                    }}
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;