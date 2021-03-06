import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import {
  object as yupObject,
  string as yupString
} from 'yup';

import Spinner from 'ui/components/Spinner';
import { useStoreDispatch, useStoreSelector } from 'store/hooks';
import { selectProfile, signIn } from 'store/reducers/profile';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { SigninDataType } from 'api/auth';

const initialValues: SigninDataType = {
  email: '',
  password: ''
};

const validation = yupObject().shape({
  email: yupString().required('Enter you email'),
  password: yupString().required('Enter your password')
});

const Auth: React.FC = () => {
  const profile = useStoreSelector(selectProfile);
  const history = useHistory();
  const dispatch = useStoreDispatch();

  const submitForm = async (values: typeof initialValues) => {
    await dispatch(signIn(values));
  };

  useEffect(() => {
    if (profile) {
      history.push('/');
    }
  }, [profile]);

  return (
    <StyledAuth>
      <div className="logo">
        <Spinner />
      </div>
      <h2 className="auth-title">Welcome back!</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={submitForm}
      >
        {({ values, handleSubmit, handleChange, errors, touched }) => (
          <form id="login-form" onSubmit={handleSubmit}>
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
          </form>
        )}
      </Formik>
    </StyledAuth>
  );
};

const StyledAuth = styled.div`    
  margin: 0 auto;
  max-width: 400px;
  .auth-input {
    margin: 20px 0;
    z-index: 0;
  }
  .auth-title {
    text-align: center;
    font-family: 'Spectral', serif;
  }
  .auth-footer {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .sign-in-btn {
   margin-top: 40px;
   cursor: pointer;
  }
  .logo {
    display: flex;
    justify-content: center;
  }
`;

export default Auth;
