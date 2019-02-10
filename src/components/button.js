import React from 'react';

const Button = (props) => {
  return (
    <div  className="iconRow">
      <button className="btn" disabled={props.selectedNumbers.length === 0}>=</button>
    </div>
  );
}

export default Button;