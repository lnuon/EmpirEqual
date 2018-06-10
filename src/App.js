import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import Drilldown from 'react-router-drilldown';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';
import styled from 'styled-components';
import createBrowserHistory from 'history/createBrowserHistory';

const AppContext = React.createContext();
const history = createBrowserHistory()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    }
    this.updateValue = this.updateValue.bind(this);
  }
  updateValue = (key, val) => {
     this.setState({[key]: val});
  }
  render() {
    return (
      <AppContext.Provider value={{
                                state: this.state,
                                updateValue: this.updateValue}}>
        <BodyHolder>
            <Router
            history={history}
            >
              <div>
                <Header isLoggedIn={(isLoggedIn) => isLoggedIn} page=""/>
                <Drilldown>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/signup" component={SignUp}/>
                  <Route exact path="/login" component={Login}/>
                </Drilldown>
              </div>
            </Router>
        </BodyHolder>
      </AppContext.Provider>
    );
  }
}

export default App;

const BodyHolder = styled.div`
  height: 100%;
margin-bottom:100px;
`
