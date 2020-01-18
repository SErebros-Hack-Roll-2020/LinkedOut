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
    const settings = () => {
        console.log('hi');
    };

    const addMedia = () => {
        console.log('hi');
    };

    const editInfo = () => {
        console.log('edit info');
    };

    const remove = () => {
        console.log('remove');
    };

    const [name, setName] = useState('name');

    const getName = () => {
        axios.get('/api/getName').then(response => {
            console.log(response);
            setName(response.data);
        });
    };

    useEffect(() => {
        getName();
    }, []);

    const state = {
        userData: { id: '1', name: 'Chen Hui', bio: 'D' },
        groupData: [
            { id: '1', name: 'Jason', bio: 'Developer' },
            { id: '2', name: 'Subbash', bio: 'Designer' }
        ]
    };

    const renderItems = () => {
        const data = state.groupData;

        const mapRows = data.map((item, index) => (
            <IonCard>
                <IonItem>
                    <IonCol>
                        <IonCardTitle>Name: {item.name}</IonCardTitle>
                    </IonCol>
                    <IonCol>
                        <IonButton onClick={() => remove()} color="danger">
                            Remove
                        </IonButton>
                    </IonCol>
                </IonItem>
                <IonCardContent> Bio: {state.userData.bio}</IonCardContent>
            </IonCard>
        ));
        return mapRows;
    };

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
                    <IonItem>
                        <IonCol>
                            <IonCardTitle>Name: {name}</IonCardTitle>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={() => editInfo()}
                                color="success"
                            >
                                Edit info
                            </IonButton>
                        </IonCol>
                    </IonItem>
                    <IonCardContent> Bio: {state.userData.bio}</IonCardContent>
                </IonCard>

                <IonList>{renderItems()}</IonList>

                <IonList lines="none">
                    <IonListHeader>
                        <IonCol>
                            <IonButton
                                onClick={() => settings()}
                                color="success"
                            >
                                Settings
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={() => addMedia()}
                                color="success"
                            >
                                Add Media
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={() => editInfo()}
                                color="success"
                            >
                                Edit info
                            </IonButton>
                        </IonCol>
                    </IonListHeader>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
