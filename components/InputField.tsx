import React from 'react';
import styled from 'styled-components';
import { FieldProps } from 'formik';
import { FormValues } from './SignInForm';

const TextInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  height: 2rem;
  font-size: 1rem;
  font-family: 'Nunito', sans-serif;
  padding: 0 0.5rem;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const InputLabel = styled.label`
  display: block;
`;

interface Props {
  type: string;
  autoComplete: string;
  label: string;
}

type InputFieldProps = FieldProps<FormValues> & Props;

export const InputField: React.FC<InputFieldProps> = ({
  form,
  field,
  type,
  autoComplete,
  label,
}) => {
  const { name } = field;
  const { touched, errors } = form;
  return (
    <>
      <TextInput autoComplete={autoComplete} type={type} {...field} />
      <InputLabel htmlFor={field.name}>{label}</InputLabel>
      {touched[name as keyof typeof touched] &&
      errors[name as keyof typeof touched] ? (
        <ErrorMessage>
          <p>{errors[name as keyof typeof touched]}</p>
        </ErrorMessage>
      ) : null}
    </>
  );
};
