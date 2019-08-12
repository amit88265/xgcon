const initialState = {
    sports: [], 
    tournaments:[], 
    tournamentData: {} ,
    change: '',
    loading: false
};

const setOptionsData = (values)=>{
    return values.map(value => (
        {
            value, 
            label: value
        }
    ));
}

const tournamentReducer = (state= initialState, action) => {
        switch(action.type){
            case 'GET_SPORTS': return {
                ...state, 
                sports: setOptionsData(action.values),
                change: 'sports',
            };
            case 'GET_TOURNAMENTS': return {
                ...state, 
                tournaments: setOptionsData(action.values),
                change: 'tournaments',
            }
            case 'SET_TOURNAMENT': return{
                ...state,
                tournamentData: action.data,
                change: 'tourData',
            }
            default: return state;            
        }
}

export default tournamentReducer;