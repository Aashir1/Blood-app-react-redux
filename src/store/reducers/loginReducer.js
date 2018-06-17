import actionTypes from '../action/actionTypes';
import Storage from '../localStorage';
let initialState = {
    currentUser: {},
    isProgress: false,
    isError: false,
    errorText: ''
}
function applicationSignInReducer(state = initialState, action) {
    switch (action.type) {

        case actionTypes.LOGIN_SUCCEED:
            return Object.assign({}, state, { currentUser: action.data, isProgress: false });

        case actionTypes.LOGIN_PROGRESS:
            return Object.assign({}, state, { isProgress: true });

        case actionTypes.LOGIN_ERROR:
            return Object.assign({}, state, { isError: true, errorText: action.error });

        case actionTypes.LOGIN_ERROR_ALERT:
            return Object.assign({}, state, { isError: false, errorText: '', isProgress: false })

        case actionTypes.LOGOUT_SUCCEED:
            console.log('when logout', Object.assign({}, state, { currentUser: {} }));
            Storage.setState(Object.assign({}, state, { currentUser: {} }));
            return Object.assign({}, state, { currentUser: {} });


        case 'SAVE_STORE_STATE':
            return Object.assign({}, action.state);

        default:
            return state;
    }
}

export default applicationSignInReducer;