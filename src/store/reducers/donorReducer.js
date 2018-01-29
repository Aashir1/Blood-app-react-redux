import actionTypes from '../action/actionTypes';
let initialState = {
    usersData: []
};

function donorReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE_USERS_DATA:
            return Object.assign({}, state, { usersData: [...state.usersData, action.obj] });

        case actionTypes.LOAD_STORE:
            return Object.assign({}, state, { usersData: [...state.usersData, action.obj] });

        default:
            return state;
    }
}

export default donorReducer;