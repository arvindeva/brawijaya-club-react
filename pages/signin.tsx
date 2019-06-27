import * as React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const SignInPage: React.FunctionComponent = () => (
  <Layout title="Sign In">
    <h1>Sign In</h1>
    <p>Please sign in</p>
    <p>
      Don't have an account?{' '}
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
    </p>
  </Layout>
);

export default SignInPage;
