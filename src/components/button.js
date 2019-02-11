import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

const Button = (props) => {
  let button;
  switch(props.answerCorrect){
    case true:
      button =       
      <button className="btn-verify" onClick = {props.acceptAnswer}>
        <i className="fa-check"><FontAwesomeIcon icon={faCheckDouble} /></i>
      </button>
      break;

    case false:
      button =       
      <button className="btn-verify">
        <i className="fa-times"><FontAwesomeIcon icon={faTimes} /></i>
      </button>
      break;
    
    default:
      button =       
        <button className="btn" 
                onClick={props.checkAnswer}
                disabled={props.selectedNumbers.length === 0}>
        <i><FontAwesomeIcon icon={faCheck} /></i>
        </button>
      break;

  }
  return (
    <div  className="iconRow">
      {button}
      <button className="btn-redo" 
              onClick={props.redraw}
              disabled={props.redrawCount === 0}>
      <i className="faRedo"><FontAwesomeIcon icon={faRedo} /></i>{props.redrawCount}
      </button>
    </div>
  );
}

export default Button;