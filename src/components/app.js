import React, { Component } from 'react';

import Home from './home';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>TODO app :D</h1>
        <Home/>
      </div>
    );
  }
}