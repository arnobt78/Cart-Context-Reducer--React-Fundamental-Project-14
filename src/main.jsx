/**
 * Application entry point.
 * Mounts the React app inside #root with AppProvider (cart context) wrapping the whole tree.
 * StrictMode helps surface side-effect and deprecation issues in development.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
