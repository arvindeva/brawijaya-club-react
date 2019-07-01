import React from 'react';
import { Formik, Field } from 'formik';

import Layout from '../components/Layout';
import { InputField } from '../components/InputField';

const SignUpPage: React.FunctionComponent = () => (
  <Layout title="Sign Up">
    <Formik
      onSubmit={() => {}}
      initialValues={{
        email: '',
        username: '',
        password: '',
      }}
    >
      {({ values, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email" component={InputField} />
        </form>
      )}
    </Formik>
  </Layout>
);

export default SignUpPage;
