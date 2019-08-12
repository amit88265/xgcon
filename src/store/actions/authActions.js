import * as actionTypes from './actionTypes';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const authSuccess = (userData)=>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        userData
    }
}

const authFail = (message) => {
    return {
        type: actionTypes.AUTH_FAIL,
        errorMessage: message
    }
}

export const authLogout = ()=>{
    localStorage.removeItem('userId');
    localStorage.removeItem('isSigned');
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const authStart = ()=>{
    return dispatch => {
            if(localStorage.getItem('isSigned')){
                dispatch(authSuccess(localStorage.getItem('userId')));
            }else{
                dispatch(authFail('Please Login to continue'));
            }
    }
}

export const auth = (userId, password)=>{
    return dispatch => {
        firebase.firestore().collection("admins").doc(userId).get()
        .then(response => {
                if (response.data()!==undefined) {
                    if(response.data().password===password){
                        localStorage.setItem('isSigned', true);
                        localStorage.setItem('userId', userId);
                        dispatch(authSuccess(userId));
                    }else{
                        dispatch(authFail('Wrong Username or Password, Please try again!!'));
                    }
                }else{
                    dispatch(authFail('User Not Found! Please Register with your details through this link.')); 
                }
            }
        ).catch( error => console.log(error))
    }
}