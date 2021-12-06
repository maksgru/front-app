import { Button, TextField } from '@mui/material';
import { SignupDataType } from 'api/auth';
import { Form, Formik } from 'formik';
import React from 'react';
import { useStoreDispatch } from 'store/hooks';
import { signUp } from 'store/reducers/profile';
import styled from 'styled-components';
import { object as yupObject, string as yupString } from 'yup';

const initialValues: SignupDataType = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};
const validation = yupObject().shape({
  email: yupString().required('Enter you email'),
  password: yupString().required('Enter your password')
});

const SignupPage: React.FC = () => {
  const dispatch = useStoreDispatch();
  const submitForm = async (values: typeof initialValues) => {
    await dispatch(signUp(values));
  };
  return (
    <StyledSignup>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={submitForm}
      >
        {({ values, handleSubmit, handleChange, errors, touched }) => (
          <Form id="login-form" onSubmit={handleSubmit}>
            <TextField
              id="email"
              name="email"
              fullWidth
              classes={{ root: 'auth-input' }}
              value={values.email}
              onChange={handleChange}
              error={Boolean(touched.email && errors.email)}
              label="email"
              variant="outlined"
              color="primary"
              placeholder="Enter your email"
            />
            <TextField
              id="password"
              name="password"
              type="password"
              fullWidth
              classes={{ root: 'auth-input' }}
              value={values.password}
              onChange={handleChange}
              error={Boolean(touched.password && errors.password)}
              variant="outlined"
              label="password"
              placeholder="Enter your password"
            />
            <TextField
              id="password-confirm"
              name="password confirm"
              type="password"
              fullWidth
              classes={{ root: 'auth-input' }}
              value={values.password}
              onChange={handleChange}
              error={Boolean(touched.password && errors.password)}
              variant="outlined"
              label="password confirm"
              placeholder="Enter your password again"
            />
            <div className="auth-footer">
              <Button
                form="login-form"
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                classes={{ root: 'sign-in-btn' }}
              >
                Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </StyledSignup>
  );
};

const StyledSignup = styled.div`
`;

export default SignupPage;
