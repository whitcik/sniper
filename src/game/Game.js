import React, { PureComponent } from 'react';
import { GAME_WIDTH, GAME_HEIGHT, STATS_WIDTH } from '../constants/gameConsts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startGame, shot, stopGame } from '../actions/gameActions';
import { addGameToHistory, addBestReactionTime } from '../actions/historyActions';
import './game.scss';
import Target from './Target';
import GameStats from './GameStats';
import StartGameModal from './StartGameModal';


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
    const { reactionTimes } = this.props;
    const newTime = new Date().getTime();
    const reactionTime = newTime - this.time;

    this.props.actions.shot(reactionTime);

    if(this.isBestReaction(reactionTime)){
      this.props.actions.addBestReactionTime(reactionTime);
    }

    if(this.isLastShot()){
      this.props.actions.stopGame();
      this.props.actions.addGameToHistory(reactionTimes);

      this.time = null;
    } else {
      this.time = newTime;
    }
  }

  isLastShot() {
    return this.props.shots === 9;
  }

  isBestReaction(reactionTime) {
    const { bestReaction } = this.props;
    return bestReaction === null || bestReaction > reactionTime;
  }

  render() {
    console.log('Game', this.props);
    const { isGameStarted, reactionTimes, bestReaction } = this.props;

    return (
      <div className="game-container clearfix" style={{width: GAME_WIDTH + STATS_WIDTH}}>
        <div id="game-map" style={{width: GAME_WIDTH, height: GAME_HEIGHT}}>
          {!isGameStarted && <StartGameModal reactionTimes={reactionTimes} handleStart={this.handleStart} />}
          {isGameStarted && <Target handleShot={this.handleShot} />}
        </div>
        <GameStats reactionTimes={reactionTimes} bestReaction={bestReaction} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isGameStarted: state.game.isGameStarted,
    shots: state.game.shots,
    reactionTimes: state.game.reactionTimes,
    bestReaction: state.history.bestReaction
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ startGame, shot, stopGame, addGameToHistory, addBestReactionTime }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
