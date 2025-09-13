import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Chords from './pages/Chords';
import Tabs from './pages/Tabs';
import Scales from './pages/Scales';
import Theory from './pages/Theory';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="cinematic-bg" />
        <div className="cinematic-overlay" />
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chords" element={<Chords />} />
            <Route path="/tabs" element={<Tabs />} />
            <Route path="/scales" element={<Scales />} />
            <Route path="/theory" element={<Theory />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;