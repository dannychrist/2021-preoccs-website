import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = ({ show, onExited, children }) => {
  const handleClickInside = (e) => {
    e.stopPropagation(); // ✅ Prevents accidental closing
  };

  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit
      onExited={onExited} // ✅ Ensure onExited fires correctly
    >
      <aside className='side-drawer' onClick={handleClickInside}>
        <nav>{children}</nav>
      </aside>
    </CSSTransition>
  );

  const portalTarget = document.getElementById('drawer-hook');
  if (!portalTarget) {
    console.error('Error: #drawer-hook is missing in the DOM.');
    return null;
  }

  return ReactDOM.createPortal(content, portalTarget);
};

export default SideDrawer;
