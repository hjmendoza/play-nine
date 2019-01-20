import React from 'react';
// import { Range } from 'react-lodash';

const Numbers = (props) => {
  // 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="numbers">
      <div>
        {nums.map((number, i) => <span key={i}>{number}</span> )}
      </div>
    </div>
  );
}

export default Numbers;