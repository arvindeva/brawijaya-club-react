import React from 'react';
import Link from 'next/link';

const PleaseSignIn = () => (
  <div>
    <h2>
      Please{' '}
      <Link href="/signin">
        <a>signin</a>
      </Link>{' '}
      ...
    </h2>
  </div>
);

export default PleaseSignIn;
