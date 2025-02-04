import React from 'react';
import ReactDOM from 'react-dom'; // ✅ React 17 and earlier use 'react-dom'
import './index.css';
import App from './App';

// ✅ Use ReactDOM.render() for React 17 or lower
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
