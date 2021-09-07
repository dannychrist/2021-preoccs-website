import React, { useState } from 'react';

// Components
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import Record from './Record';

// Data
import Preoccupations from '../../data/preoccupations';

import './Music.css';

const Music = (props) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <div className='main-div'>
      {!loaded && <LoadingSpinner asOverlay />}

      {Preoccupations[0].records.map((record) => {
        return (
        <Record 
          key={record.id}  
          title={record.title} 
          label={record.label}
          cover={record.cover}
          songs={record.songs}
          onLoad={onLoad}
          link={record.link}
        />
        );
      })}
    </div>
  );
};

export default Music;
