import React, { useState } from 'react';

// Components
import Description from '../../shared/components/UIElements/Description';

// Icons
import EmailIcon from '@material-ui/icons/Email';
import Exclamation from '../../assets/icons/exclamation.svg';
import Xmark from '../../assets/icons/x-mark.svg';
import Check from '../../assets/icons/check-mark.svg';

import './Newsletter.css';

const Newsletter = () => {
  const [state, setState] = useState({
    email: '',
  });

  const [newsletterNotification, setNewsletterNotification] = useState({
    src: '',
    alt: '',
    message: '',
    level: '',
    visible: false,
  });

  const handleChange = (e) => {
    setState({ name: e.target.value.trim(), email: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (state.email) {
      fetch(`/api/memberAdd?email=${state.email}`)
        .then((res) => res.json())
        .then((json) => {
          if (json.status === 'subscribed') {
            configureNotification('success');
          } else if (json.title === 'Member Exists') {
            configureNotification('warning');
          } else {
            configureNotification('danger');
          }
        })
        .catch((err) => console.log(err));
        

      setState({ email: '' });
    }
  };

  const configureNotification = (level) => {
    const options = {
      level,
      visible: true,
    }

    const levelOptions = {
      success: {
        src: Check,
        alt: 'Check Mark',
        message:
          'Thank you for subscribing to our mailing list!',
      },
      warning: {
        src: Exclamation,
        alt: 'Exclamation Point',
        message:
          'The email you entered is already on our mailing list.',
      },
      danger: {
        src: Xmark,
        alt: 'X Mark',
        message:
          'There was an issue with your email submission, please try again.',
      }
    }
    setNewsletterNotification({...options, ...levelOptions[level]})
    setTimeout(() => {
      setNewsletterNotification({
        visible: false,
      });
    }, 3000);
  };

  return (
    <div className='newsletter-div'>
      <div className='newsletter-header-div'>
        <h2>NEWSLETTER</h2>
      </div>
      <h3 className='newsletter-subheader'>Sign up for our monthly newsletter</h3>
      <div className='description-div'>
      <Description
        src={newsletterNotification.src}
        alt={newsletterNotification.alt}
        message={newsletterNotification.message}
        visible={newsletterNotification.visible}
        level={newsletterNotification.level}
      />
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-item'>
          <input
            type='email'
            name='email'
            className='form-input'
            placeholder='email'
            onChange={handleChange}
            value={state.email}
            aria-label='email'
            required
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          />
        </div>
        <button className='form-button' type='submit'>
          <EmailIcon style={{ border: 'none', outline: 'none' }} />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
