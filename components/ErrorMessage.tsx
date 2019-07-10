import React from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.div`
  color: red;
`;

const ErrorMessage: React.FC = ({ children }) => (
  <StyledErrorMessage>{children}</StyledErrorMessage>
);

export default ErrorMessage;
