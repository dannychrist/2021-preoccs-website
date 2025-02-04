import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

// Components
import Backdrop from './Backdrop';

import './VideoModal.css';

const VideoModalOverlay = ({ children }) => {
  const modalHook = document.getElementById('modal-hook');

  if (!modalHook) {
    console.error('Error: #modal-hook is missing in the DOM.');
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className='video-modal'
      role='dialog'
      aria-labelledby='video-modal-title'
      onClick={(e) => e.stopPropagation()} // ✅ Prevents accidental closing when clicking inside
    >
      <div className='video-modal__content'>{children}</div>
    </div>,
    modalHook
  );
};

const VideoModal = ({ show, onCancel, ...props }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [show, onCancel]);

  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
      >
        {/* ✅ Pass all props safely to the overlay */}
        <VideoModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default VideoModal;
