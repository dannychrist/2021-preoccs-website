import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.onload = function () {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.render(<App />, rootElement);
  } else {
    console.error('❌ Error: #root is missing in the DOM.');
  }
};
