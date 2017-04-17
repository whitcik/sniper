import actionTypes from '../constants/actionTypes';

export const startGame = () => {
  return {
    type: actionTypes.START_GAME
  }
}

export const stopGame = () => {
  return {
    type: actionTypes.STOP_GAME
  }
}

export const shot = (reactionTime) => {
  return {
    type: actionTypes.SHOT,
    reactionTime
  }
}