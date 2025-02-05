import React, { useEffect } from 'react';
import './Live.css';

const Live = () => {
  // Use useEffect to dynamically load the Seated widget script
  useEffect(() => {
    // Check if the script is already loaded to avoid duplicate loading
    if (!document.getElementById('seated-widget-script')) {
      const script = document.createElement('script');
      script.id = 'seated-widget-script';
      script.src = 'https://widget.seated.com/app.js';
      script.async = true;
      document.body.appendChild(script);

      // Cleanup function to remove the script if the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <div className='live-header'>
        <h2>UPCOMING TOURS</h2>
      </div>
      <div className='live-div'>
        {/* Seated widget container */}
        <div
          id='seated-55fdf2c0'
          data-artist-id='0fc46ade-871c-4157-b582-67efd4f0808d'
          data-css-version='2'
        ></div>
      </div>
    </>
  );
};

export default Live;
