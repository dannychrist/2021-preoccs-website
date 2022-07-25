import React, { useState } from 'react';

// Components
import Video from './Video';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

// Screenshots
import DeathOfMelody from '../../assets/video-screenshots/deathofmelody.png'
import Ricochet from '../../assets/records/arrangements-white.jpg';
import CanelaParty from '../../assets/video-screenshots/canelaparty.png';
import Disarray from '../../assets/video-screenshots/disarray.png';
import Antidote from '../../assets/video-screenshots/antidote.png';
import Anxiety from '../../assets/video-screenshots/anxiety.png';
import Memory from '../../assets/video-screenshots/memory.png';
import Degraded from '../../assets/video-screenshots/degraded.png';
import BunkerBuster from '../../assets/video-screenshots/bunkerbuster.png';
import ContinentalShelf from '../../assets/video-screenshots/continentalshelf.png';
import Silhouettes from '../../assets/video-screenshots/silhouettes.png';

import './Videos.css';

const Videos = () => {
  const musicvideos = [
    {
      id: '000',
      title: 'Death of Melody',
      link: 'https://www.youtube.com/embed/yi6jdCx56AA',
      screenshot: DeathOfMelody
    },
    {
      id: '001',
      title: 'Ricochet',
      link: 'https://www.youtube.com/embed/v1hJz7xjFTY',
      screenshot: Ricochet
    },
    {
      id: '002',
      title: 'March of Progress, Canela Party',
      link: 'https://www.youtube.com/embed/B2vaIO5WOsQ',
      screenshot: CanelaParty
    },
    {
      id: '003',
      title: 'Disarray',
      link: 'https://www.youtube.com/embed/keq2JOyZ6KI',
      screenshot: Disarray
    },
    {
      id: '004',
      title: 'Antidote',
      link: 'https://www.youtube.com/embed/qRc9XW7ofGY',
      screenshot: Antidote
    },
    {
      id: '005',
      title: 'Anxiety',
      link: 'https://www.youtube.com/embed/csMbqrFT1dM',
      screenshot: Anxiety
    },
    {
      id: '006',
      title: 'Memory',
      link: 'https://www.youtube.com/embed/pQdVnKpv1Sk',
      screenshot: Memory
    },
    {
      id: '007',
      title: 'Degraded',
      link: 'https://www.youtube.com/embed/vykhXVCSmz0',
      screenshot: Degraded
    },
    {
      id: '008',
      title: 'Bunker Buster',
      link: 'https://www.youtube.com/embed/ZOLIHJKCu8M',
      screenshot: BunkerBuster
    },
    {
      id: '009',
      title: 'Continental Shelf',
      link: 'https://www.youtube.com/embed/hdMz7BUtOvk',
      screenshot: ContinentalShelf
    },
    {
      id: '010',
      title: 'Silhouettes',
      link: 'https://www.youtube.com/embed/zW1kP99mok4',
      screenshot: Silhouettes
    },
  ];

  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <div className='main-video-div'>
      {!loaded && <LoadingSpinner asOverlay />}
      {musicvideos.map((video) => {
        return (
          <Video
            className='video-image'
            key={video.id}
            title={video.title}
            link={video.link}
            screenshot={video.screenshot}
            onLoad={onLoad}
          />
        );
      })}
    </div>
  );
};

export default Videos;
