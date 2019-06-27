import * as React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>{' '}
    |{' '}
    <Link href="/about">
      <a>About</a>
    </Link>{' '}
    |{' '}
    <Link href="/initial-props">
      <a>With Initial Props</a>
    </Link>{' '}
    |{' '}
    <Link href="/signup">
      <a>Sign Up</a>
    </Link>{' '}
    |{' '}
    <Link href="/signin">
      <a>Sign In</a>
    </Link>
  </nav>
);

export default Nav;
