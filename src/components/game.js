import React, { Component } from 'react';
import '../styles/game.css';
import Stars from './stars.js'
import Button from './button.js';
import Answer from './answer.js'
import Numbers from './numbers.js'

class Game extends Component {
	state = {
    selectedNumbers: [],
  };

  render(){
    return(
      <div className="container">
        <h1>Play Nine</h1>
        <hr />
        <div>
          <Stars />
          <Button />
          <Answer selectedNumbers = {this.state.selectedNumbers}/>
        </div>
        <br />
        <Numbers selectedNumbers = {this.state.selectedNumbers}/>
      </div>
    )
  }
}

export default Game