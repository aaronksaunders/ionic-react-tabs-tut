import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import { useHistory } from "react-router";

const Tab1: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton
          expand="full"
          onClick={() => history.push("/tabs/tab1-detail")}
        >
          NEXT PAGE
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
