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
import React from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="LOBBY">
          <img src="/assets/icon/HumanIcon.png" alt="" />
          <IonCardHeader>
            <IonCardTitle>Chen Hui</IonCardTitle>
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
