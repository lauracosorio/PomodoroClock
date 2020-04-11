import React from "react";

const Session = props => {
  return (
    <>
      <div className="session">
        <h3>Session Length</h3>
        <div className="session-buttons">
          <button className="sessionrest" onClick={props.counterDown}>-</button>
          <p>{props.session} mins</p>
          <button className="sessionsum" onClick={props.counterUp}>+</button>
        </div>
      </div>
    </>
  );
};

export default Session;
