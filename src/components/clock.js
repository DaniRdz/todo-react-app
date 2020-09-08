import React, { Component } from "react";
import moment from "moment";

export default class Clock extends Component {
  constructor() {
    super();

    this.state = {
      dateNow: new Date(),
    };
  }

  componentDidMount() {
    this.liveTime = setInterval(() => {
      this.setState({
        dateNow: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
      clearInterval(this.liveTime);
  }

  render() {
    return (
      <div className="clock-conteiner">
        {moment(this.state.dateNow).format("MMMM Do YYYY, h:mm:ss a")}
      </div>
    );
  }
}
