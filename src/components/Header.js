import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";


class Header extends Component {
  constructor (props) {
      super(props)
      this.state ={
        selected: ""
      }
      this.changeSelected = this.changeSelected.bind(this);
  }
  componentDidMount() {
    this.changeSelected(this.props.history.location.pathname.split('/')[1])
  }

  changeSelected(selected) {
    this.setState({ selected: selected });
    this.props.history.push(selected)
  }

  render() {
    return (
        <div>
          <ul>
            <li onClick={() => this.changeSelected('')} selected={this.state.selected} pathName="">
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li onClick={() => this.changeSelected('about')} selected={this.state.selected} pathName="about">
              <NavLink to="/about">
                About
              </NavLink>
            </li>
            <li onClick={() => this.changeSelected('enter')} selected={this.state.selected} pathName="enter">
              <NavLink to="/enter">
                Signup/Login
              </NavLink>
            </li>
          </ul>
        </div>
    )
  }
}
export default withRouter(Header);
