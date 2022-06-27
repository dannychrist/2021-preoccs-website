import React from 'react';

// UI Components
import styled from 'styled-components';

const InputField = (props) => {
  const validateInput = (values) => {
    if (values.some((f) => f === '') || values[0].indexOf('@') === -1) {
      return true;
    } else {
      return false;
    }
  };

  if (props.type === 'submit') {
    return (
      <InputButton
        type='submit'
        value={props.label}
        disabled={validateInput(props.formValues)}
      />
    );
  } else {
    return (
      <Label>
        <Input
          onChange={(e) => props.onChangeHandler(e.target.value)}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className='inputField__field'
          name={props.name}
        />
      </Label>
    );
  }
};

const Label = styled.label`
  position: relative;
  font-size: 14px;
  padding-top: 20px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: none;
  appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: #f2f2f2;
  padding: 12px;
  border-radius: 3px;
  width: 250px;
  outline: none;
  font-size: 14px;

  :focus::placeholder {
    color: transparent;
  }
  ::placeholder {
    color: #222;
    transition: color 0.3 ease;
  }
`;

const InputButton = styled.input`
  background-color: ${props => props.disabled ? 'orange' : 'red' };
  border: none;
  color: var(--color-text);
  padding: 16px 32px;
  text-decoration: none;
  margin: 20px 2px;
  cursor: pointer;
  font-size: 16px;

  :hover {
    opacity: ${props => !props.disabled && `0.9`};
    /* color: ${props => !props.disabled && `var(--color-bg)`}; */
  }
`;

export default React.memo(InputField);
