import { combineReducers } from 'redux';
import sideTabReducer from './sideTabReducer';
import authReducer from './authReducer';
import tournamentReducer from './tournamentInfoReducer';

const rootReducer = combineReducers({
    drawer: sideTabReducer,
    auth: authReducer,
    tour: tournamentReducer
});

export default rootReducer;