import React from 'react';

const DoneFrame = (props) => {
  return(
    <div className="done">
      <h2>{props.doneStatus}</h2>
      <button className="btn-play-again" onClick={props.resetGame}>Play Again</button>
    </div>
  );
}

export default DoneFrame;

