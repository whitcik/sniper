import React from 'react';

const StartStatsBox =({average, best}) => {
  return (
    <div className='start-game-modal__stats-box'>
      <div>Best in round: {best}</div>
      <div>Average: {average}</div>
    </div>
  );
}

export default StartStatsBox;
