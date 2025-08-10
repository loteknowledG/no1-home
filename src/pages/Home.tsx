import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Welcome to no1-home</h1>
        <p>
          At no1-home, we are dedicated to providing the best solutions for your home.
          Our team of experts is passionate about creating innovative and high-quality products
          that make your life easier and more enjoyable.
        </p>
        <p>
          Explore our website to learn more about our products and services.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
