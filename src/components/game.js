import React, { Component } from 'react';
import '../styles/game.css';
import Stars from './stars.js'
import Button from './button.js';
import Answer from './answer.js'
import Numbers from './numbers.js'

class Game extends Component {
	state = {
    selectedNumbers: [],
    randomStarNum: 1 + Math.floor(Math.random() * 9)
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

  render(){
    return(
      <div className="container">
        <h1>Play Nine</h1>
        <hr />
        <div>
          <Stars randomStarNum = {this.state.randomStarNum}/>
          <Button />
          <Answer selectedNumbers = {this.state.selectedNumbers}
                  unselectNumber = {this.unselectNumber}/>
        </div>
        <br />
        <Numbers selectedNumbers = {this.state.selectedNumbers}
                selectNumber = {this.selectNumber} />
      </div>
    )
  }
}

export default Game