import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class EmpriEqualSelect extends React.Component {
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange(this.props.name, value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur(this.props.name, true);
  };

  render() {
    return (
      <StyledSelect>
        <Select
          options={this.props.options}
          multi={true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        {!!this.props.error &&
        this.props.touched && (
          <div style={{ color: 'red', marginTop: '.5rem' }}>
            {this.props.error}
          </div>
        )}
      </StyledSelect>
    );
  }
}

const StyledSelect = styled.div`
  margin: 2.5%;
  width: 95%;
  max-width: 400px;
  height: 55px;
  font-size: 26px;
`
