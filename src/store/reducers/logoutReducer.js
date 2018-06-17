import actionTypes from '../action/actionTypes';
import Storage from '../localStorage';
let initialState = {
    currentUser: {}
}
function applicationLogoutReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGOUT_SUCCEED:
            let clone = state;
            console.log(state.applicationReducers);
            Storage.setState(Object.assign({}, state, { currentUser: null }));
            return Object.assign({}, clone, { currentUser: null });
        default:
            return state;
    }
}

export default applicationLogoutReducer;