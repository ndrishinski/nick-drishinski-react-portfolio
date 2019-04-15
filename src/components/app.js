import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContiner from './navigation/navigation-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
      <NavigationContiner />

        <h2>React Redux Router</h2>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <PortfolioContainer />
      </div>
    );
  }
}
