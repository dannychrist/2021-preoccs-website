import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = ({ onClose, openShopModal }) => {
  return (
    <>
      {/* NAVIGATION LINKS */}
      <ul className='nav-links'>
        <li>
          <NavLink to='/' onClick={onClose}>
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
          {/* ✅ Use <Link> and prevent navigation */}
          <Link
            to='#'
            onClick={(e) => {
              e.preventDefault(); // Prevent actual navigation
              openShopModal(); // Open modal function
            }}
          >
            SHOP
          </Link>
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
