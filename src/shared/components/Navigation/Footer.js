import React from 'react';

import './Footer.css';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <ul className='social-list'>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href=' https://ffm.to/preoccupationsyoutube'
          >
            <i id='icons' className='fab fa-youtube'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://ffm.to/preoccupationsamazon'
          >
            <i id='icons' className='fab fa-amazon'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://ffm.to/preoccupationsfacebook'
          >
            <i id='icons' className='fab fa-facebook-square'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://ffm.to/preoccupationsinstagram'
          >
            <i id='icons' className='fab fa-instagram'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://ffm.to/preoccupationstwitter'
          >
            <i id='icons' className='fab fa-twitter'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://ffm.to/preoccupationsspotify'
          >
            <i id='icons' className='fab fa-spotify'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://ffm.to/preoccupationsapplemusic'
          >
            <i id='icons' className='fab fa-itunes-note'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://vm.tiktok.com/ZMNNYaYC6/'
          >
            <i id='icons' className='fab fa-tiktok'></i>
          </a>
        </li>
      </ul>
      <p className='copyright'>
        Copyright &copy; 2020 Preoccupations all rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
