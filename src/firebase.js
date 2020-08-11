import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDpJEXWxNZBgH9CHVfk13zB-2WacySvFrw",
    authDomain: "twitter-clone-f908b.firebaseapp.com",
    databaseURL: "https://twitter-clone-f908b.firebaseio.com",
    projectId: "twitter-clone-f908b",
    storageBucket: "twitter-clone-f908b.appspot.com",
    messagingSenderId: "165397809295",
    appId: "1:165397809295:web:2ed5dacd5ed1f7df4248fa",
    measurementId: "G-K3ZD44CS5E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;