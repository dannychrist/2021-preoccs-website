import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// Components
import Slide from './Slide';

const Slider = ({ slides, autoPlay = 5 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(slides.length - 1);
  const [isFading, setIsFading] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      transitionSlides();
    }, autoPlay * 1000 + 6000); // Ensuring smooth transitions

    return () => clearInterval(intervalRef.current);
  }, [currentSlide]);

  const transitionSlides = () => {
    setIsFading(false); // Start fade out

    setTimeout(() => {
      setPrevSlide(currentSlide); // Store previous slide
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsFading(true); // Start fade in
    }, 6000); // Matches fade-out duration
  };

  return (
    <Wrapper>
      {/* Previous Slide (Fading Out) */}
      <ImageContainer className={!isFading ? 'fadeOut' : ''}>
        <Slide content={slides[prevSlide]} />
      </ImageContainer>

      {/* Current Slide (Fading In) */}
      <ImageContainer className={isFading ? 'fadeIn' : ''}>
        <Slide content={slides[currentSlide]} />
      </ImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;

// Keyframe animations for smooth fading and blur
const fadeIn = keyframes`
  0% { opacity: 0; filter: blur(30px); }
  100% { opacity: 1; filter: blur(0px); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; filter: blur(0px); }
  100% { opacity: 0; filter: blur(30px); }
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &.fadeIn {
    animation: ${fadeIn} 6s ease-in-out forwards;
    opacity: 1;
  }

  &.fadeOut {
    animation: ${fadeOut} 6s ease-in-out forwards;
    opacity: 0;
  }
`;

export default Slider;
