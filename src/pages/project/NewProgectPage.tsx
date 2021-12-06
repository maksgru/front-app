import { Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';

const initialValues = {
  name: ''
};

const NewProgectPage: React.FC = () => {
  const submitProject = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <StyledNewProject>
      <div className="form-section">
        <Formik
          initialValues={initialValues}
          // validationSchema={validation}
          onSubmit={submitProject}
        >
          {({ values, handleSubmit, handleChange, errors, touched }) => (
            <Form id="login-form" onSubmit={handleSubmit}>
              <TextField
                id="name"
                name="name"
                fullWidth
                classes={{ root: 'auth-input' }}
                value={values.name}
                onChange={handleChange}
                error={Boolean(touched.name && errors.name)}
                label="name"
                variant="outlined"
                color="primary"
                size="small"
                placeholder="Enter project name"
              />
              <div className="auth-footer">
                <Button
                  form="login-form"
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="small"
                  classes={{ root: 'new-project-btn' }}
                >
                Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </StyledNewProject>
  );
};

const StyledNewProject = styled.div`
  padding: 0 20px;
  .form-section {
    max-width: 400px;
  }
  .new-project-btn {
    margin-top: 30px;
  }
`;

export default NewProgectPage;
