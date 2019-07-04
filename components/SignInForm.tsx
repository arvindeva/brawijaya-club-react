import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Formik, Field } from 'formik';

import Layout from './Layout';
import { SignInComponent } from '../generated/apolloComponents';
import { ME_QUERY } from '../graphql/user/queries/me';
import { InputField } from './InputField';

const SignInForm = () => {
  const handleSignIn = async (values: any, mutation: any) => {
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
            initialValues={{
              login: '',
              password: '',
            }}
            onSubmit={values => handleSignIn(values, signIn)}
          >
            {({ values, handleSubmit }) => {
              return (
                <div>
                  <h1>Sign In</h1>
                  <form onSubmit={handleSubmit}>
                    {loading ? <p>loading</p> : null}
                    {error ? <p>{error.message}</p> : null}
                    <div>
                      <Field
                        name="login"
                        placeholder="Username or Email"
                        type="text"
                        component={InputField}
                        value={values.login}
                      />
                    </div>
                    <div>
                      <Field
                        name="password"
                        placeholder="Password"
                        type="password"
                        component={InputField}
                        value={values.password}
                      />
                    </div>
                    <div>
                      <button type="submit">Sign In</button>
                    </div>
                  </form>
                </div>
              );
            }}
          </Formik>
        )}
      </SignInComponent>
      <p>
        Don't have an account?{' '}
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </p>
    </Layout>
  );
};

export default SignInForm;
