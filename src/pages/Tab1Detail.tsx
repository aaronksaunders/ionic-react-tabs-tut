import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonPage,
} from "@ionic/react";

const Tab1Detail: React.FC<any> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Tab One Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
      <IonTitle>Tab One Detail</IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Tab1Detail);
