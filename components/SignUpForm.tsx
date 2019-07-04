import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { Formik, Field } from 'formik';

import Layout from './Layout';
import { SignUpComponent } from '../generated/apolloComponents';
import { ME_QUERY } from '../graphql/user/queries/me';
import { InputField } from './InputField';
import { Button } from './Button';

const StyledSignUpForm = styled.div`
  text-align: center;
  margin: 5rem 0;
`;

const SignUpForm = () => {
  const handleSignUp = async (values: any, mutation: any) => {
    const { username, email, password } = values;
    const response = await mutation({
      variables: {
        username,
        email,
        password,
      },
    });
    if (response.data.signUp.token) {
      Router.push('/');
    }
  };
  return (
    <Layout title="Sign Up">
      <SignUpComponent refetchQueries={[{ query: ME_QUERY }]}>
        {(signUp, { error, loading }) => (
          <Formik
            initialValues={{
              email: '',
              username: '',
              password: '',
            }}
            onSubmit={async values => handleSignUp(values, signUp)}
          >
            {({ handleSubmit }) => {
              return (
                <StyledSignUpForm>
                  <h1>Sign Up</h1>
                  <form onSubmit={handleSubmit}>
                    {error ? <p>{error.message}</p> : null}
                    {loading ? <p>Loading...</p> : null}
                    <div>
                      <Field
                        name="email"
                        label="Email"
                        placeholder="E-mail"
                        autoComplete="off"
                        type="text"
                        component={InputField}
                      />
                    </div>
                    <div>
                      <Field
                        name="username"
                        label="Username"
                        placeholder="Username"
                        autoComplete="off"
                        type="text"
                        component={InputField}
                      />
                    </div>
                    <div>
                      <Field
                        name="password"
                        label="Password"
                        placeholder="Password"
                        autoComplete="off"
                        type="password"
                        component={InputField}
                      />
                    </div>
                    <div>
                      <Button type="submit">Sign Up</Button>
                    </div>
                  </form>
                </StyledSignUpForm>
              );
            }}
          </Formik>
        )}
      </SignUpComponent>
    </Layout>
  );
};

export default SignUpForm;