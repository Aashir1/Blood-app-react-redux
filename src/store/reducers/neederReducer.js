import actionTypes from '../action/actionTypes';
let initialState = {
    usersData: []
};

function neederReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.LOAD_STORE:
            return Object.assign({}, state,{usersData: [...state.usersData,action.obj]});

        default:
            return state;
    }
}

export default neederReducer;