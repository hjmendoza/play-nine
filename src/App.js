import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import Game from './components/game.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
