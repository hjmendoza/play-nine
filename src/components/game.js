import React, { Component } from 'react';
import '../styles/game.css';
import Stars from './stars.js';
import Button from './button.js';
import Answer from './answer.js';
import Numbers from './numbers.js';
import DoneFrame from './doneframe.js';

class Game extends Component {

  static randomNumber = () => 1 + Math.floor(Math.random() * 9)

	state = {
    selectedNumbers: [],
    randomStarNum: Game.randomNumber(),
    usedNumbers: [],
    answerCorrect: null,
    redrawCount: 5,
    doneStatus: null,
  };

  selectNumber = (clickedNumber) => {
    if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return ;}
    this.setState(prevState => ({
      answerCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerCorrect: null,
      selectedNumbers: prevState.selectedNumbers
                                .filter(number => number !== clickedNumber)
    }))
  }

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerCorrect: null,
      randomStarNum: Game.randomNumber(),
    }))
  }

  checkAnswer = () => {
    this.setState(prevState => ({
      answerCorrect: prevState.randomStarNum === 
        prevState.selectedNumbers.reduce((acc, n) => acc + n , 0)
    }))
  }

  redraw = () => {
    if(this.state.redrawCount === 0){ return; }
    this.setState(prevState => ({
      randomStarNum: Game.randomNumber(),
      answerCorrect: null,
      selectedNumbers: [],
      redrawCount: prevState.redrawCount - 1 
    }));
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
        <h1>Play Nine</h1>
        <hr />
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
         <DoneFrame doneStatus = {doneStatus} /> :
         <Numbers selectedNumbers = {selectedNumbers}
         selectNumber = {this.selectNumber}
         usedNumbers = {usedNumbers} />
        }
      </div>
    )
  }
}

export default Game