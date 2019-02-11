import React, { Component } from 'react';
import '../styles/game.css';
import Stars from './stars.js';
import Button from './button.js';
import Answer from './answer.js';
import Numbers from './numbers.js';
import DoneFrame from './doneframe.js';

var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};

class Game extends Component {

  static randomNumber = () => 1 + Math.floor(Math.random() * 9)
  static initialState = () => ({
      selectedNumbers: [],
      randomStarNum: Game.randomNumber(),
      usedNumbers: [],
      answerCorrect: null,
      redrawCount: 5,
      doneStatus: null,
  });

	state = Game.initialState();

  resetGame = () => this.setState(Game.initialState());

  selectNumber = (clickedNumber) => {
    if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return ;}
    if(this.state.usedNumbers.indexOf(clickedNumber) >= 0) { return ;}
    this.setState(prevState => ({
      answerCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }))
  }

  checkAnswer = () => {
    this.setState(prevState => ({
      answerCorrect: prevState.randomStarNum === 
        prevState.selectedNumbers.reduce((acc, n) => acc + n , 0)
    }));
  };

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerCorrect: null,
      randomStarNum: Game.randomNumber(),
    }), this.updateDoneStatus)
  }


  redraw = () => {
    if(this.state.redrawCount === 0){ return; }
    this.setState(prevState => ({
      randomStarNum: Game.randomNumber(),
      answerCorrect: null,
      selectedNumbers: [],
      redrawCount: prevState.redrawCount - 1 
    }), this.updateDoneStatus);
  }

  possibleSolutions = ({randomStarNum, usedNumbers}) => {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const possibleNumbers = nums.filter(number => usedNumbers.indexOf(number) === -1); 

    return possibleCombinationSum(possibleNumbers, randomStarNum);
  }

  updateDoneStatus = () => {
    this.setState(prevState => {
      if(prevState.usedNumbers.length === 9) {
        return {doneStatus: 'Done. You win!'};
      }
      if(prevState.redrawCount === 0 && !this.possibleSolutions(prevState)) {
        return {doneStatus: 'Game Over!'}
      }
    });
  }

  render(){
    const { 
      selectedNumbers, 
      randomStarNum, 
      answerCorrect,
      usedNumbers,
      redrawCount,
      doneStatus
    } = this.state;

    return(
      <div className="container">
        <div className="header">
          <h1>Play Nine</h1>
          <hr />
        </div>
        <div>
          <Stars randomStarNum = {randomStarNum}/>
          <Button selectedNumbers = {selectedNumbers}
                  redrawCount = {redrawCount}
                  checkAnswer = {this.checkAnswer}
                  acceptAnswer = {this.acceptAnswer}
                  redraw = {this.redraw} 
                  answerCorrect = { answerCorrect}/>
          <Answer selectedNumbers = {selectedNumbers}
                  unselectNumber = {this.unselectNumber} />
        </div>
        <br />
        {doneStatus ? 
         <DoneFrame resetGame = {this.resetGame}
                    doneStatus = {doneStatus} /> :
         <Numbers selectedNumbers = {selectedNumbers}
                  selectNumber = {this.selectNumber}
                  usedNumbers = {usedNumbers} />
        }
      </div>
    );
  }
}

export default Game