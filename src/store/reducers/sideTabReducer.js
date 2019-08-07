const initialState = {
    tabs: ['Create Sport', 'Create tournament', 'Create Match', 'Create Team', 'Create Player','Score Updates'],
    routes: ['sport', 'tournament', 'match', 'team', 'player', 'score'],
}

const sideTabReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default sideTabReducer;