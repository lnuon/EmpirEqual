import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import logo from '../assests/EmpirEqual_v2horiz.svg';
import { AppContext } from '../AppProvider.js';

class Header extends Component {
  constructor (props) {
      super(props)
      this.state = {
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
          <HeaderContainer isLoggedIn={this.props.isLoggedIn} >
            <HeaderLogo src={logo} />
            {this.props.isLoggedIn}
            <MainNav>
              <NavItem onClick={() => this.changeSelected('')} selected={this.state.selected} pathName="">
                <NavLink to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem onClick={() => this.changeSelected('about')} selected={this.state.selected} pathName="about">
                <NavLink to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem onClick={() => this.changeSelected('enter')} selected={this.state.selected} pathName="enter">
                <NavLink to="/enter">
                  Signup/Login
                </NavLink>
              </NavItem>
            </MainNav>
          </HeaderContainer>
      )
  }
}
export default withRouter(Header);

const HeaderContainer = styled.div`
  display: flex;
<<<<<<< HEAD
  width: ${props => props.isLoggedIn ? '50%' : '100%'};
=======
  width: 40%;
>>>>>>> 992b0365c265a29bd41eed0b748f9379c4695ea0
`

const MainNav = styled.ul`
  list-style: none;
  display: flex;
`

const NavItem = styled.li`
  > a {
    text-decoration: none;
  }
  margin: 1em;
`

const HeaderLogo = styled.img`
  width: 90%;

`
