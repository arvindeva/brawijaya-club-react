import React from 'react';
import { Formik, Field } from 'formik';

import Layout from '../components/Layout';
import { InputField } from '../components/InputField';
import { SignUpComponent } from '../generated/apolloComponents';
import { ME_QUERY } from '../graphql/user/queries/me';

const SignUpPage: React.FunctionComponent = () => (
  <Layout title="Sign Up">
    <SignUpComponent refetchQueries={[{ query: ME_QUERY }]}>
      {signUp => (
        <Formik
          onSubmit={async data => {
            const { username, email, password } = data;
            const response = await signUp({
              variables: {
                username,
                email,
                password,
              },
            });

            console.log(response);
          }}
          initialValues={{
            email: '',
            username: '',
            password: '',
          }}
        >
          {({ values, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
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
                  <button type="submit">Submit</button>
                </div>
              </form>
            );
          }}
        </Formik>
      )}
    </SignUpComponent>
  </Layout>
);

export default SignUpPage;
