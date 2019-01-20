import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Stars = (props) => {
  return (
    <div className="iconRow">
      <i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i>
      <i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i>
      <i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i>
      <i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i>
    </div>
  );
}

export default Stars