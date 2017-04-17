import actionTypes from '../constants/actionTypes';

const initialHistory = {
  best: null,
  gameHistory: {}
};

export default(history = initialHistory, payload) => {
  switch (payload.type) {
    case actionTypes.ADD_GAME_TO_HISTORY:
      return {
        ...history,
        gameHistory: {
          ...history.gameHistory,
          [new Date().toISOString()]: payload.reactionTimes
        }
      };
    default:
      return history;
  }
};
