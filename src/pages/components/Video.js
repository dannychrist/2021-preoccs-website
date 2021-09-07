import React, { useState } from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';

// Components
import VideoModal from '../../shared/components/UIElements/VideoModal';

import './Video.css';

const Video = ({ title, link, screenshot, onLoad }) => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => setShowModal(false);

  return (
    <>
      <VideoModal show={showModal} onCancel={closeModalHandler} header={title}>
        <iframe
          title={title}
          src={link}
          alt={title}
          style={{ width: '100%', height: '100%' }}
          frameborder='0'
          allowFullScreen='true'
          webkitallowfullscreen='true'
          mozallowfullscreen='true'
          onLoad={onLoad}
        ></iframe>
      </VideoModal>
      <Grid
        item
        component={Card}
        xs={12}
        sm={12}
        md={5}
        lg={3}
        xl={3}
        style={{
          margin: '1%',
          background: 'black',
        }}
      >
        <CardContent
          style={{
            padding: '0',
            margin: '0',
            width: '100%',
          }}
        >
          <button
            className='video-button'
            style={{ width: '100%' }}
            src={link}
            title={title}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            onClick={openModalHandler}
            onLoad={onLoad}
          >
            <img className='video-image' src={screenshot} alt={title} />
            <div className='video-image-overlay'>
              <div className='video-image-title'>{title}</div>
            </div>
          </button>
        </CardContent>
      </Grid>
    </>
  );
};

export default Video;
