import React from 'react';
import { Formik, Field } from 'formik';

import Layout from '../components/Layout';
import { InputField } from '../components/InputField';
import { SignUpComponent } from '../generated/apolloComponents';
import { ME_QUERY } from '../graphql/user/queries/me';
import Router from 'next/router';

const SignUpPage: React.FunctionComponent = () => {
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
            {({ values, handleSubmit }) => {
              return (
                <div>
                  <h1>Sign Up</h1>
                  <form onSubmit={handleSubmit}>
                    {error ? <p>{error.message}</p> : null}
                    {loading ? <p>Loading...</p> : null}
                    <div>
                      <Field
                        name="email"
                        placeholder="E-mail"
                        type="text"
                        component={InputField}
                        value={values.email}
                      />
                    </div>
                    <div>
                      <Field
                        name="username"
                        placeholder="Username"
                        type="text"
                        component={InputField}
                        value={values.username}
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
                      <button type="submit">Sign Up</button>
                    </div>
                  </form>
                </div>
              );
            }}
          </Formik>
        )}
      </SignUpComponent>
    </Layout>
  );
};

export default SignUpPage;
