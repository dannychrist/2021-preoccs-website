import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = (props) => {
  // Ensure the portal target exists
  const backdropHook = document.getElementById('backdrop-hook');
  if (!backdropHook) {
    console.error('Error: #backdrop-hook is missing in the DOM.');
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className='backdrop'
      onClick={(e) => e.stopPropagation() || props.onClick()}
    ></div>,
    backdropHook
  );
};

export default Backdrop;
