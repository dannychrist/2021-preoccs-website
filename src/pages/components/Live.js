import React from 'react';
import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// Components
// import Shows from './Shows';

import './Live.css';

const Live = () => {
  const location = useLocation();

  const isLive = location.pathname === '/live';

  return (
    <>
      <div className='live-header'>
        <h2>UPCOMING TOURS</h2>
      </div>
      <div
        style={{
          minHeight: isLive ? '60vh' : 'auto',
        }}
        className='live-div'
      >
        {/* <Shows isLoading={isLoading} items={items} /> */}

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
