import React, { Component } from 'react';
import styled from 'styled-components';
import EmpirEqualSelect from './EmpirEqualSelect';
import { withFormik } from 'formik';

const InnerForm = props => {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="firstName"
        name="firstName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName}
      />
      <input
        type="lastName"
        name="lastName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
      />
      <EmpirEqualSelect
        name="ethnicity"
        value={values.ethnicity}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.ethnicity}
        touched={touched.ethnicity}
        options={[
           { value: 'one', label: 'One' },
           { value: 'two', label: 'Two' },
         ]}
      />
      <EmpirEqualSelect
        name="orientation"
        value={values.orientation}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.orientation}
        touched={touched.orientation}
        options={[
           { value: 'one', label: 'One' },
           { value: 'two', label: 'Two' },
         ]}
      />
      <EmpirEqualSelect
        name="age"
        value={values.age}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.age}
        touched={touched.age}
        options={[
           { value: 'one', label: 'One' },
           { value: 'two', label: 'Two' },
         ]}
      />
      <EmpirEqualSelect
        name="gender"
        value={values.gender}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.gender}
        touched={touched.gender}
        options={[
           { value: 'one', label: 'One' },
           { value: 'two', label: 'Two' },
         ]}
      />
      <EmpirEqualSelect
        name="industry"
        value={values.industry}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.industry}
        touched={touched.industry}
        options={[
           { value: 'one', label: 'One' },
           { value: 'two', label: 'Two' },
         ]}
      />
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
)};

// Wrap our form with the using withFormik HoC
const SignUpForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ firstName: '', lastName: '', ethnicity: '', orientation: '', age: '', gender: '', industry: '', email: '', password: '' }),
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

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Log In</h1>
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;
