import React, { Component } from 'react';
import '../styles/game.css';
import Stars from './stars.js'
import Button from './button.js';
import Answer from './answer.js'
import Numbers from './numbers.js'

class Game extends Component {
	state = {
    selectedNumbers: [],
    randomStarNum: 1 + Math.floor(Math.random() * 9),
    answerCorrect: null,
  };

  selectNumber = (clickedNumber) => {
    if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return ;}
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers
                                .filter(number => number !== clickedNumber)
    }))
  }

  checkAnswer = () => {
    this.setState(prevState => ({
      answerCorrect: prevState.randomStarNum === 
        prevState.selectedNumbers.reduce((acc, n) => acc + n , 0)
    }))
  }

  render(){
    const { selectedNumbers, randomStarNum, answerCorrect } = this.state;
    return(
      <div className="container">
        <h1>Play Nine</h1>
        <hr />
        <div>
          <Stars randomStarNum = {randomStarNum}/>
          <Button selectedNumbers = {selectedNumbers}
                  checkAnswer = {this.checkAnswer}
                  answerCorrect = { answerCorrect} />
          <Answer selectedNumbers = {selectedNumbers}
                  unselectNumber = {this.unselectNumber} />
        </div>
        <br />
        <Numbers selectedNumbers = {selectedNumbers}
                selectNumber = {this.selectNumber} />
      </div>
    )
  }
}

export default Game