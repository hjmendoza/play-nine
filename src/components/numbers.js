import React from 'react';
// import { Range } from 'react-lodash';

const Numbers = (props) => {
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberClassName = (number) => {
  if(props.selectedNumbers.indexOf(number) >= 0){
    return 'selected';
  }
}
  return (
    <div className="numbers">
      <div>
        {nums.map((number, i) => 
        <span key={i} className={numberClassName(number)}>{number}</span> 
        )}
      </div>
    </div>
  );
}

export default Numbers;