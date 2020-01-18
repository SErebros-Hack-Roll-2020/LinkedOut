import React from 'react';
import { IonGrid, IonItem, IonList, IonCheckbox, IonLabel, IonBadge, IonNote, IonRow, IonCol, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Matches</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>

          <IonToolbar>
            <IonTitle>Search Matches</IonTitle>
          </IonToolbar>
          <IonList>
            <IonList>
              <IonItem>
                <IonLabel>Grp 1<br></br>
                  <IonNote>WA/Tele handle</IonNote>
                  <IonButton color="danger" shape="round">OK</IonButton>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Grp 2<br></br>
                  <IonCol>
                    <IonNote>WA/Tele handle</IonNote>
                  </IonCol>
                  <IonCol>
                    <IonButton color="danger" shape="round">OK</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton color="danger" shape="round">OK</IonButton>
                  </IonCol>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonList>
          <IonCol>
                  <IonButton expand="block" color="success">In</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton  expand="block" color="danger">Out</IonButton>
                </IonCol>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
