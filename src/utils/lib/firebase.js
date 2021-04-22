import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';
import { firebaseConfig } from 'config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

const msg = firebase.messaging();

msg
  .getToken({ vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY })
  .then((token) => console.log(token));

export { msg };

export default firebase;
