import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCrKaJGPRhbZ27kz9SdvfkVUZTY90rS0Xg",
    authDomain: "e-clone-519a5.firebaseapp.com",
    databaseURL: "https://e-clone-519a5.firebaseio.com",
    projectId: "e-clone-519a5",
    storageBucket: "e-clone-519a5.appspot.com",
    messagingSenderId: "314714316051",
    appId: "1:314714316051:web:649e64f0e4dcaa14ed8ee6",
    measurementId: "G-LET4K13FG6"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };