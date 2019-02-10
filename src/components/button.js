import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Button = (props) => {
  let button;
  switch(props.answerCorrect){
    case true:
    button =       
    <button className="btn-success"
            onClick = {props.acceptAnswer}>
    <i className="fa-check"><FontAwesomeIcon icon={faCheck} /></i>
    </button>
      break;

    case false:
    button =       
    <button className="btn-danger">
    <i className="fa-times"><FontAwesomeIcon icon={faTimes} /></i>
    </button>
      break;
    
    default:
      button =       
        <button className="btn" 
                onClick={props.checkAnswer}
                disabled={props.selectedNumbers.length === 0}>
        = 
        </button>
      break;

  }
  return (
    <div  className="iconRow">
      {button}
    </div>
  );
}

export default Button;