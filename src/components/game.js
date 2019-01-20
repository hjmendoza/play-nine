import React, { Component } from 'react';
import '../styles/game.css';
import Stars from './stars.js'
import Button from './button.js';
import Answer from './answer.js'
import Numbers from './numbers.js'

class Game extends Component {
  render(){
    return(
      <div className="container">
        <h1>Play Nine</h1>
        <hr />
        <div>
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    )
  }
}

export default Game