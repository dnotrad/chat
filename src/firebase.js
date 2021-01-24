import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3mE1pxhOx_PNYUXE2q1qLJFNRd9WlgS0",
    authDomain: "chat-reac.firebaseapp.com",
    databaseURL: "https://chat-reac-default-rtdb.firebaseio.com",
    projectId: "chat-reac",
    storageBucket: "chat-reac.appspot.com",
    messagingSenderId: "808761910304",
    appId: "1:808761910304:web:e2370427ffa838fe0bc845"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;