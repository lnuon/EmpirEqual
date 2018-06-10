import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import Drilldown from 'react-router-drilldown';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Enter from './components/Enter.js';
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';
import styled, { injectGlobal } from 'styled-components';
import createBrowserHistory from 'history/createBrowserHistory';
import globalStyles from './styles/global';

const { Provider } = React.createContext(false);

const history = createBrowserHistory();

injectGlobal`${globalStyles}`;

class App extends Component {

  updateValue = (key, val) => {
     this.setState({[key]: val});
  }

  render() {
    return (
      <Provider value={true}>
        <div>
            <Router
            history={history}
            >
              {(isLoggedIn) => (
                <div>
                  <Header isLoggedIn={isLoggedIn} page=""/>
                  <Drilldown>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/enter" component={Enter}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/login" component={Login}/>
                  </Drilldown>
                </div>
              )}
            </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
