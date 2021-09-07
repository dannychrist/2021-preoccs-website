import React from 'react';

import './Notification.css';

const Notification = ({ level, visible, src, alt, message }) => {
  return (
    <div className={`notification ${level}${visible ? ' visible' : ''}`}>
      <img src={src} alt={alt} />
      <p>{message}</p>
    </div>
  );
};

export default Notification;
