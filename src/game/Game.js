import React, { PureComponent } from 'react';
import { WIDTH, HEIGHT } from '../constants/gameConsts';
import './game.scss';
import Target from './Target';


export default class Game extends PureComponent {
  constructor() {
    
    super();
    this.state = {
      isGameStarted: false,
      success: 0,
      fail: 0,
      targetSize: 10,
      reactionTime: 0
    }
  }

  handleStart = () => {
    this.setState({
      isGameStarted: true
    });
  }

  handleSuccess = () => {
    this.setState({
      success: this.state.success + 1
    });
  }

  handleFail = () => {
    this.setState({
      fail: this.state.success + 1
    });
  }

  render() {
    console.log('test', this.state);
    const { success, reactionTime, isGameStarted } = this.state;
    return (
      <div id="game-map" style={{width: WIDTH, height: HEIGHT}}>
        {!isGameStarted && <button onClick={this.handleStart}>Start Game</button>}
        <span>Points: {success}</span> <span>Reaction Time: {reactionTime}</span>
        {isGameStarted && <Target handleSuccess={this.handleSuccess} />}
      </div>
    );
  }
}
