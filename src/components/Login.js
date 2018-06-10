import React, { Component } from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import MainLogo from '../assests/EmpirEqual_Login.svg';
import { Link } from 'react-router-dom';

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <LoginFormHolder onSubmit={handleSubmit}>
    <LoginLabel>USERNAME</LoginLabel>
    <LoginField
      type="username"
      name="username"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.username}
    />
    {touched.email && errors.email && <div>{errors.email}</div>}
    <LoginLabel>PASSWORD</LoginLabel>
    <LoginField
      type="password"
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
    />
    {touched.password && errors.password && <div>{errors.password}</div>}
    <LoginButton type="submit" disabled={isSubmitting}>
      LOG IN
    </LoginButton>
    <NewAccountButton to="/signup">NEW ACCOUNT</NewAccountButton>
    <LoginLink to="/">FORGOT USERNAME</LoginLink>
    <LoginLink to="/">FORGOT PASSWORD</LoginLink>
  </LoginFormHolder>
);

// Wrap our form with the using withFormik HoC
const LoginForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ username: '', password: '' }),
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

class Login extends Component {
  render() {
    return (
      <LoginHolder>
        <LoginImage src={MainLogo}/>
        <LoginForm />
      </LoginHolder>
    );
  }
}

export default Login;

const LoginImage = styled.img`
  width: 60%;
  height: auto;
  margin-bottom: 50px;
`

const LoginLabel = styled.label`
  font-size: 16px;
  font-family: 'Myraid Pro', sans-serif;
  margin: 0;
  align-self: flex-start;
  margin-left: 2.5%;
  font-weight: 100;
`

const LoginHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const LoginFormHolder = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const LoginLink = styled.a`
  font-size: 16px;
  font-family: 'Myraid Pro', sans-serif;
  margin: 0;
  align-self: flex-end;
  margin-right: 2.5%;
  font-weight: 100;
  margin-bottom: 7px;
`

const LoginField = styled.input`
  width: 95%;
  margin: 2.5%;
  background-color: #eaeaea;
  border: 2px solid black;
  max-width: 400px;
  height: 55px;
  font-size: 26px;
`

const LoginButton = styled.button`
  background-color: #00a568
  height: 55px;
  width: 95%;
  margin: 2.5%;
  text-decoration: none;
  color: black;
  font-size: 26px;
`

const NewAccountButton = styled(Link)`
  background-color: #00b9f1
  height: 60px;
  width: 95%;
  margin: 2.5%;
  font-size: 26px;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'myraid pro', sans-serif;
`
