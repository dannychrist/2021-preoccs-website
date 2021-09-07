import React from 'react';

import './Contact.css';

const Contact = () => {
  return (
    <div className='main-contact-div'>
      <div className='contact-header-div'>
        <h2>CONTACT US</h2>
      </div>
      <div className='contact-div'>
        <h4>
          NA Booking:{' '}
          <a href='mailto: bettsmarshallk@gmail.com'>
            <i class='fas fa-envelope'></i>
          </a>
        </h4>
      </div>
      <div className='contact-div' style={{ background: 'var(--clr-light)' }}>
        <h4>
          Euro/UK Booking:{' '}
          <a href='mailto: Bas@belmontbookings.nl'>
            <i class='fas fa-envelope'></i>
          </a>
        </h4>
      </div>
      <div className='contact-div'>
        <h4>
          Band Contact:{' '}
          <a href='Preoccupationsband@gmail.com'>
            <i class='fas fa-envelope'></i>
          </a>
        </h4>
      </div>
      <div className='contact-div' style={{ background: 'var(--clr-light)' }}>
        <h4>
          PR:{' '}
          <a href='mailto: Gracej@grandstandhq.com'>
            <i class='fas fa-envelope'></i>
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Contact;
