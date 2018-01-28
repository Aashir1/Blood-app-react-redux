import actionTypes from './actionTypes';
import dbConfig from './firebaseConfig';
import {browserHistory} from 'react-router';
export function loginRequestAsync(loginObj){
    return (dispatch)=>{
        console.log(loginObj);
        dispatch(loginRequest());
        dbConfig.auth().signInWithEmailAndPassword(loginObj.email, loginObj.password)
        .then(user=>{
            browserHistory.push('/');
            let obj={
                name: user.displayName,
                uid: user.uid,
                email: user.email
            }
            
            dispatch(loginSucceed(obj));
        })
        .catch((error)=>{
            dispatch(loginError(error.message));
        })
    }
}

function loginRequest(){
    return{
        type: actionTypes.LOGIN_PROGRESS
    }
}
function loginSucceed(data){
    return{
        type: actionTypes.LOGIN_SUCCEED,
        data
    }
}

function loginError(error){
    return{
        type: actionTypes.LOGIN_ERROR,
        error
    }
}

export function loginErrorAlert(){
    return{
        type: actionTypes.LOGIN_ERROR_ALERT
    }
}
