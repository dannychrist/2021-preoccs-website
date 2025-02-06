import React from 'react';

import IllAtEase from '../../assets/records/ill-at-ease.webp';
import styled from 'styled-components';

const PreSave = () => {
  return (
    <Wrapper>
      <ImageContainer>
        {/* Replace with your actual image */}
        <PreSaveImage src={IllAtEase} alt='Pre-Save' />
        <Button
          href='https://orcd.co/preoccsfocus'
          target='_blank'
          rel='noopener noreferrer'
        >
          PRE-SAVE
        </Button>
      </ImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 350px;
  height: 300px;
  overflow: hidden;
`;

const PreSaveImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Button = styled.a`
  position: absolute;
  bottom: 10px;
  left: 50%;

  background: #ff5f5f;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  display: inline-block;

  &:hover {
    background: #ff3f3f;
  }
`;

export default PreSave;
