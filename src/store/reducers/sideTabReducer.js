const initialState = {
    tabs: ['Create Sport', 'Create tournament', 'Create Match', 'Create Team', 'Create Player','Score Updates','Edit'],
    routes: ['sport', 'tournament', 'match', 'team', 'player', 'score', 'edit'],
}

const sideTabReducer = (state = initialState, action) => {
    switch (action.type) {
        
        default: return state;
    }
}

export default sideTabReducer;