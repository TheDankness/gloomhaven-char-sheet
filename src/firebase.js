import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDICG35xY9BlPWBm4-Ke42HSDYWRue5tNs",
  authDomain: "gloomhaven-character-sheet.firebaseapp.com",
  databaseURL: "https://gloomhaven-character-sheet.firebaseio.com",
  projectId: "gloomhaven-character-sheet",
  storageBucket: "gloomhaven-character-sheet.appspot.com",
  messagingSenderId: "31771073274"
};

firebase.initializeApp(config);

export default firebase;