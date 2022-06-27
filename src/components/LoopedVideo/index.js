import React from 'react';

import styled from 'styled-components';

const LoopedVideo = () => {
  return (
    <>
      <IFrame
        title='home-video'
        type='text/html'
        src={`https://www.youtube.com/embed/${process.env.REACT_APP_YOUTUBE_ID4}?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=${process.env.REACT_APP_YOUTUBE_ID4}`}
        // src={`https://www.youtube.com/embed/?listType=playlist&list=${process.env.REACT_APP_PLAYLIST_ID}&autoplay=1&mute=1&loop=1`}
        frameBorder='0'
        allow='autoplay'
        allowFullScreen='allowFullScreen'
        mozAllowFullScreen='mozAllowFullScreen'
        msAllowFullScreen='msAllowFullScreen'
        oAllowFullScreen='oAllowFullScreen'
        webkitAllowFullScreen='webkitAllowFullScreen'
      ></IFrame>
    </>
  );
};

const IFrame = styled.iframe`
  width: 100%;
  height: 80vh;
`;

export default LoopedVideo;
