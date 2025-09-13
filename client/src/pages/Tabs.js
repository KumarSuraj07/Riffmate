import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import SlideCard from '../components/SlideCard';
import TabDiagram from '../components/TabDiagram';

const Tabs = () => {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    fetchTabs();
  }, [searchTerm]);

  const fetchTabs = async () => {
    try {
      const response = await axios.get(`/api/tabs${searchTerm ? `?search=${searchTerm}` : ''}`);
      setTabs(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tabs:', error);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const difficultyColors = {
    'Beginner': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'Intermediate': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'Advanced': 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)'
  };

  if (loading) {
    return (
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '70vh',
        flexDirection: 'column'
      }}>
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{ fontSize: '4rem', marginBottom: '1rem' }}
        >
          🎼
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ fontSize: '1.2rem', opacity: 0.8 }}
        >
          Loading tabs...
        </motion.p>
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
            ♫ Guitar Tabs Collection
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            opacity: 0.8, 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Discover and learn your favorite songs with our comprehensive tab library
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ position: 'relative', marginBottom: '3rem' }}
        >
          <input
            type="text"
            placeholder="🔍 Search by song name or artist..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-box"
            style={{
              fontSize: '1.1rem',
              padding: '1.2rem 2rem',
              paddingLeft: '3rem'
            }}
          />
          <motion.div
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.2rem',
              opacity: 0.6
            }}
            animate={{ scale: searchTerm ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            🎵
          </motion.div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={searchTerm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid"
          >
            {tabs.map((tab, index) => (
              <SlideCard
                key={tab.id}
                title={`${tab.song_name} - ${tab.artist}`}
                icon="🎼"
                difficulty={tab.difficulty}
                gradient={difficultyColors[tab.difficulty]}
                index={index}
              >
                <TabDiagram tabContent={tab.tab_content} songName={tab.song_name} />
              </SlideCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {tabs.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              textAlign: 'center',
              padding: '3rem',
              opacity: 0.6
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎼</div>
            <p style={{ fontSize: '1.2rem' }}>
              {searchTerm ? `No tabs found for "${searchTerm}"` : 'No tabs available'}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Tabs;