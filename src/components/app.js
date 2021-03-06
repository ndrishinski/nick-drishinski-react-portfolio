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
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

      <Router>
        <div>
          <h2>React Redux Router</h2>
          <div>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
          </div>
          <NavigationContiner />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/portfolio/:slug" component={PortfolioDetail} />
          </Switch>
            </div>
      </Router>
      </div>
    );
  }
}
