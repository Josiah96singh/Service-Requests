import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAl1cGORQ33-ruDLZl87IW3ydER2aQ39gU",
    authDomain: "playground-316be.firebaseapp.com",
    databaseURL: "https://playground-316be.firebaseio.com",
    projectId: "playground-316be",
    storageBucket: "playground-316be.appspot.com",
    messagingSenderId: "40013966204",
    appId: "1:40013966204:web:eabd1114d20b43da8f52f9",
    measurementId: "G-S1YXTXSLK7"
  };

  const outotecDemo = firebase.initializeApp(firebaseConfig, 'OutotecDemoDefault');

  const fireMethods = {
      dataBase: outotecDemo.firestore(),
  }

  export default fireMethods;
