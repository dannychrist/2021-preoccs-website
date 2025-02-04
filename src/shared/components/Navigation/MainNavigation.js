import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import Modal from '../UIElements/Modal'; // ✅ Import Modal

// Icons
import Preoccs from '../../../assets/preoccs_white.png';

import './MainNavigation.css';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [triggerShopModal, setTriggerShopModal] = useState(false);
  const [openModalAfterDrawer, setOpenModalAfterDrawer] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const openShopModal = () => {
    if (drawerIsOpen) {
      closeDrawerHandler(); // ✅ Close SideDrawer first
      setOpenModalAfterDrawer(true); // ✅ Set flag to open modal after drawer closes
    } else {
      setTriggerShopModal(true); // ✅ If not using SideDrawer, open modal immediately
    }
  };

  // ✅ Open modal after SideDrawer fully closes
  const handleDrawerExited = () => {
    if (openModalAfterDrawer) {
      setOpenModalAfterDrawer(false);
      setTriggerShopModal(true);
    }
  };

  const closeShopModal = () => {
    setTriggerShopModal(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onExited={handleDrawerExited}>
        <nav className='main-navigation__drawer-nav'>
          {/* ✅ Pass openShopModal to NavLinks */}
          <NavLinks
            onClose={closeDrawerHandler}
            openShopModal={openShopModal}
          />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className='main-navigation__menu-btn'
          onClick={openDrawerHandler}
        >
          <i id='dropdown-icon' className='fas fa-bars'></i>
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/'>
            <img src={Preoccs} width={250} alt='logo' />
          </Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks openShopModal={openShopModal} />
        </nav>
      </MainHeader>

      {/* ✅ SHOP MODAL is now properly triggered */}
      <Modal show={triggerShopModal} onCancel={closeShopModal} />
    </>
  );
};

export default MainNavigation;
