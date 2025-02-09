import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ asOverlay }) => {
  return (
    <div className={`${asOverlay ? 'loading-spinner__overlay' : ''}`}>
      <div className='lds-ring'>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
