import React from "react";

const Controls = ({ active, reset, startStop }) => {
  return (
    <>
      <div className="controls">
        <button className="start-button" onClick={startStop}>
          {" "}
          {active ? <span>Stop</span> : <span>Start</span>}{" "}
        </button>
        <button className="reset-button" onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Controls;
