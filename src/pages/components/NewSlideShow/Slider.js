import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

// Components
import Slide from './Slide';

// Images
import PreoccsHome from '../../../assets/home/preoccs-home.webp';
import IllAtEaseHome from '../../../assets/home/ill-at-ease-home.webp';

const Slider = ({ slides, autoPlay = 5 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(slides.length - 1);
  const [isFading, setIsFading] = useState(true);
  const timeoutRef = useRef(null);

  // ✅ Memoize transitionSlides to prevent re-creation on every render
  const transitionSlides = useCallback(() => {
    setIsFading(false);

    setTimeout(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsFading(true);
    }, 6000); // Matches fade-out duration
  }, [currentSlide, slides.length]);

  // ✅ Fix memory leak by using `setTimeout` instead of `setInterval`
  useEffect(() => {
    // Clear previous timeout before setting a new one
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      transitionSlides();
    }, autoPlay * 1000 + 6000); // Ensuring smooth transitions

    return () => clearTimeout(timeoutRef.current); // Cleanup on unmount or dependency change
  }, [autoPlay, transitionSlides]); // ✅ Correct dependencies

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
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

// Keyframe animations for smooth fading and blur
const fadeIn = keyframes`
  0% { opacity: 0; filter: blur(10px); }
  100% { opacity: 1; filter: blur(0px); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; filter: blur(0px); }
  100% { opacity: 0; filter: blur(10px); }
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
