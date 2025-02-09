import React from 'react';

// Components
import Slider from '../components/NewSlideShow/Slider';
import Contact from './Contact';
import FeaturedVideo from './FeaturedVideo';
import Live from './Live';

// Covers
import IllAtEase from '../../assets/records/ill-at-ease-front.webp';
import IllAtEase2 from '../../assets/records/ill-at-ease-back.webp';
import IllatEase3 from '../../assets/records/ill-at-ease-inner.webp';

import './Home.css';

const Home = () => {
  const images = [IllAtEase, IllAtEase2, IllatEase3];

  return (
    <div className='home-container'>
      <Slider slides={images} />
      <FeaturedVideo />
      <Live />
      <Contact />
    </div>
  );
};

export default Home;
