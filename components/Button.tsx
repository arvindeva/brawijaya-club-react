import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  background: #ff403a;
  border: 2px solid #ff403a;
  border-radius: 0.4rem;
  font-family: 'Nunito', sans-serif;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: transparent;
    color: #ff403a;
    border: 2px solid #ff403a;
    transition: 0.2s;
  }
`;
