import actionTypes from '../constants/actionTypes';

const initialGame = {
  isGameStarted: false,
  shots: 0,
  reactionTimes: [],
  gameHistory: {}
};

export default(game = initialGame, payload) => {
  switch (payload.type) {
    case actionTypes.START_GAME:
      return {
        ...game,
        isGameStarted: true
      };
    case actionTypes.STOP_GAME:
      return {
        ...game,
        shots: 0,
        isGameStarted: false
      };
    case actionTypes.SHOT:
      return {
        ...game,
        shots: game.shots + 1,
        reactionTimes: [
          ...game.reactionTimes,
          payload.reactionTime
        ]
      }
    default:
      return game;
  }
};

/*
gameHistory: {
  ...game.gameHistory,
  [new Date().toISOString()]: game.reactionTimes
}
*/