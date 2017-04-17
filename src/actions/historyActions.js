import actionTypes from '../constants/actionTypes';

export const addGameToHistory = (reactionTimes) => {
  return {
    type: actionTypes.ADD_GAME_TO_HISTORY,
    reactionTimes
  }
}

export const addBestReactionTime = (bestReaction) => {
  return {
    type: actionTypes.ADD_BEST_REACTION_TIME,
    bestReaction
  }
}