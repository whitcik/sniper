import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { STATS_WIDTH } from '../constants/gameConsts';

class GameStats extends PureComponent {

  generateElements() {
    const { reactionTimes } = this.props;
    return Object.keys(reactionTimes).map((key) => {
      return <li key={key}>{reactionTimes[key]}</li>
    });
  }

  render() {

    return (
      <div className="game-stats" style={{width: STATS_WIDTH}}>
        <h2>Stats</h2>
        <ul>
          {this.generateElements()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reactionTimes: state.game.reactionTimes
  };
}

export default connect(mapStateToProps)(GameStats);
