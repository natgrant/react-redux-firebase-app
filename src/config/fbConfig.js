// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAQqJT47Aal6kk1wl9QDs5KNQUIGDObleQ",
  authDomain: "first-firebase-app-43db8.firebaseapp.com",
  databaseURL: "https://first-firebase-app-43db8.firebaseio.com",
  projectId: "first-firebase-app-43db8",
  storageBucket: "first-firebase-app-43db8.appspot.com",
  messagingSenderId: "842991307025",
  appId: "1:842991307025:web:40b3459345776117"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
