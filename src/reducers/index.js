import { combineReducers } from 'redux';
import game from './gameReducer';
import history from './historyReducer';

const rootReducer = combineReducers({
    game,
    history
});
export default rootReducer;