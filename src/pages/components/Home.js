import React from 'react';

// Components
import Slider from '../components/NewSlideShow/Slider';
import Contact from './Contact';
import FeaturedVideo from './FeaturedVideo';
import PreSave from '../../components/PreSave';
import PreSaveSingle from '../../components/PreSaveSingle';
import Live from './Live';
import PreOrder from './PreOrder';

// Covers
import IllAtEase from '../../assets/records/ill-at-ease.png';

import './Home.css';

const Home = () => {
  const images = [IllAtEase];

  return (
    <div>
      <Slider slides={images} />
      <PreOrder />
      <div className='pre-save-wrapper'>
        {/* <PreSave /> */}
        <PreSaveSingle />
      </div>
      <FeaturedVideo />
      <Live />
      <Contact />
    </div>
  );
};

export default Home;
