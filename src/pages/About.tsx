import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>About no1-home</h1>
        <p>
          Founded in 2023, no1-home has been a leader in the home solutions industry.
          Our mission is to enhance the quality of life for our customers by providing
          innovative, reliable, and user-friendly products.
        </p>
        <h2>Our Team</h2>
        <p>
          We have a diverse team of professionals with expertise in various fields,
          including engineering, design, and customer service. We are all united by a
          common goal: to create the best possible experience for our customers.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Customer Satisfaction</li>
          <li>Innovation</li>
          <li>Quality</li>
          <li>Integrity</li>
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default About;
