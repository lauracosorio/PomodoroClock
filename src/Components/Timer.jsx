import React from "react";
import { Component } from "react";
import moment from "moment";
import "moment-timezone";

class Timer extends Component {
  render() {
    return (
      <>
        <div className="timer">
          <h4>{this.props.cycle === "session" ? "Session" : "Break"}</h4>
          <span>{moment(this.props.timerMinute).format("mm:ss")}</span>
        </div>
      </>
    );
  }
}

export default Timer;
