import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Landing from './Landing';
import * as serviceWorker from './serviceWorker';


/* Firebase */
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getConfig } from '@ionic/react';

const firebaseConfig= {
    apiKey: "AIzaSyB0iWQh9lOS5F9NsqN65y7chGxUJ_Fge8Q",
    authDomain: "linkedout-df9d4.firebaseapp.com",
    databaseURL: "https://linkedout-df9d4.firebaseio.com",
    projectId: "linkedout-df9d4",
    storageBucket: "linkedout-df9d4.appspot.com",
    messagingSenderId: "438683126903",
    appId: "1:438683126903:web:0df9085a6ab2a5cfb00a72",
    measurementId: "G-KJ4XBDKPFR"
}
firebase.initializeApp(firebaseConfig)

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // user exists, do stuff
        ReactDOM.render(<App />, document.getElementById('root'));
    } else {
        ReactDOM.render(<Landing />, document.getElementById('root'));

    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();