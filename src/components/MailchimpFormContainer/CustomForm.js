import React, { useState, useEffect } from 'react';

// UI Components
import InputField from './InputField';
import styled from 'styled-components';

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };

  useEffect(() => {
    if (status === 'success') {
      clearFields();
      setSuccessMessage(false);
    }
  }, [status]);

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Title>Join our email list for future updates.</Title>

      <InputContainer>
        <InputField
          label='First Name'
          onChangeHandler={setFirstName}
          type='text'
          value={firstName}
          placeholder='First Name'
          isRequired
        />

        <InputField
          label='Last Name'
          onChangeHandler={setLastName}
          type='text'
          value={lastName}
          placeholder='Last Name'
          isRequired
        />

        <InputField
          label='Email'
          onChangeHandler={setEmail}
          type='email'
          value={email}
          placeholder='your@email.com'
          isRequired
        />
      </InputContainer>

      <InputField
        label='Subscribe'
        type='submit'
        formValues={[email, firstName, lastName]}
      />
      {status === 'error' && (
        <ErrorMessage dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status === 'sending' && <SendingMessage>Sending...</SendingMessage>}
      {!successMessage ? (
        <CloseableMessage onClick={() => setSuccessMessage(true)}>
          {status === 'success' && (
            <>
              {/* <CloseIcon>x</CloseIcon> */}
              <SuccessTitle>Success!</SuccessTitle>
              {/* <SuccessMessage
                successMessage={successMessage}
                dangerouslySetInnerHTML={{ __html: message }}
              /> */}
            </>
          )}
        </CloseableMessage>
      ) : null}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 15px;
  font-weight: 900;
  text-align: center;
`;

const CloseableMessage = styled.div`
  margin: 0 10px;
  position: relative;
  cursor: pointer;
  background-color: #394648;
  padding: 5px;
  /* border-radius: 10px; */
  :hover {
    opacity: 0.9;
  }
`;

const CloseIcon = styled.p`
  position: absolute;
  top: -12px;
  right: 7px;
`;

const SuccessTitle = styled.h3`
  margin-top: 5px;
  padding: 0;
  font-weight: 900;
  text-align: center;
  color: #51f542;
  padding-bottom: 5px;
`;

const SendingMessage = styled.p`
  max-width: 350px;
  text-align: center;
  font-size: 14px;
`;

const ErrorMessage = styled.p`
  max-width: 350px;
  text-align: center;
  color: red;
  font-size: 14px;
`;

const SuccessMessage = styled.p`
  max-width: 350px;
  text-align: center;
  margin: 0 10px;
  /* line-height: 1.5rem; */
  font-size: 14px;
  padding-bottom: 10px;
`;

export default CustomForm;
