import React, { useState } from 'react';

// Components
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import './FeaturedVideo.css';

const FeaturedVideo = (props) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <div className='featured-video-div'>
      {!loaded && <LoadingSpinner asOverlay />}
      <div className='featured-video-header-div'>
        <h2>FEATURED VIDEO</h2>
      </div>
      <div className='featured-video'>
        <iframe
          className='f-vid'
          // src='https://www.youtube.com/embed/v1hJz7xjFTY'
          src='https://www.youtube.com/embed/7NuwX0RZ6Hw'
          title='featured-video'
          alt='featured-video'
          frameborder='0'
          allowFullScreen='true'
          webkitallowfullscreen='true'
          mozallowfullscreen='true'
          onLoad={onLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default FeaturedVideo;
