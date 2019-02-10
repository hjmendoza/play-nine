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

  selectedNumber = (clickedNumber) => {
    if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return ;}
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
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
          <Answer selectedNumbers = {this.state.selectedNumbers}/>
        </div>
        <br />
        <Numbers selectedNumbers = {this.state.selectedNumbers}
                selectedNumber = {this.selectedNumber} />
      </div>
    )
  }
}

export default Game