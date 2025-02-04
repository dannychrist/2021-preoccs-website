import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

// Components
import Backdrop from './Backdrop';

import './Modal.css';

const ModalOverlay = ({ onCancel }) => {
  const modalHook = document.getElementById('modal-hook');

  if (!modalHook) {
    console.error('Error: #modal-hook is missing in the DOM.');
    return null;
  }

  const content = (
    <div
      className='modal'
      role='dialog'
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
    >
      <header className='modal__header'>
        <h2 id='modal-title'>PICK YOUR MERCH STORE</h2>
      </header>

      <div className='modal__content'>
        <h3>NEW RECORDS / MERCH</h3>
        <ul>
          <li>
            <a
              href='https://bornlosersrecords.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              BORN LOSERS RECORDS (WORLD)
            </a>
          </li>
        </ul>

        <h3>OLD RECORDS / MERCH</h3>
        <ul>
          <li>
            <a
              href='https://jagjaguwar.com/artist/preoccupations/'
              target='_blank'
              rel='noopener noreferrer'
            >
              JAGJAGUWAR (WORLD)
            </a>
          </li>
          <li>
            <a
              href='https://flemisheye.com/collections/preoccupations'
              target='_blank'
              rel='noopener noreferrer'
            >
              FLEMISH EYE (CAN)
            </a>
          </li>
          <li>
            <a
              href='https://shop.bingomerch.com/collections/preoccupations?ffm=FFM_e8a8051460f238253706324e342fb9e0'
              target='_blank'
              rel='noopener noreferrer'
            >
              BINGO MERCH (ARRANGEMENTS UK / EU)
            </a>
          </li>
          <li>
            <a
              href='https://www.hellomerch.com/collections/preoccupations'
              target='_blank'
              rel='noopener noreferrer'
            >
              HELLO MERCH (ARRANGEMENTS US)
            </a>
          </li>
        </ul>
      </div>

      <footer className='modal__footer'>
        <button className='btn' onClick={onCancel}>
          CLOSE
        </button>
      </footer>
    </div>
  );

  return ReactDOM.createPortal(content, modalHook);
};

const Modal = ({ show, onCancel }) => {
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
        <ModalOverlay onCancel={onCancel} />
      </CSSTransition>
    </>
  );
};

export default Modal;
