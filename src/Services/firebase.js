import firebase from 'firebase'
import '@firebase/firestore' 
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAxF_1kf_LFo8-4H2BHAHzaO0FFOBS5rvY",
  authDomain: "product-react-cec7c.firebaseapp.com",
  projectId: "product-react-cec7c",
  storageBucket: "product-react-cec7c.appspot.com",
  messagingSenderId: "266626741466",
  appId: "1:266626741466:web:83deb9771fd58d9fa621e3"
});

export const reduxSagaFirebase = new ReduxSagaFirebase(firebaseConfig)