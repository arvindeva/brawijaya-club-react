import * as React from 'react';
import Layout from '../components/Layout';
import Leaderboards from '../components/Leaderboards';

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Leaderboards />
    </Layout>
  );
};

export default IndexPage;
