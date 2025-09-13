import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Create root and render the App
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
