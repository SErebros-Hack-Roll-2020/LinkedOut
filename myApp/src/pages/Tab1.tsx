import {
  IonCard,
  IonCol,
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import './Tab1.css';
import axios from 'axios';

const Tab1: React.FC = () => {
<<<<<<< HEAD
  const settings = () => {
    console.log("hi");
  };

  const addMedia = () => {
    console.log("hi");
  };

  const editInfo = () => {
    console.log("hi");
  };

=======

  const [name, setName] = useState("name");

  const getName = () => {
    axios.get('/api/getName')
      .then(response => {
        console.log(response);
        setName(response.data);
      })
  };

  useEffect(() => {
    getName();
  }, []);


>>>>>>> d6a92ce15ed14d01280ad36908df9292e0f65627
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/icon/HumanIcon.png" alt="" />
          <IonCardHeader>
<<<<<<< HEAD
            <IonCardTitle>Group 01</IonCardTitle>
            <IonCardSubtitle>Chen Hui</IonCardSubtitle>
            <IonCardSubtitle>Subbash</IonCardSubtitle>
=======
            <IonCardTitle>{name}</IonCardTitle>
>>>>>>> d6a92ce15ed14d01280ad36908df9292e0f65627
          </IonCardHeader>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonCol>
              <IonButton onClick={() => settings()} color="success">Settings</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => addMedia()} color="success">Add Media</IonButton>
            </IonCol>
            <IonCol>
            <IonButton onClick={() => editInfo()} color="success">Edit info</IonButton>
            </IonCol>
          </IonListHeader>
<<<<<<< HEAD
=======
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Ionic Documentation</IonLabel>
          </IonItem>
>>>>>>> d6a92ce15ed14d01280ad36908df9292e0f65627
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
