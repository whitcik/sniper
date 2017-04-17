import actionTypes from '../constants/actionTypes';

export const addGameToHistory = (reactionTimes) => {
  return {
    type: actionTypes.ADD_GAME_TO_HISTORY,
    reactionTimes
  }
}