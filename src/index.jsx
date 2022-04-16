import { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
