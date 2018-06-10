import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <small>or </small>
        <Link to='/login'>
          Log In
        </Link>
      </div>
    );
  }
}

export default Home;
