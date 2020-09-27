import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB0bVqYMX2nHwJQiS1cE6UJe2Uo7xWn3dM",
    authDomain: "worldclock-d7505.firebaseapp.com",
    databaseURL: "https://worldclock-d7505.firebaseio.com",
    projectId: "worldclock-d7505",
    storageBucket: "worldclock-d7505.appspot.com",
    messagingSenderId: "257832493192",
    appId: "1:257832493192:web:a93c618728e4ff8b9dff3d"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
 export default fire;