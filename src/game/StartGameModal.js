import React, { PureComponent } from 'react';
import classNames from 'classnames';
import StartStatsBox from './StartStatsBox';
import _ from 'lodash';

export default class StartGameModal extends PureComponent {

  isStatsBox() {
    const { reactionTimes } = this.props;
    return !!reactionTimes.length
  }

  getBestReaction() {
    const { reactionTimes } = this.props;
    return _.min(reactionTimes);
  }

  getAverage() {
    const { reactionTimes } = this.props;
    return _.sum(reactionTimes) / reactionTimes.length;
  }
  
  render() {
    const isStatsBox = this.isStatsBox();

    return (
      <div className={classNames('start-game-modal', {'start-game-modal--stats': isStatsBox})}>
        <h3>Sniper</h3>
        {isStatsBox && <StartStatsBox best={this.getBestReaction()} average={this.getAverage()} />}
        <button onClick={this.props.handleStart}>Start</button>
      </div>
    );
  }
}

