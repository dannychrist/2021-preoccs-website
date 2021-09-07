import React, { useState } from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';

// Components
import Modal from '../../shared/components/UIElements/Modal';

import './Record.css';

const Record = ({ onLoad, title, label, cover, songs, link }) => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => setShowModal(false);

  return (
    <>
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={title}
        subheader={label}
        link={link}
      >
        <div style={{ paddingLeft: '10px' }}>
          <ol className='songs-ol'>
            {songs.map((song) => {
              return (
                <li
                  className='songs-li'
                  key={song.id}
                  style={{ padding: '7px' }}
                >
                  {song.title} {song.length}
                </li>
              );
            })}
          </ol>
        </div>
      </Modal>
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
          background: '#080808',
        }}
      >
        <CardContent
          style={{
            padding: '0',
            margin: '0',
            width: '100%',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <button
            className='record-button'
            title={title}
            frameBorder='0'
            onClick={openModalHandler}
            onLoad={onLoad}
          >
            <img className='record-image' src={cover} alt={title} />
            <div className='record-image-overlay'>
              <div className='record-image-title'>{title}</div>
            </div>
          </button>
        </CardContent>
      </Grid>
    </>
  );
};

export default Record;
