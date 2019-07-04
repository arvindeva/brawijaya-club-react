import React from 'react';
import styled from 'styled-components';
import { FieldProps } from 'formik';
import { FormValues } from './SignInForm';

const TextInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
`;

interface Props {
  type: string;
}

type InputFieldProps = FieldProps<FormValues> & Props;

export const InputField: React.FC<InputFieldProps> = ({
  form,
  field,
  type,
}) => {
  const { name } = field;
  const { touched, errors } = form;
  return (
    <label htmlFor={field.name}>
      <TextInput type={type} {...field} />
      {touched[name as keyof typeof touched] &&
      errors[name as keyof typeof touched] ? (
        <div>
          <p>{errors[name as keyof typeof touched]}</p>
        </div>
      ) : null}
    </label>
  );
};
