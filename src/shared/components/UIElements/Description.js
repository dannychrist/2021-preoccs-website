import React from 'react';
import Notification from './Notification';

import './Description.css';;

const Description = ({ src, alt, message, visible, level }) => (
  <div className="description">
    <Notification
      src={src}
      alt={alt}
      message={message}
      visible={visible}
      level={level}
    />
  </div>
);

export default Description;
