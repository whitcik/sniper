import React, { PureComponent } from 'react';
import { STATS_WIDTH } from '../constants/gameConsts';

export default class GameStats extends PureComponent {

  generateElements() {
    const { reactionTimes } = this.props;
    return reactionTimes.map((reactionTime, key) => {
      return <li key={key}>{reactionTime} ms</li>
    });
  }

  render() {

    return (
      <div className="game-stats" style={{width: STATS_WIDTH}}>
        <h2 className="game-stats__header">Stats</h2>
        <ol>
          {this.generateElements()}
        </ol>
      </div>
    );
  }
}

