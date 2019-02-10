import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Stars = (props) => {

  let stars = [];
  for (let i=0; i < props.randomStarNum; i++){
    stars.push(<i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i>);
  }
   
  return (
    <div className="iconRow">
      {stars}
    </div>
  );
}

export default Stars