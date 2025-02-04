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
      onExited={onExited} // ✅ Ensure onExited is fired correctly
    >
      <aside className='side-drawer' onClick={handleClickInside}>
        <nav>{children}</nav>
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
