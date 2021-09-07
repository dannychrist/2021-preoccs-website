import React from 'react';

import './Footer.css';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <ul className='social-list'>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://m.facebook.com/Preoccupationsband/'
          >
            <i id='icons' class='fab fa-facebook-square'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://www.instagram.com/pre_occupations/?hl=en'
          >
            <i id='icons' class='fab fa-instagram'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://mobile.twitter.com/pre_occupations?lang=en'
          >
            <i id='icons' class='fab fa-twitter'></i>
          </a>
        </li>
        <li>
          <a
            className='social-list__link'
            href='https://open.spotify.com/artist/2bs3QE2ZMBjmb0QTqAjCj3'
          >
            <i id='icons' class='fab fa-spotify'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://music.apple.com/us/artist/preoccupations/1106477906'
          >
            <i id='icons' class='fab fa-itunes-note'></i>
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
