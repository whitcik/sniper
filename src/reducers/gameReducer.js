import actionTypes from '../constants/actionTypes';

export default(game = {}, payload) => {
  switch (payload.type) {
    case actionTypes.TEST:
      return payload.test;
    default:
      return game;
  }
};