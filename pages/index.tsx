import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Leaderboards from '../components/Leaderboards';

export const Button = styled.button`
  color: white;
  background: #ff403a;
  border: none;
  border-radius: 0.4rem;
  font-family: 'Nunito', sans-serif;
  padding: 1rem;
  font-size: 1rem;
  margin: 1rem;
  cursor: pointer;
`;

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Leaderboards />
    </Layout>
  );
};

export default IndexPage;
