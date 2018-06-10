import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import HomeLogo from '../assests/EMP_User.svg';
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
    return (
      <AppContext.Consumer>
        {(isLoggedIn) => (
          <HeaderContainer isLoggedIn={ isLoggedIn }>
            <MainNav>
              <NavItem onClick={console.log('not today')} selected={this.state.selected} pathName="">
                <NavLink to="/">
                </NavLink>
              </NavItem>
              <NavItem className="right" onClick={() => this.changeSelected('login')} selected={this.state.selected} pathName="login">
                <NavLink to="/login">
                  <ExitButton>
                    <HeaderImage src={HomeLogo}></HeaderImage>
                  </ExitButton>
                </NavLink>
              </NavItem>
            </MainNav>
          </HeaderContainer>
        )}
      </AppContext.Consumer>
      )
  }
}
export default withRouter(Header);

const HeaderContainer = styled.div`
  width: '100%';
`

const MainNav = styled.div`
  list-style: none;
  display: flex;

  > .right {
    text-align: right;
  }
`

const NavItem = styled.div`
  > a {
    text-decoration: none;
  }
  width: 50%;
  margin: 1em;

`

const ExitButton = styled.div`
  font-weight: bold;
  font-size: 30px;
  font-family: "Myraid Pro", sans-serif;
  margin-right: 20%;

`

const HeaderImage = styled.img`
  width: 10%;
  max-width: 50px;
  min-width: 20px;
`
