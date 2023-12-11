import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrigindo a importação
import App from './App';

createRoot(document.getElementById('root')).render(<App />);