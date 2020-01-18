import {IonButton, IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import React, { useState, useEffect } from 'react';

const Login: React.FC = () => {

  const [user, setUser] = useState();

  const doLogin = () => {
    setUser(firebase.auth().currentUser);
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var credential = result.credential as firebase.auth.OAuthCredential
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user)
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LinkedOut !</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => doLogin()} expand="block" color="success">Login In</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
