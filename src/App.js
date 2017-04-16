import React, { Component } from 'react';
import Game from './game/Game';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Sniper</h2>
        </div>
        <Game />
      </div>
    );
  }
}

export default App;
