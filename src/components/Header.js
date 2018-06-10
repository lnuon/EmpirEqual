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
    const { isLoggedIn } = this.props;
    console.log('isLoggedIn:', isLoggedIn);
    return (
          <HeaderContainer isLoggedIn={ isLoggedIn }>
            <HeaderLogo src={logo} />
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
  width: ${props => props.isLoggedIn ? '50%' : '100%'};
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
