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

const AnimatedGrid2 = () => {
  useEffect(() => {
    const ImageOne = document.getElementById('grid-image-1');
    const ImageTwo = document.getElementById('grid-image-2');
    const ImageThree = document.getElementById('grid-image-3');
    const ImageFour = document.getElementById('grid-image-4');
    const ImageFive = document.getElementById('grid-image-5');
    const ImageSix = document.getElementById('grid-image-6');
    const ImageSeven = document.getElementById('grid-image-7');
    const ImageEight = document.getElementById('grid-image-8');
    const ImageNine = document.getElementById('grid-image-9');

    setTimeout(() => {
      ImageTwo.style.animationName = 'opacityDissolve';
      ImageTwo.style.display = 'block';
      setTimeout(() => {
        ImageOne.style.animationName = 'opacityDissolve';
        ImageOne.style.display = 'block';
        setTimeout(() => {
          ImageFour.style.animationName = 'opacityDissolve';
          ImageFour.style.display = 'block';
          setTimeout(() => {
            ImageThree.style.animationName = 'opacityDissolve';
            ImageThree.style.display = 'block';
            setTimeout(() => {
              ImageSix.style.animationName = 'opacityDissolve';
              ImageSix.style.display = 'block';
              setTimeout(() => {
                ImageFive.style.animationName = 'opacityDissolve';
                ImageFive.style.display = 'block';
                setTimeout(() => {
                  ImageEight.style.animationName = 'opacityDissolve';
                  ImageEight.style.display = 'block';
                  setTimeout(() => {
                    ImageSeven.style.animationName = 'opacityDissolve';
                    ImageSeven.style.display = 'block';
                    setTimeout(() => {
                      ImageNine.style.animationName = 'opacityDissolve';
                      ImageNine.style.display = 'block';
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);

    return () => {
      clearTimeout();
    };
  }, []);
  return (
    <ImageWrapper>
      <Image src={PRE_9} id='grid-image-1' />
      <Image src={PRE_8} id='grid-image-2' />
      <Image src={PRE_7} id='grid-image-3' />
      <Image src={PRE_6} id='grid-image-4' />
      <Image src={PRE_5} id='grid-image-5' />
      <Image src={PRE_4} id='grid-image-6' />
      <Image src={PRE_3} id='grid-image-7' />
      <Image src={PRE_2} id='grid-image-8' />
      <Image src={PRE_1} id='grid-image-9' />
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
  /* transition: opacity 1s ease-in-out; */
`;

export default AnimatedGrid2;
