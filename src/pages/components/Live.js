import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Shows from './Shows';

import './Live.css';

const Live = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.songkick.com/api/3.0/artists/8777299/calendar.json?apikey=${process.env.REACT_APP_SONG_KICK}`
      );
      setItems(result.data.resultsPage.results.event);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <>
    <div className='live-header'>
        <h2>UPCOMING TOURS</h2>
      </div>
    <div className='live-div'>
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
