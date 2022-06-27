import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

// Components
import CustomForm from './CustomForm';
import styled from 'styled-components';

const MailchimpFormContainer = (props) => {
  const postUrl = `https://preoccupations.us17.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  return (
    <Wrapper>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
   align-items: center;
  font-size: 16px;
`;

export default MailchimpFormContainer;
