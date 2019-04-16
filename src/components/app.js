import React, { Component } from 'react';
import moment from 'moment';
import {BrowserRouter as Router,
        Switch,
        Route
} from 'react-router-dom';

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContiner from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

      <Router>
        <div>
          <NavigationContiner />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={About} />
          </Switch>
            </div>
      </Router>

        <h2>React Redux Router</h2>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <PortfolioContainer />
      </div>
    );
  }
}
