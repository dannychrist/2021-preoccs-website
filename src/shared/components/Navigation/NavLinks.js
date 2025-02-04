import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../UIElements/Modal'; // Import Modal

import './NavLinks.css';

const NavLinks = ({ onClose }) => {
  const [showShopModal, setShowShopModal] = useState(false);

  const openShopModal = () => {
    setShowShopModal(true);
    if (onClose) {
      onClose(); // ✅ Close SideDrawer when clicking "SHOP"
    }
  };

  return (
    <>
      {/* SHOP MODAL */}
      <Modal show={showShopModal} onCancel={() => setShowShopModal(false)} />

      {/* NAVIGATION LINKS */}
      <ul className='nav-links'>
        <li>
          <NavLink to='/' exact onClick={onClose}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to='/video' onClick={onClose}>
            VIDEO
          </NavLink>
        </li>
        <li>
          <NavLink to='/live' onClick={onClose}>
            LIVE
          </NavLink>
        </li>
        <li>
          <button className='nav-link-btn' onClick={openShopModal}>
            SHOP
          </button>
        </li>
        <li>
          <a
            href='https://preoccupations.us17.list-manage.com/subscribe?u=111ab42f11672c8db4328f3e7&id=6d6483a833'
            onClick={onClose}
          >
            NEWSLETTER
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
