import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Stars = (props) => {
  const starNum = 1 + Math.floor(Math.random() * 9);

  let stars = [];
  for (let i=0; i < starNum; i++){
    stars.push(<i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i>);
  }
   
  return (
    <div className="iconRow">
      {stars}
    </div>
  );
}

export default Stars