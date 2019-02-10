import React from 'react';

const Answer = (props) => {
  return (
    <div  className="iconRow">
      {props.selectedNumbers.map((number, i) => 
        <span key={i}>{number}</span>
        )}
    </div>
  );
}

export default Answer