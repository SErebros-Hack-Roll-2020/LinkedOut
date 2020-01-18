import React from 'react';
import { IonHeader, IonGrid, IonRow, IonCol, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';

const Tab2: React.FC = () => {

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
                  <IonButton onClick={() => like()}expand="block" color="success">In</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton  expand="block" color="danger">Out</IonButton>
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