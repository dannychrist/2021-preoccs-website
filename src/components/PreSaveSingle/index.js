import React from 'react';

import styled from 'styled-components';

const PreSave = () => {
  return (
    <Wrapper>
      <iframe
        title='pre-save-single'
        width='300'
        height='250'
        src='https://ffm.to/70nanx4/widget?width=300&height=250&note='
      ></iframe>
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

export default PreSave;
