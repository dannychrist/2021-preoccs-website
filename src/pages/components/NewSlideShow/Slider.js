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
  const [isAnimating, setIsAnimating] = useState(true);

  // ✅ Function to restart animations for PreoccsHome & IllAtEaseHome
  const restartAnimation = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
    }, 500); // Small delay before restarting animation
  }, []);

  // ✅ Handle slide transitions
  const transitionSlides = useCallback(() => {
    setIsFading(false);

    setTimeout(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsFading(true);
    }, 6000); // Matches fade-out duration
  }, [currentSlide, slides.length]);

  // ✅ Auto-restart slideshow & animations every `autoPlay` seconds
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      transitionSlides();
      restartAnimation();
    }, autoPlay * 1000 + 6000); // Ensuring smooth transitions

    return () => clearTimeout(timeoutRef.current);
  }, [autoPlay, transitionSlides, restartAnimation]);

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

      {/* Animated Preoccs Image (Lower Left) */}
      <AnimatedImage
        src={PreoccsHome}
        alt='Preoccs Home'
        className={isAnimating ? 'animate-preoccs' : ''}
      />

      {/* Animated Ill At Ease Image (Top Right) */}
      <AnimatedImage
        src={IllAtEaseHome}
        alt='Ill At Ease Home'
        className={isAnimating ? 'animate-illatease' : ''}
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

// **Keyframe Animations for Fading and Sliding**
const fadeIn = keyframes`
  0% { opacity: 0; filter: blur(10px); }
  100% { opacity: 1; filter: blur(0px); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; filter: blur(0px); }
  100% { opacity: 0; filter: blur(10px); }
`;

const slideInFromBottomLeft = keyframes`
  0% { transform: translate(-50%, 50%) scale(0.8); opacity: 0; }
  100% { transform: translate(0, 0) scale(1); opacity: 1; }
`;

const slideInFromTopRight = keyframes`
  0% { transform: translate(50%, -50%) scale(0.8); opacity: 0; }
  100% { transform: translate(0, 0) scale(1); opacity: 1; }
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

// **Animated Overlay Images**
const AnimatedImage = styled.img`
  position: absolute;
  max-width: 40%;
  height: auto;
  opacity: 0; /* Initially hidden */

  &.animate-preoccs {
    animation: ${slideInFromBottomLeft} 1.5s ease-out forwards;
    bottom: 10%;
    left: 10%;
  }

  &.animate-illatease {
    animation: ${slideInFromTopRight} 1.5s ease-out forwards;
    top: 10%;
    right: 10%;
  }
`;

export default Slider;
