import actionTypes from '../constants/actionTypes';

const initialHistory = {
  bestReaction: null,
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
      case actionTypes.ADD_BEST_REACTION_TIME:
        return {
          ...history,
          bestReaction: payload.bestReaction
        }
    default:
      return history;
  }
};
