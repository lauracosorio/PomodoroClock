import React, { Component } from "react";
import Break from "../Components/Break.jsx";
import Session from "../Components/Session.jsx";
import Timer from "../Components/Timer.jsx";
import Controls from "../Components/Controls.jsx";

class Pomodoro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      break: 5,
      session: 25,
      cycle: "session",
      currentTime: 25 * 60 * 1000,
      active: false
      //   touched: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.state.currentTime === 0 && this.state.cycle === "session") {
      this.setState({
        currentTime: this.state.break * 60 * 1000,
        cycle: "break"
      });
    }
    if (this.state.currentTime === 0 && this.state.cycle === "break") {
      this.setState({
        currentTime: this.state.session * 60 * 1000,
        cycle: "session"
      });
    }
  }

  counterDownBreak = inc => {
    if (this.state.break === 1 && inc) return;
    this.setState({
      break: this.state.break - 1
    });
  };

  counterUpBreak = inc => {
    if (this.state.break === 60 && inc) return;
    this.setState({
      break: this.state.break + 1
    });
  };

  counterDownSession = inc => {
    if (this.state.session === 1 && inc) return;
    this.setState({
      session: this.state.session - 1
    });
  };

  counterUpSession = inc => {
    if (this.state.session === 60 && inc) return;
    this.setState({
      session: this.state.session + 1
    });
  };

  reset = () => {
    this.setState({
      break: 5,
      session: 25,
      cycle: "session",
      currentTime: 25 * 60 * 1000,
      active: false,
      touched: false
    });
    clearInterval(this.pomodoro);
  };

  startStop = () => {
    if (this.state.active) {
      clearInterval(this.pomodoro);

      this.setState({ active: false });
    } else {
      if (this.state.touched) {
        this.pomodoro = setInterval(
          () => this.setState({ currentTime: this.state.currentTime - 1000 }),
          1000
        );
        this.setState({ active: true });
      } else {
        this.setState(
          {
            currentTime: this.state.session * 60 * 1000,
            touched: true,
            active: true
          },
          () =>
            (this.pomodoro = setInterval(
              () =>
                this.setState({ currentTime: this.state.currentTime - 1000 }),
              1000
            ))
        );
      }
    }
  };

  render() {
    return (
      <div className="container">
        <h1>POMODORO CLOCK</h1>
        <div className="break-session">
        <Break
          break={this.state.break}
          counterDown={this.counterDownBreak}
          counterUp={this.counterUpBreak}
        />
        <Session
          session={this.state.session}
          counterDown={this.counterDownSession}
          counterUp={this.counterUpSession}
        />
        </div>
        
        <Timer timerMinute={this.state.currentTime} cycle={this.state.cycle} />
        <Controls
          active={this.state.active}
          reset={this.reset}
          startStop={this.startStop}
        />
      </div>
    );
  }
}

export default Pomodoro;
