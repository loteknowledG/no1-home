import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/react';

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Contact Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Contact no1-home</h1>
        <p>
          We'd love to hear from you. Please fill out the form below to get in touch with us.
        </p>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Message</IonLabel>
            <IonTextarea />
          </IonItem>
        </IonList>
        <IonButton expand="block" style={{ marginTop: '20px' }}>Submit</IonButton>
        <div style={{ marginTop: '40px' }}>
          <h2>Our Address</h2>
          <p>123 Main Street, Anytown, USA 12345</p>
          <h2>Email</h2>
          <p>contact@no1-home.com</p>
          <h2>Phone</h2>
          <p>(123) 456-7890</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
