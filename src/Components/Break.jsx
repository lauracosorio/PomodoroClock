import React from "react";

const Break = props => {
  return (
    <>
      <div className="break">
        <h3>Break length</h3>
        <div className="break-buttons">
          <button className="breakrest" onClick={props.counterDown}>
            -
          </button>
          <p>{props.break} mins</p>
          <button className="breaksum" onClick={props.counterUp}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Break;
