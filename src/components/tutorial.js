import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const Tutorial = (props) => {
  return(
    <div>
      <button className="fa-question" onClick={props.showTutorial}>
      <i ><FontAwesomeIcon icon={faQuestionCircle} /></i>
      </button>
      { props.showingTutorial ? (
        <div className="tutorial">
          <p><strong>Objective:</strong> Given a random number of stars, use a range of numbers from 1-9 to sum up to the total number of stars. Use up every number, without repeating, before you run out of attempts!</p>
          <ul>
            <strong>How to Play</strong>
            <li>Click on green numbers to sum up to total stars displayed.</li>
            <li>Click the check button to verify your answer.</li>
            <li>If correct, a double check mark will appear. Click to submit your final answer!</li>
            <li>If incorrect, an X will appear. Select a different set of numbers and try again!</li>
            <li>You can only use each number once.</li>
            <li>You may 'redraw', request a different random number of stars, up to 5 times.</li>
          </ul>
      </div>)
      : null }
    </div>
  )
}

export default Tutorial;