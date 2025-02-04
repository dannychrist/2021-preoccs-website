import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props) => {
  const handleClickInside = (e) => {
    e.stopPropagation(); // Prevents clicking inside from closing drawer
  };

  // Close the drawer when a link inside is clicked
  const handleLinkClick = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit
    >
      <aside className='side-drawer' onClick={handleClickInside}>
        <nav onClick={handleLinkClick}>{props.children}</nav>
      </aside>
    </CSSTransition>
  );

  // Ensure the portal target exists
  const drawerHook = document.getElementById('drawer-hook');
  if (!drawerHook) {
    console.error('Error: #drawer-hook is missing in the DOM.');
    return null;
  }

  return ReactDOM.createPortal(content, drawerHook);
};

export default SideDrawer;
