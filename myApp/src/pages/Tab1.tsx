import {
  IonCard,
  IonCol,
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
            <IonCardTitle>{name}</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonCol>
              <IonLabel>Settings</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>Add Media</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>Edit Info</IonLabel>
            </IonCol>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Ionic Documentation</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
