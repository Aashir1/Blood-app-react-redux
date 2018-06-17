import React from 'react';


export default class Storage{
    static loadState(){
        try{
            let serialized = JSON.parse(localStorage.getItem('state'));
            if(serialized === null){
                return undefined;
            }
            return serialized;
        }catch(err){
            return undefined;
        }
    }

    static setState(state){
        try{
            let serialized = JSON.stringify(state);
            localStorage.setItem('state', serialized);
        }catch(err){

        }
    }
}