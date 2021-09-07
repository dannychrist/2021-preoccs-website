import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

// Components
import Backdrop from './Backdrop';

import './VideoModal.css';

const VideoModalOverlay = (props) => {
  const content = (
    <div className='video-modal'>
        <div className={'video-modal__content'}>
          {props.children}
        </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const VideoModal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
      >
        <VideoModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default VideoModal;

