import actionTypes from './actionTypes';
import dbConfig from './firebaseConfig';
import {browserHistory} from 'react-router';
const databaseRef = dbConfig.database().ref('/bloodApp');
class NeederAction{
    static loadStoreAfterPageRefresh(data){
        console.log(data);
        return (dispatch)=>{
            dbConfig.database().ref(`/bloodApp`).once('value', dataSnapshot=>{
                    let data = dataSnapshot.val(),
                        dataKeysArray = Object.keys(data);
                    dataKeysArray.map(eachprop=>{
                        let obj = {
                            name : eachprop.name,
                            email : eachprop.email,
                            contact: eachprop.contact,
                            bloodGroup: eachprop.bloodGroup
                        }
                        dispatch(NeederAction.loadStore(obj));
                    })

                })
            }
    }
    static loadStore(obj){
        return{
            type: actionTypes.LOAD_STORE,
            obj
        }
    }
}

export default NeederAction;