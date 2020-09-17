import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp, IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import TabRoot from "./pages/TabRoot";
import Tab1Detail from "./pages/Tab1Detail";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
      <Route path="/tabs" component={TabRoot} />
      <Route path="/" render={() => <Redirect to="/tabs" />} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
