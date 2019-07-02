import * as React from 'react';
import { Formik, Field } from 'formik';

import Layout from '../components/Layout';
import Link from 'next/link';
import { SignInComponent } from '../generated/apolloComponents';
import { ME_QUERY } from '../graphql/user/queries/me';
import { InputField } from '../components/InputField';

const SignInPage: React.FunctionComponent = () => (
  <Layout title="Sign In">
    <h1>Sign In</h1>
    <p>Please sign in</p>
    <SignInComponent refetchQueries={[{ query: ME_QUERY }]}>
      {signIn => (
        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          onSubmit={async values => {
            const { login, password } = values;
            const response = await signIn({
              variables: {
                login,
                password,
              },
            });
            console.log(response);
          }}
        >
          {({ values, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
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

export default SignInPage;
