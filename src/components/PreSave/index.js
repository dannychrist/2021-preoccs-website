import React from 'react';

import styled from 'styled-components';

const PreSave = () => {
  return (
    <Wrapper>
      <iframe
        title='pre-save'
        width='300'
        height='250'
        src='https://ffm.to/arrangements/widget?width=300&height=250&note='
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
