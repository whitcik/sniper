import React, { PureComponent } from 'react';
import { WIDTH, HEIGHT } from '../constants/gameConsts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startGame, shot, stopGame } from '../actions/gameActions';
import './game.scss';
import Target from './Target';


class Game extends PureComponent {
  constructor() {
    super();
    this.time = null;
  }

  handleStart = () => {
    this.props.actions.startGame();
    this.time = new Date().getTime();
  }

  handleShot = () => {
    const newTime = new Date().getTime();
    const reactionTime = newTime - this.time;

    this.props.actions.shot(reactionTime);
    if(this.isLastShot()){
      this.props.actions.stopGame();
      this.time = null;
    }
    this.time = newTime;
  }

  isLastShot() {
    return this.props.shots === 9;
  }

  render() {
    console.log('Game', this.props);
    const { isGameStarted, reactionTime, shots } = this.props;

    return (
      <div id="game-map" style={{width: WIDTH, height: HEIGHT}}>
        {!isGameStarted && <button onClick={this.handleStart}>Start Game</button>}
        <span>Points: {shots}</span> <span>Reaction Time: {reactionTime}</span>
        {isGameStarted && <Target handleShot={this.handleShot} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isGameStarted: state.game.isGameStarted,
    shots: state.game.shots,
    reactionTime: state.game.reactionTimes[state.game.shots]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ startGame, shot, stopGame }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
