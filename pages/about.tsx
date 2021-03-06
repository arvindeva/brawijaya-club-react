import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About">
    <h1>About</h1>
    <p>Brawijaya leaderboards</p>
    <p>Made with: React, TypeScript, GraphQL</p>
    <p>
      View source on{' '}
      <a
        href="https://github.com/arvindeva/brawijaya-club-react"
        target="blank"
      >
        github
      </a>
    </p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
