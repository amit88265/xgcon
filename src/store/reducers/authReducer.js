import * as actions from '../actions/actionTypes';

const initial_state = {
    user: null,
    redirectTo: '/',
    message: 'Please login to continue!',
}

const authReducer = (state = initial_state, action) => {
    switch (action.type) {
        case actions.AUTH_SUCCESS: return { ...state, user: action.userData };
        case actions.AUTH_LOGOUT: return initial_state;
        case actions.AUTH_FAIL: return {...state, message: action.errorMessage};
        case actions.AUTH_SET_REDIRECT: return {...state, redirectTo: action.redirectTo};
        default: break;
    }
    return state;
}

export default authReducer;