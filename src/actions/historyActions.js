import actionTypes from '../constants/actionTypes';

export const startGame = (reactionTimes) => {
  return {
    type: actionTypes.ADD_GAME_TO_HISTORY,
    reactionTimes
  }
}