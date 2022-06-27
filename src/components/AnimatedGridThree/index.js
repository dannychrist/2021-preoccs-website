import React, { useState, useEffect } from 'react';

// Images
import PRE_1 from '../../assets/tiles/PRE_1.jpg';
import PRE_2 from '../../assets/tiles/PRE_2.jpg';
import PRE_3 from '../../assets/tiles/PRE_3.jpg';
import PRE_4 from '../../assets/tiles/PRE_4.jpg';
import PRE_5 from '../../assets/tiles/PRE_5.jpg';
import PRE_6 from '../../assets/tiles/PRE_6.jpg';
import PRE_7 from '../../assets/tiles/PRE_7.jpg';
import PRE_8 from '../../assets/tiles/PRE_8.jpg';
import PRE_9 from '../../assets/tiles/PRE_9.jpg';

// UI Components
import styled from 'styled-components';

const imageArray = [
  PRE_9,
  PRE_8,
  PRE_7,
  PRE_6,
  PRE_5,
  PRE_4,
  PRE_3,
  PRE_2,
  PRE_1,
];

const AnimatedGridThree = () => {
  const [finishedAnimation, setFinishedAnimation] = useState(0);

  useEffect(() => {
    const callBack = () => {
      setFinishedAnimation(1);
    };
    const timer = setTimeout(callBack, 11000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <ImageWrapper>
      {imageArray.map((src, index) => (
        <Image
          finishedAnimation={finishedAnimation}
          src={src}
          key={index}
          alt={`album cover ${index}`}
          index={index}
        />
      ))}
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  padding: 5px;
  opacity: ${(props) => props.finishedAnimation};
  animation: opacityDissolve 3s ease-in-out ${(props) => props.index * 1}s;
  transition: ${props => props.finishedAnimation && 'opacity 2s ease-in-out'}

`;

export default AnimatedGridThree;

// TEST
