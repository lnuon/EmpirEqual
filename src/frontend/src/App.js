import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import Drilldown from 'react-router-drilldown';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import Feed from './components/Feed.js';
import Meetings from './components/Meetings.js';
import MeetingQs from './components/MeetingQuestions.js';
import ThankYou from './components/ThankYou.js';
import Profile from './components/Profile.js';
import SaySomething from './components/Profile.js';
import styled, { injectGlobal } from 'styled-components';
import createBrowserHistory from 'history/createBrowserHistory';
import globalStyles from './styles/global';

const { Provider, Consumer } = React.createContext(false);

const history = createBrowserHistory();

injectGlobal`${globalStyles}`;

class App extends Component {
  updateValue = (key, val) => {
     this.setState({[key]: val});
  }

  render() {
    return (
      <BodyHolder>
          <Router
          history={history}>
            <div>
              <Header page=""/>
              <Drilldown>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/interactions" component={Home}/>
                <Route exact path="/meetings" component={Meetings}/>
                <Route exact path="/meetingQs" component={MeetingQs}/>
                <Route exact path="/thankyou" component={ThankYou}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/say-something" component={Home}/>
                <Route exact path="/support" component={Home}/>
                <Route exact path="/feed" component={Feed}/>
              </Drilldown>
            </div>
          </Router>
      </BodyHolder>
    );
  }
}

export default App;

const BodyHolder = styled.div`
  height: 100%;
  margin-bottom:100px;
`
