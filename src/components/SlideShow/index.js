import React, { useState, useEffect, useRef } from 'react';

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

const SlideShow = () => {
  const imageSrcs = [
    PRE_1,
    PRE_2,
    PRE_3,
    PRE_4,
    PRE_5,
    PRE_6,
    PRE_7,
    PRE_8,
    PRE_9,
  ];
  const [srcIndex, setSrcIndex] = useState(0);
  const [homeImage, setHomeImage] = useState(imageSrcs[0]);
  const srcIndexRef = useRef();

  useEffect(() => {
    srcIndexRef.current = srcIndex;
  }, []);

  useEffect(() => {
    srcIndexRef.current = srcIndex;
  }, [srcIndex]);

  useEffect(() => {
    let timeout1;
    let timeout2;
    function changeSrc() {
      const imageElement = document.getElementById('home-image');
      if (!imageElement) {
        return;
      }
      let index = 0;

      if (srcIndexRef.current === imageSrcs.length - 1) {
        setSrcIndex(index);
      } else {
        index = srcIndexRef.current + 1;
        setSrcIndex(index);
      }
      imageElement.style.opacity = 0;
      timeout2 = setTimeout(() => {
        setHomeImage(imageSrcs[index]);
        imageElement.style.opacity = 1;
        timeout1 = setTimeout(changeSrc, 1000);
      }, 1000);
    }
    timeout1 = setTimeout(changeSrc, 1000);

    return () => {
      if (timeout1) {
        clearTimeout(timeout1);
      }
      if (timeout2) {
        clearTimeout(timeout2);
      }
    };
  }, []);

  return (
    <>
      <Image bgImage={homeImage} className='pageContainer' id='home-image' />
    </>
  );
};

// const Image = styled.div`
//   position: relative;
//   background-image: url(${(props) => props.bgImage});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   /* height: calc(100vh - 50px); */
//   height: 100vh;
//   width: 100%;
//   opacity: 1;
//   transition: opacity 0.5s ease-in-out;
// `;

const Image = styled.div`
  position: relative;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* height: calc(100vh - 50px); */
  height: 100vh;
  width: 100%;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`;

export default SlideShow;
