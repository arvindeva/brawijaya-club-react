import React from 'react';
import styled from 'styled-components';
import { FieldProps } from 'formik';
import { FormValues } from './SignInForm';

const InputWrapper = styled.div`
  margin: 1rem 0;
`;

const TextInput = styled.input`
  border: 1px solid #dadfe1;
  border-radius: 5px;
  height: 2rem;
  font-size: 1rem;
  font-family: 'Nunito', sans-serif;
  padding: 0 0.5rem;
  min-width: 300px;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const InputLabel = styled.label`
  display: block;
  color: #2e3131;
`;

interface Props {
  type: string;
  autoComplete: string;
  label: string;
  placeholder: string;
}

type InputFieldProps = FieldProps<FormValues> & Props;

export const InputField: React.FC<InputFieldProps> = ({
  form,
  field,
  type,
  autoComplete,
  placeholder,
}) => {
  const { name } = field;
  const { touched, errors } = form;
  return (
    <InputWrapper>
      <TextInput
        placeholder={placeholder}
        autoComplete={autoComplete}
        type={type}
        {...field}
      />
      <InputLabel htmlFor={field.name} />
      {touched[name as keyof typeof touched] &&
      errors[name as keyof typeof touched] ? (
        <ErrorMessage>
          <p>{errors[name as keyof typeof touched]}</p>
        </ErrorMessage>
      ) : null}
    </InputWrapper>
  );
};
