import React from 'react';

const StartStatsBox =({average, best}) => {
  return (
    <div className='start-game-modal__stats-box'>
      <ul className='stats-box__list'>
        <li className="stats-box__list__element">
          Best in round: {best} ms
        </li>
        <li className="stats-box__list__element">
          Average: {average} ms
        </li>
      </ul>
    </div>
  );
}

export default StartStatsBox;
