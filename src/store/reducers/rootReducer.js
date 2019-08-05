import { combineReducers } from 'redux';
import sideTabReducer from './sideTabReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    drawer: sideTabReducer,
    auth: authReducer
});

export default rootReducer;