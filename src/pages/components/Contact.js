import React from 'react';
import './Contact.css';

const contacts = [
  { label: 'NA BOOKING', email: 'bettsmarshallk@gmail.com' },
  { label: 'EURO/UK BOOKING', email: 'Bas@belmontbookings.nl' },
  { label: 'BAND CONTACT', email: 'Preoccupationsband@gmail.com' },
  { label: 'PR', email: 'Gracej@grandstandhq.com' },
];

const Contact = () => {
  return (
    <div className='main-contact-div'>
      <div className='contact-header-div'>
        <h2>CONTACT US</h2>
      </div>
      {contacts.map((contact, index) => (
        <div
          key={index}
          className='contact-div'
          onClick={() => (window.location.href = `mailto:${contact.email}`)}
          role='button'
          tabIndex={0} // Allows keyboard accessibility
          onKeyDown={(e) =>
            e.key === 'Enter' &&
            (window.location.href = `mailto:${contact.email}`)
          }
        >
          <p>
            {contact.label}
            <i className='fas fa-envelope'></i>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Contact;
