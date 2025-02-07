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
    }, 5000); // Matches fade-out duration
  }, [currentSlide, slides.length]);

  // ✅ Auto-restart slideshow every `autoPlay` seconds
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      transitionSlides();
    }, autoPlay * 1000 + 5000); // Ensuring smooth transitions

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
      <MeltImage
        src={PreoccsHome}
        alt='Preoccs Home'
        className='melt-in'
        loading='eager'
        fetchpriority='high'
      />

      {/* Animated Ill At Ease Image (Melt-in Blur Effect) */}
      <MeltImage
        src={IllAtEaseHome}
        alt='Ill At Ease Home'
        className='melt-in'
        loading='eager'
        fetchpriority='high'
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
  0% { opacity: 0; transform: scale(0.8); filter: blur(10px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0px); }
`;

// **Image Container for Fading Slides**
const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &.fadeIn {
    animation: ${fadeIn} 5s ease-in-out forwards;
    opacity: 1;
  }

  &.fadeOut {
    animation: ${fadeOut} 5s ease-in-out forwards;
    opacity: 0;
  }
`;

// **Melt-In Effect for Overlay Images**
const MeltImage = styled.img`
  position: absolute;
  width: calc(10% + 7vw); /* Adjusts dynamically with viewport */
  max-width: 28%; /* Prevents it from getting too big on desktop */
  min-width: 22%; /* Keeps it readable on small screens */
  height: auto;
  opacity: 0; /* Initially hidden */

  &.melt-in:first-of-type {
    bottom: 15%;
    left: 10%;
    animation: ${swellBlurIn} 5s ease-out 1s forwards;
  }

  &.melt-in:last-of-type {
    top: 10%;
    right: 10%;
    animation: ${swellBlurIn} 5s ease-out 4s forwards;
  }

  /* 🖥️ Adjusted for small desktops/laptops */
  @media (max-width: 1280px) {
    width: calc(12% + 8vw);
    max-width: 32%;
  }

  /* 📱 Bigger images on tablets */
  @media (max-width: 1024px) {
    width: calc(18% + 10vw);
    max-width: 45%;
  }

  /* 📲 Bigger but controlled on smaller tablets */
  @media (max-width: 768px) {
    width: calc(22% + 12vw);
    max-width: 50%;
  }

  /* 📞 Largest but balanced size on mobile screens */
  @media (max-width: 500px) {
    width: 55%;
    max-width: 60%;
  }
`;

export default Slider;
