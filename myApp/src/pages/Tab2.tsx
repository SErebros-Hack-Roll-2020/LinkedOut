import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonHeader, IonInput, IonGrid, IonRow, IonCol, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonThumbnail, IonImg, IonItemSliding, IonItemOptions, IonItemOption, IonNote, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';

const Tab2: React.FC = () => {

  const [name, setName] = useState("name");
  const [searchResults, setSearchResults] = React.useState([]);

  const getAllNames = () => {
    axios.get('/api/getAllNames')
      .then(response => {
        console.log(response);
        setName(response.data);
      })
  };

  const query = (x: String) => {
    console.log(x);
  };

  useEffect(() => {
    getAllNames();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Explore</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonItem>
      <IonLabel position="floating">Search</IonLabel>
      <IonInput 
      onIonChange={(e) => query((e.target as HTMLInputElement).value)}
      ></IonInput>
    </IonItem>
        <IonList>
                <IonImg src="/assets/icon/favicon.png"/>
        </IonList>
      </IonContent>
    </IonPage>
  );

  const like = () => {
    console.log("hi");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
            <div></div>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton onClick={() => like()} expand="block" color="success">In</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton expand="block" color="danger">Out</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>



          </IonCardContent>
        </IonCard>

        <IonList>
          <IonItem routerLink="/tab2/details">
            <IonLabel>
              <h2>Go to detail</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;