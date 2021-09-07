import React from 'react';

// Components
import Show from './Show';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import './Shows.css';

const Shows = ({ items, isLoading }) => {
  return isLoading ? (
    <LoadingSpinner asOverlay />
  ) : (
    <div className='cards'>
      {items.map((item, key) => {
        return <Show key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Shows;
