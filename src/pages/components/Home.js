import React from 'react';

// Components
import Slider from '../components/NewSlideShow/Slider';
import Contact from './Contact';
import FeaturedVideo from './FeaturedVideo';
import PreSave from '../../components/PreSave';
import PreSaveSingle from '../../components/PreSaveSingle';
import Live from './Live';
import PreOrder from './PreOrder';
import NewShop from './NewShop';

// Covers
// import ArrangementsWhite from '../../assets/records/arrangements-white.jpg';
import IllAtEase from '../../assets/records/ill-at-ease.png';
// import ArrangementsBlack from '../../assets/records/arrangements-black.jpg';
// import NewMaterial from '../../assets/records/new-material.jpg';
// import SelfTitled from '../../assets/records/self-titled.jpg';
// import VietCong from '../../assets/records/viet-cong.jpg';
// import Cassette from '../../assets/records/cassette.jpg';
// import SevenInch from '../../assets/records/7Inch.jpg';
// import SplitSevenInch from '../../assets/records/split7inch.jpg';

import './Home.css';

const Home = () => {
  const images = [
    IllAtEase,
    // ArrangementsWhite,
    // ArrangementsBlack,
    // NewMaterial,
    // SelfTitled,
    // VietCong,
    // Cassette,
    // SevenInch,
    // SplitSevenInch
  ];

  return (
    <div>
      <Slider slides={images} />
      <PreOrder />
      <div className='pre-save-wrapper'>
        <PreSave />
        {/* <PreSaveSingle /> */}
      </div>
      <FeaturedVideo />
      <Live />
      {/* <NewShop /> */}
      <Contact />
    </div>
  );
};

export default Home;
