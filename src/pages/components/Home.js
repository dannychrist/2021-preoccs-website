import React from 'react';

// Components
import Slider from '../components/NewSlideShow/Slider';
import Contact from './Contact';
import FeaturedVideo from './FeaturedVideo';
// import PreSave from '../../components/PreSave';
import PreSaveSingle from '../../components/PreSaveSingle';
import Live from './Live';
import PreOrder from './PreOrder';

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
      {/* <PreOrder /> */}
      {/* <div className='pre-save-wrapper'>
        <PreSave />
        <PreSaveSingle />
      </div> */}
      <FeaturedVideo />
      <Live />
      <Contact />
    </div>
  );
};

export default Home;
