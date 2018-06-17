import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import applicationReducers from './reducers/signupReducer';
import applicationSignInReducer from './reducers/loginReducer';
import applicationLogoutReducer from './reducers/logoutReducer';
import donorReducer from './reducers/donorReducer';
import neederReducer from './reducers/neederReducer';
import Storage from './localStorage';
import { throttle } from 'lodash';
let presistState = Storage.loadState();
let reducers = combineReducers({
    applicationReducers,
    applicationSignInReducer,
    applicationLogoutReducer,
    donorReducer,
});
const loggerMiddleware = createLogger();

let store = createStore(
    reducers,
    presistState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
store.subscribe(throttle(() => {
    Storage.setState(store.getState());
}, 1000));
export default store;