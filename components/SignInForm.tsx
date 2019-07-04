import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import { Formik, Field } from 'formik';
import { string, object } from 'yup';

import Layout from './Layout';
import { SignInComponent } from '../generated/apolloComponents';
import { ME_QUERY } from '../graphql/user/queries/me';
import { InputField } from './InputField';
import { Button } from './Button';

const StyledSignInForm = styled.div`
  text-align: center;
`;

export interface FormValues {
  login: string;
  password: string;
}

const initialValues: FormValues = {
  login: '',
  password: '',
};

const SignInForm: React.FC = () => {
  const handleSignIn = async (values: FormValues, mutation: Function) => {
    const { login, password } = values;
    const response = await mutation({
      variables: {
        login,
        password,
      },
    });
    if (response.data.signIn.token) {
      Router.push('/');
    }
  };

  return (
    <Layout title="Sign In">
      <SignInComponent refetchQueries={[{ query: ME_QUERY }]}>
        {(signIn, { error, loading }) => (
          <Formik
            initialValues={initialValues}
            onSubmit={(values: FormValues) => handleSignIn(values, signIn)}
            validationSchema={object().shape({
              login: string().required('Field is required.'),
              password: string().required('Password is required'),
            })}
          >
            {({ handleSubmit }) => {
              return (
                <StyledSignInForm>
                  <h1>Sign In</h1>
                  <form onSubmit={handleSubmit}>
                    {loading ? <p>loading</p> : null}
                    {error ? <p>{error.message}</p> : null}
                    <div>
                      <Field
                        name="login"
                        label="Login"
                        placeholder="Email or username"
                        type="text"
                        autoComplete="off"
                        component={InputField}
                      />
                      <Field
                        name="password"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        component={InputField}
                      />
                    </div>
                    <div>
                      <Button type="submit">Sign In</Button>
                    </div>
                  </form>
                  <p>
                    Don't have an account?{' '}
                    <Link href="/signup">
                      <a>Sign Up</a>
                    </Link>
                  </p>
                </StyledSignInForm>
              );
            }}
          </Formik>
        )}
      </SignInComponent>
    </Layout>
  );
};

export default SignInForm;
