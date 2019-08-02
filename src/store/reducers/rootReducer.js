import { combineReducers } from 'redux';
import sideTabReducer from './sideTabReducer';


const rootReducer = combineReducers({
    sideTab: sideTabReducer
});

export default rootReducer;