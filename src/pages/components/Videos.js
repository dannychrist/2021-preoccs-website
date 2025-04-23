import React, { useState } from 'react';

// Components
import Video from './Video';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

// Screenshotsill
import IllAtEase from '../../assets/video-screenshots/illatease.webp';
import Bastards from '../../assets/video-screenshots/bastards.webp';
import Focus from '../../assets/video-screenshots/focus.webp';
import Slowly from '../../assets/video-screenshots/slowly.webp';
import DeathOfMelody from '../../assets/video-screenshots/deathofmelody.webp';
import Ricochet from '../../assets/records/arrangements-white.webp';
import CanelaParty from '../../assets/video-screenshots/canelaparty.webp';
import Disarray from '../../assets/video-screenshots/disarray.webp';
import Antidote from '../../assets/video-screenshots/antidote.webp';
import Anxiety from '../../assets/video-screenshots/anxiety.webp';
import Memory from '../../assets/video-screenshots/memory.webp';
import Degraded from '../../assets/video-screenshots/degraded.webp';
import BunkerBuster from '../../assets/video-screenshots/bunkerbuster.webp';
import ContinentalShelf from '../../assets/video-screenshots/continentalshelf.webp';
import Silhouettes from '../../assets/video-screenshots/silhouettes.webp';

import './Videos.css';

const Videos = () => {
  const musicvideos = [
    {
      id: '0000',
      title: 'Ill at Ease',
      link: 'https://www.youtube-nocookie.com/embed/z9k8zMvJGZw',
      screenshot: IllAtEase,
    },
    {
      id: '0001',
      title: 'Bastards',
      link: 'https://www.youtube-nocookie.com/embed/4RK_59EkZqE?start=2',
      screenshot: Bastards,
    },
    {
      id: '0002',
      title: 'Focus',
      link: 'https://www.youtube-nocookie.com/embed/npLTTvKpxPU?si=CANALUDNfDihzBRD',
      screenshot: Focus,
    },
    {
      id: '0003',
      title: 'Slowly',
      link: 'https://www.youtube-nocookie.com/embed/7NuwX0RZ6Hw',
      screenshot: Slowly,
    },
    {
      id: '0004',
      title: 'Death of Melody',
      link: 'https://www.youtube-nocookie.com/embed/yi6jdCx56AA',
      screenshot: DeathOfMelody,
    },
    {
      id: '0005',
      title: 'Ricochet',
      link: 'https://www.youtube-nocookie.com/embed/v1hJz7xjFTY',
      screenshot: Ricochet,
    },
    {
      id: '0006',
      title: 'March of Progress, Canela Party',
      link: 'https://www.youtube-nocookie.com/embed/B2vaIO5WOsQ',
      screenshot: CanelaParty,
    },
    {
      id: '0007',
      title: 'Disarray',
      link: 'https://www.youtube-nocookie.com/embed/keq2JOyZ6KI',
      screenshot: Disarray,
    },
    {
      id: '0008',
      title: 'Antidote',
      link: 'https://www.youtube-nocookie.com/embed/qRc9XW7ofGY',
      screenshot: Antidote,
    },
    {
      id: '0009',
      title: 'Anxiety',
      link: 'https://www.youtube-nocookie.com/embed/csMbqrFT1dM',
      screenshot: Anxiety,
    },
    {
      id: '0010',
      title: 'Memory',
      link: 'https://www.youtube-nocookie.com/embed/pQdVnKpv1Sk',
      screenshot: Memory,
    },
    {
      id: '0011',
      title: 'Degraded',
      link: 'https://www.youtube-nocookie.com/embed/vykhXVCSmz0',
      screenshot: Degraded,
    },
    {
      id: '0012',
      title: 'Bunker Buster',
      link: 'https://www.youtube-nocookie.com/embed/ZOLIHJKCu8M',
      screenshot: BunkerBuster,
    },
    {
      id: '0013',
      title: 'Continental Shelf',
      link: 'https://www.youtube-nocookie.com/embed/hdMz7BUtOvk',
      screenshot: ContinentalShelf,
    },
    {
      id: '0014',
      title: 'Silhouettes',
      link: 'https://www.youtube-nocookie.com/embed/zW1kP99mok4',
      screenshot: Silhouettes,
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
