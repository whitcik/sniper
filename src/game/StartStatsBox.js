import React from 'react';

const StartStatsBox =({average, best}) => {
  return (
    <div className='start-game-modal__stats-box'>
      <div>best: {best}</div>
      <div>average: {average}</div>
    </div>
  );
}

export default StartStatsBox;
