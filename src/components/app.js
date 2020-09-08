import React, { Component } from "react";

import Home from "./home";
import Clock from "./clock";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>TODO app :D</h1>
        <Clock />
        <Home />
      </div>
    );
  }
}
