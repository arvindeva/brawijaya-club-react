import React from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.div`
  color: red;
`;

interface ErrorProps {
  error: any;
}

const ErrorMessage: React.FC<ErrorProps> = ({ error }) => (
  <StyledErrorMessage>
    <p>{error.message}</p>
  </StyledErrorMessage>
);

export default ErrorMessage;
