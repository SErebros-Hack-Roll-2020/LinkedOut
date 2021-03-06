import React from 'react';
import { IonSearchbar, IonGrid, IonItem, IonList, IonCheckbox, IonLabel, IonBadge, IonNote, IonRow, IonCol, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab3Page: React.FC = () => {
  return (

    // const state = {
    //   search: '',
    // };
  
    // updateSearch = search => {
    //   this.setState({ search });
    // };



    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Matches</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar></IonSearchbar>
        {/* <ion-searchbar showCancelButton="focus"  ionInput="getData()" class=""></ion-searchbar> */}
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
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
