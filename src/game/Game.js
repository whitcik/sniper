import React, { PureComponent } from 'react';
import { GAME_WIDTH, GAME_HEIGHT, STATS_WIDTH } from '../constants/gameConsts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startGame, shot, stopGame } from '../actions/gameActions';
import './game.scss';
import Target from './Target';
import GameStats from './GameStats';


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
    const { isGameStarted } = this.props;

    return (
      <div className="game-container clearfix" style={{width: GAME_WIDTH + STATS_WIDTH}}>
        <div id="game-map" style={{width: GAME_WIDTH, height: GAME_HEIGHT}}>
          {!isGameStarted && <button onClick={this.handleStart}>Start Game</button>}
          {isGameStarted && <Target handleShot={this.handleShot} />}
        </div>
        <GameStats />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isGameStarted: state.game.isGameStarted,
    shots: state.game.shots
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ startGame, shot, stopGame }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
