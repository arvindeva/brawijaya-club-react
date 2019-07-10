import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import NavBar from './NavBar';

type Props = {
  title?: string;
};

const Main = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  min-height: 100vh;
`;

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <NavBar />
    </header>
    <Main>{children}</Main>
    <footer>
      <hr />
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
    </footer>
  </div>
);

export default Layout;
