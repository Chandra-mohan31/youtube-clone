import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwtvwhhxXtLEGAuZRCf-QjBYCqjFIPMM8",
    authDomain: "clone-a30f5.firebaseapp.com",
    databaseURL: "https://clone-a30f5.firebaseio.com",
    projectId: "clone-a30f5",
    storageBucket: "clone-a30f5.appspot.com",
    messagingSenderId: "724249915142",
    appId: "1:724249915142:web:5aa2eb22ab7c1cc742b887",
    measurementId: "G-CJ9LSR6LSJ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();



  
  export default db;
  