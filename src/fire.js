import firebase from "firebase";
import "firebase/firestore";

var config = {
    apiKey: "AIzaSyCcRt2yqukrnEGNwuEgO84VEmhvhVe9I7w",
    authDomain: "chat-app-5852d.firebaseapp.com",
    databaseURL: "https://chat-app-5852d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-app-5852d",
    storageBucket: "chat-app-5852d.appspot.com",
    messagingSenderId: "947836292602",
    appId: "1:947836292602:web:e4d9e134d73766e1a0e843",
    measurementId: "G-SCT7W2W0X4"
};

var fire = firebase.initializeApp(config);
export default fire;