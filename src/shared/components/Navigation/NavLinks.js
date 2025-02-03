import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to='/music'>MUSIC</NavLink>
      </li>
      <li>
        <NavLink to='/video'>VIDEO</NavLink>
      </li>
      <li>
        <NavLink to='/live'>LIVE</NavLink>
      </li>
      <li>
        <a href='https://ffm.to/arrangements'>SHOP</a>
      </li>
      <li>
        <a href='https://preoccupations.us17.list-manage.com/subscribe?u=111ab42f11672c8db4328f3e7&id=6d6483a833'>
          NEWSLETTER
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
