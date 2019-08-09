import {team} from '../utility/tournamentData';

const initialState = {...team, loading: true};

export default reducer = (state= initialState, action) => {
        switch(action.type){
            case 'SET_SPORTS': return {};
            default: return state;            
        }
}