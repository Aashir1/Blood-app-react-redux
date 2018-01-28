import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA-rhGM0Z9JECmVOshYgUQl59Bu8U0iOM4",
    authDomain: "blood-donor-app-44547.firebaseapp.com",
    databaseURL: "https://blood-donor-app-44547.firebaseio.com",
    projectId: "blood-donor-app-44547",
    storageBucket: "blood-donor-app-44547.appspot.com",
    messagingSenderId: "886338054563"
  };
  let dbConfig = firebase.initializeApp(config);

export default dbConfig;