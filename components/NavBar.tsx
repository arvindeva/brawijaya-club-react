import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { MeComponent, SignOutComponent } from '../generated/apolloComponents';
import { ME_QUERY } from '../graphql/user/queries/me';
import { Button } from '../pages/index';
import Router from 'next/router';

const StyledNavBar = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: #ff403a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  .logo {
    font-size: 2.5rem;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 2px;
  }

  .nav-links {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2rem;
    align-items: center;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
`;

const NavBar = () => (
  <nav>
    <MeComponent>
      {({ data }) => {
        return (
          <StyledNavBar>
            <div>
              <Link href="/">
                <a className="logo">BRAWIJAYA CLUB</a>
              </Link>
            </div>
            <div className="nav-links">
              <Link href="/about">
                <a>About</a>
              </Link>
              {/* <Link href="/initial-props">
                <a>With Initial Props</a>
              </Link> */}
              {data && data.me ? (
                <div>
                  <Link href="/profile">
                    <a>{data.me.username}</a>
                  </Link>
                  <SignOutComponent refetchQueries={[{ query: ME_QUERY }]}>
                    {signOut => (
                      <Button
                        onClick={async () => {
                          const response = await signOut();
                          console.log(response);
                          if (response) {
                            Router.push('/');
                          }
                        }}
                      >
                        Sign Out
                      </Button>
                    )}
                  </SignOutComponent>
                </div>
              ) : (
                <Link href="/signin">
                  <a>Sign In</a>
                </Link>
              )}
            </div>
          </StyledNavBar>
        );
      }}
    </MeComponent>
  </nav>
);

export default NavBar;
