import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { MeComponent } from '../generated/apolloComponents';

const AboutPage: React.FunctionComponent = () => (
  <Layout title="Profile">
    <MeComponent>
      {({ data }) => (
        <div>
          <h1>Profile</h1>
          <h2>Hi, {data && data.me && data.me.username}</h2>
          <p>
            <Link href="/">
              <a>Go home</a>
            </Link>
          </p>
        </div>
      )}
    </MeComponent>
  </Layout>
);

export default AboutPage;
