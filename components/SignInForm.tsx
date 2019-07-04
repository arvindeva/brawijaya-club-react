import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Formik, Field } from 'formik';
import { string, object } from 'yup';

import Layout from './Layout';
import { SignInComponent } from '../generated/apolloComponents';
import { ME_QUERY } from '../graphql/user/queries/me';
import { InputField } from './InputField';

export interface FormValues {
  login: string;
  password: string;
}

const initialValues: FormValues = {
  login: '',
  password: '',
};

const SignInForm: React.FC = () => {
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
            initialValues={initialValues}
            onSubmit={(values: FormValues) => handleSignIn(values, signIn)}
            validationSchema={object().shape({
              login: string().required('Field is required.'),
              password: string().required('Password is required'),
            })}
          >
            {({ handleSubmit }) => {
              return (
                <div>
                  <h1>Sign In</h1>
                  <form onSubmit={handleSubmit}>
                    {loading ? <p>loading</p> : null}
                    {error ? <p>{error.message}</p> : null}
                    <div>
                      <Field name="login" type="text" component={InputField} />
                    </div>
                    <div>
                      <Field
                        name="password"
                        type="password"
                        component={InputField}
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
