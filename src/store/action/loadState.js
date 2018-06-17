import actionTypes from './actionTypes';
import dbConfig from './firebaseConfig';
import {browserHistory} from 'react-router';
class LoadStoreState{
    static loadStoreState(obj){
        return{
            type: actionTypes.LOAD_STORE_STATE,
            obj
        }
    }
}

export default LoadStoreState;