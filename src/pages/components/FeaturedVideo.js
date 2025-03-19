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
          src='https://www.youtube-nocookie.com/embed/4RK_59EkZqE?start=2'
          title='featured-video'
          alt='featured-video'
          style={{ border: 'none' }}
          allowFullScreen={true} // ✅ Correct, boolean
          webkitallowfullscreen='true'
          mozallowfullscreen='true'
          onLoad={onLoad}
          sandbox='allow-scripts allow-same-origin allow-presentation allow-popups'
        ></iframe>
      </div>
    </div>
  );
};

export default FeaturedVideo;
