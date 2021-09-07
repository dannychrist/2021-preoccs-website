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
        `https://api.songkick.com/api/3.0/artists/8777299/calendar.json?apikey=cgztuI5H7nSU0Sy8`
      );
      setItems(result.data.resultsPage.results.event);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className='live-div'>
      <Shows isLoading={isLoading} items={items} />
    </div>
  );
};

export default Live;
