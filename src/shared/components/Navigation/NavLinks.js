import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = ({ onClose, openShopModal }) => {
  return (
    <>
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
          {/* ✅ Open modal when clicking SHOP */}
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
