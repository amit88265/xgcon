const initialState = {
    tabs: ['Create Sport', 'Create tournament', 'Create Match', 'Create Teams']
}

const sideTabReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SIDE_TABS': return [...state]

        default: return state;
    }
}

export default sideTabReducer;