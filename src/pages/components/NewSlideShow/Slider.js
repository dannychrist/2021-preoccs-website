import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

// Components
import Slide from './Slide';

// Images
import PreoccsHome from '../../../assets/home/preoccs-home-removebg-preview.webp';
import IllAtEaseHome from '../../../assets/home/ill-at-ease-home-removebg-preview.webp';

const Slider = ({ slides, autoPlay = 5 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(slides.length - 1);
  const [isFading, setIsFading] = useState(true);
  const timeoutRef = useRef(null);

  // ✅ Handle slide transitions
  const transitionSlides = useCallback(() => {
    setIsFading(false);

    setTimeout(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsFading(true);
    }, 6000); // Matches fade-out duration
  }, [currentSlide, slides.length]);

  // ✅ Auto-restart slideshow every `autoPlay` seconds
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      transitionSlides();
    }, autoPlay * 1000 + 6000); // Ensuring smooth transitions

    return () => clearTimeout(timeoutRef.current);
  }, [autoPlay, transitionSlides]);

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

      {/* Animated Preoccs Image (Melt-in Blur Effect) */}
      <MeltImage src={PreoccsHome} alt='Preoccs Home' className='melt-in' />

      {/* Animated Ill At Ease Image (Melt-in Blur Effect) */}
      <MeltImage
        src={IllAtEaseHome}
        alt='Ill At Ease Home'
        className='melt-in'
      />
    </Wrapper>
  );
};

// **Wrapper for the entire section**
const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

// **Keyframe Animations for Fading and Blurring**
const fadeIn = keyframes`
  0% { opacity: 0; filter: blur(10px); }
  100% { opacity: 1; filter: blur(0px); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; filter: blur(0px); }
  100% { opacity: 0; filter: blur(10px); }
`;

const swellBlurIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); filter: blur(15px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0px); }
`;

// **Image Container for Fading Slides**
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

// **Melt-In Effect for Overlay Images**
const MeltImage = styled.img`
  position: absolute;
  max-width: 40%;
  height: auto;
  opacity: 0; /* Initially hidden */
  animation: ${swellBlurIn} 5s ease-out forwards; /* 5-sec fade-in + blur reduction */

  &.melt-in:first-of-type {
    bottom: 15%;
    left: 10%;
  }

  &.melt-in:last-of-type {
    top: 10%;
    right: 10%;
  }
`;

export default Slider;
