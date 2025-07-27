import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/ibm-plex-serif/400.css'; // Regular
import '@fontsource/ibm-plex-serif/700.css'; // Bold
import '@fontsource/ibm-plex-serif/400-italic.css'; // Italic

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
