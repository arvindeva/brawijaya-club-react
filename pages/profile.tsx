import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const AboutPage: React.FunctionComponent = () => (
  <Layout title="Profile">
    <h1>Profile</h1>
    <p>This is the profile page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
