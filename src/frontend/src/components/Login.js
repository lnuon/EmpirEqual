import React, { Component } from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
    />
    {touched.email && errors.email && <div>{errors.email}</div>}
    <input
      type="password"
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
    />
    {touched.password && errors.password && <div>{errors.password}</div>}
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </form>
);

// Wrap our form with the using withFormik HoC
const LoginForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ email: '', password: '' }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },
  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    }
  ) => {
    //LoginToMyApp(values).then(
      //user => {
        //setSubmitting(false);
        // do whatevs...
        // props.updateUser(user)
      //},
      //errors => {
        //setSubmitting(false);
        // Maybe even transform your API's errors into the same shape as Formik's!
        //setErrors(transformMyApiErrors(errors));
      //}
    //);
  },
})(InnerForm);

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Log In</h1>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
