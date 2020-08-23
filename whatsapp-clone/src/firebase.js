import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAYKWx15XjZyKIi17tLPkNQ0zGDk8MsEkA",
    authDomain: "whatsapp-clone-d3a93.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-d3a93.firebaseio.com",
    projectId: "whatsapp-clone-d3a93",
    storageBucket: "whatsapp-clone-d3a93.appspot.com",
    messagingSenderId: "159363682119",
    appId: "1:159363682119:web:15efc1402d00952fe48662",
    measurementId: "G-HL1BVK145H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;