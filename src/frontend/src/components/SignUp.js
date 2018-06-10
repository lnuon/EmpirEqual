import React, { Component } from 'react';
import styled from 'styled-components';
import { desktop } from '../styles';
import EmpirEqualSelect from './EmpirEqualSelect';
import { withFormik } from 'formik';
import { Link } from 'react-router-dom';
import { EnterHolder, EnterButton, EnterFormHolder, EnterInput, EnterLabel } from '../styles/EnterStyled.js';

const InnerForm = props => {
  const {
    values,
    touched,
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
    <EnterFormHolder onSubmit={handleSubmit}>
      <EnterLabel>FIRST NAME</EnterLabel>
      <EnterInput
        type="firstName"
        name="firstName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName}
      />
      <EnterLabel>LAST NAME</EnterLabel>
      <EnterInput
        type="lastName"
        name="lastName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
      />
      <EnterLabel>ETHNICITY</EnterLabel>
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
      <EnterLabel>ORIENTATION</EnterLabel>
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
      <EnterLabel>AGE</EnterLabel>
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
      <EnterLabel>GENDER</EnterLabel>
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
      <EnterLabel>INDUSTRY</EnterLabel>
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
      <EnterLabel>EMAIL</EnterLabel>
      <EnterInput
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      <EnterLabel>PASSWORD</EnterLabel>
      <EnterInput
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      <EnterButton type="submit" disabled={isSubmitting}>
        Create Account
      </EnterButton>
    </EnterFormHolder>
)};

// Wrap our form with the using withFormik HoC
const SignUpForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ firstName: '', lastName: '', ethnicity: '', orientation: '', age: '', gender: '', industry: '', email: '', password: '' }),
  // Add a custom validation function (this can be async too!)
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
      <EnterHolder>
        <ExitButton to="/login">X</ExitButton>
        <h1>Sign Up</h1>
        <SignUpForm />
      </EnterHolder>
    );
  }
}

export default SignUp;


const ExitButton = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  width: 100%;
  padding-right: 20%;
  text-align: right;
  padding-top: 2%;
  font-family: "Myraid Pro", sans-serif;
`
