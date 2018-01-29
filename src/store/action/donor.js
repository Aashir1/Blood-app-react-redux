import actionTypes from './actionTypes';
import dbConfig from './firebaseConfig';
import {browserHistory} from 'react-router';
const databaseRef = dbConfig.database().ref('/bloodApp');
class DonorActions{
    static sendDonorData(data){
        console.log(data);
        return (dispatch)=>{
            databaseRef.push(data)
            .then(dataSnapshot =>{
                databaseRef.once('value', snapShot =>{
                    let data = snapShot.val(),
                        dataKeys = Object.keys(data);
                        dataKeys.map(eachKey=>{
                            const obj = {
                                name: data[eachKey].name,
                                email :data[eachKey].email,
                                contact: data[eachKey].contact,
                                bloodGroup: data[eachKey].bloodGroup
                            }
                            dispatch(DonorActions.usersData(obj));
                        })
                })
            })
            .catch(error =>{
                alert(error.message);
            })
        }
    }
    static loadStoreAfterPageRefresh(){
        return (dispatch)=>{
                databaseRef.once('value', dataSnapshot=>{
                    let data = dataSnapshot.val(),
                        dataKeysArray = Object.keys(data);
                    dataKeysArray.map(eachprop=>{
                        console.log(eachprop);
                        let obj = {
                            name : data[eachprop].name,
                            email : data[eachprop].email,
                            contact: data[eachprop].contact,
                            bloodGroup: data[eachprop].bloodGroup
                        }
                        dispatch(DonorActions.loadStore(obj));
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
    static usersData(obj){
        return{
            type: actionTypes.STORE_USERS_DATA,
            obj
        }
    }
}

export default DonorActions;