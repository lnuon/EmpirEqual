import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import Drilldown from 'react-router-drilldown';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Enter from './components/Enter.js';
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
        <div>
            <Router
            history={history}
            >
              <AppContext.Consumer>
                {(isLoggedIn) => (
                  <div>
                    <Header isLoggedIn={(isLoggedIn) => isLoggedIn} page=""/>
                    <Drilldown>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/about" component={About}/>
                      <Route exact path="/enter" component={Enter}/>
                      <Route exact path="/signup" component={SignUp}/>
                      <Route exact path="/login" component={Login}/>
                    </Drilldown>
                  </div>
                )}
              </AppContext.Consumer>
            </Router>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
